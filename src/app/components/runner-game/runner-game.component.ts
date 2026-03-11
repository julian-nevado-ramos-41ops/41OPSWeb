import {
    Component,
    ElementRef,
    HostListener,
    OnDestroy,
    OnInit,
    viewChild,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    inject,
} from '@angular/core';

// ─── Interfaces ──────────────────────────────────────────
interface Player {
    x: number;
    y: number;
    width: number;
    height: number;
    vy: number;          // vertical velocity
    isJumping: boolean;
}

interface Obstacle {
    x: number;
    y: number;
    width: number;
    height: number;
    passed: boolean;     // already scored
}

// ─── Constants ───────────────────────────────────────────
const CANVAS_W = 650;
const CANVAS_H = 300;
const GROUND_Y = CANVAS_H - 40;        // ground line
const GRAVITY = 1.2;                    // high gravity → fast, snappy jump arc
const JUMP_FORCE = -15;                 // strong impulse, but gravity pulls back fast
const INITIAL_SPEED = 5;
const MAX_SPEED = 10;
const SPEED_INCREMENT = 0.001;          // gentle ramp
const MIN_OBSTACLE_GAP = 300;           // generous spacing like Chrome dino
const MAX_OBSTACLE_GAP = 500;
const PLAYER_SIZE = 30;
const OBSTACLE_W = 20;
const MIN_OBSTACLE_H = 25;
const MAX_OBSTACLE_H = 50;
const LS_KEY = 'runner_high_score';

@Component({
    selector: 'app-runner-game',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './runner-game.component.html',
    styleUrls: ['./runner-game.component.scss'],
})
export class RunnerGameComponent implements OnInit, OnDestroy {
    // ─── Canvas ────────────────────────────────────────────
    canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('runnerCanvas');
    private ctx: CanvasRenderingContext2D | null = null;
    private animFrameId: number | null = null;
    private cdr = inject(ChangeDetectorRef);

    // ─── State ─────────────────────────────────────────────
    score = 0;
    highScore = 0;
    gameStarted = false;
    gameOver = false;

    // ─── Internal game data ────────────────────────────────
    private player: Player = this.newPlayer();
    private obstacles: Obstacle[] = [];
    private speed = INITIAL_SPEED;
    private distanceToNext = 150;         // px until next obstacle spawn
    private frameCount = 0;

    // ─── Lifecycle ─────────────────────────────────────────
    ngOnInit(): void {
        this.highScore = this.loadHighScore();
        setTimeout(() => this.initCanvas(), 0);
    }

    ngOnDestroy(): void {
        this.cancelAnimation();
    }

    // ─── Public API (template) ─────────────────────────────
    startGame(): void {
        this.resetState();
        this.gameStarted = true;
        this.gameOver = false;
        this.animFrameId = requestAnimationFrame(() => this.loop());
    }

    // ─── Keyboard controls ────────────────────────────────
    @HostListener('window:keydown', ['$event'])
    handleKey(e: KeyboardEvent): void {
        if (e.key === ' ' || e.key === 'ArrowUp') {
            e.preventDefault();
            this.jump();
        }
    }

    /** Canvas click / tap also triggers jump */
    onCanvasClick(): void {
        if (!this.gameStarted && !this.gameOver) {
            this.startGame();
            return;
        }
        this.jump();
    }

    // ─── Core loop ─────────────────────────────────────────
    private loop(): void {
        if (this.gameOver) return;

        this.update();
        this.render();

        this.animFrameId = requestAnimationFrame(() => this.loop());
    }

    // ─── Update logic ──────────────────────────────────────
    private update(): void {
        this.frameCount++;

        // --- Player physics ---
        this.player.vy += GRAVITY;
        this.player.y += this.player.vy;

        // Land on ground
        if (this.player.y + this.player.height >= GROUND_Y) {
            this.player.y = GROUND_Y - this.player.height;
            this.player.vy = 0;
            this.player.isJumping = false;
        }

        // --- Speed ramp ---
        if (this.speed < MAX_SPEED) {
            this.speed += SPEED_INCREMENT;
        }

        // --- Obstacles ---
        this.distanceToNext -= this.speed;
        if (this.distanceToNext <= 0) {
            this.spawnObstacle();
            this.distanceToNext =
                MIN_OBSTACLE_GAP + Math.random() * (MAX_OBSTACLE_GAP - MIN_OBSTACLE_GAP);
        }

        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obs = this.obstacles[i];
            obs.x -= this.speed;

            // Score: obstacle passed the player
            if (!obs.passed && obs.x + obs.width < this.player.x) {
                obs.passed = true;
                this.score++;
                this.cdr.detectChanges();
            }

            // Remove off-screen
            if (obs.x + obs.width < 0) {
                this.obstacles.splice(i, 1);
            }

            // Collision (AABB)
            if (this.checkCollision(this.player, obs)) {
                this.endGame();
                return;
            }
        }
    }

    // ─── Render ────────────────────────────────────────────
    private render(): void {
        const ctx = this.ctx;
        if (!ctx) return;

        // Background
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

        // Grid lines (subtle, like Snake)
        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = 0.5;
        for (let x = 0; x <= CANVAS_W; x += 25) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, CANVAS_H);
            ctx.stroke();
        }
        for (let y = 0; y <= CANVAS_H; y += 25) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(CANVAS_W, y);
            ctx.stroke();
        }

        // Ground line
        ctx.strokeStyle = '#0f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, GROUND_Y);
        ctx.lineTo(CANVAS_W, GROUND_Y);
        ctx.stroke();

        // Ground dots (scrolling effect)
        ctx.fillStyle = '#0a0';
        const dotOffset = (this.frameCount * this.speed) % 20;
        for (let x = -dotOffset; x < CANVAS_W; x += 20) {
            ctx.fillRect(x, GROUND_Y + 8, 2, 2);
            ctx.fillRect(x + 10, GROUND_Y + 18, 1, 1);
        }

        // Player
        this.drawPlayer(ctx);

        // Obstacles
        this.drawObstacles(ctx);
    }

    private drawPlayer(ctx: CanvasRenderingContext2D): void {
        const p = this.player;

        // Antennas
        ctx.strokeStyle = '#0f0';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        // Left antenna
        ctx.moveTo(p.x + p.width / 2, p.y);
        ctx.lineTo(p.x + p.width / 2 - 8, p.y - 12);
        // Right antenna
        ctx.moveTo(p.x + p.width / 2, p.y);
        ctx.lineTo(p.x + p.width / 2 + 8, p.y - 12);
        ctx.stroke();

        // Antenna tips
        ctx.fillStyle = '#0f0';
        ctx.beginPath();
        ctx.arc(p.x + p.width / 2 - 8, p.y - 12, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x + p.width / 2 + 8, p.y - 12, 2, 0, Math.PI * 2);
        ctx.fill();

        // Body — glowing green block
        ctx.shadowColor = '#0f0';
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#0f0';
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.shadowBlur = 0;

        // Inner detail
        ctx.fillStyle = '#0a0';
        ctx.fillRect(p.x + 4, p.y + 4, p.width - 8, p.height - 8);

        // Eyes
        ctx.fillStyle = '#111';
        const eyeY = p.y + 8;
        ctx.fillRect(p.x + 8, eyeY, 5, 5);
        ctx.fillRect(p.x + p.width - 13, eyeY, 5, 5);

        // Pupils
        ctx.fillStyle = '#0f0';
        ctx.fillRect(p.x + 10, eyeY + 2, 2, 2);
        ctx.fillRect(p.x + p.width - 11, eyeY + 2, 2, 2);

        // Legs (simple, animated)
        ctx.fillStyle = '#0f0';
        if (p.isJumping) {
            // Legs tucked
            ctx.fillRect(p.x + 4, p.y + p.height, 6, 3);
            ctx.fillRect(p.x + p.width - 10, p.y + p.height, 6, 3);
        } else {
            // Running animation — alternate legs
            const legFrame = Math.floor(this.frameCount / 5) % 2;
            if (legFrame === 0) {
                ctx.fillRect(p.x + 4, p.y + p.height, 4, 6);
                ctx.fillRect(p.x + p.width - 8, p.y + p.height, 4, 3);
            } else {
                ctx.fillRect(p.x + 4, p.y + p.height, 4, 3);
                ctx.fillRect(p.x + p.width - 8, p.y + p.height, 4, 6);
            }
        }
    }

    private drawObstacles(ctx: CanvasRenderingContext2D): void {
        for (const obs of this.obstacles) {
            // Glow
            ctx.shadowColor = '#f00';
            ctx.shadowBlur = 6;
            ctx.fillStyle = '#f00';
            ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
            ctx.shadowBlur = 0;

            // Inner stripe
            ctx.fillStyle = '#a00';
            ctx.fillRect(obs.x + 4, obs.y + 4, obs.width - 8, obs.height - 8);

            // Top spike
            ctx.fillStyle = '#f00';
            ctx.beginPath();
            ctx.moveTo(obs.x, obs.y);
            ctx.lineTo(obs.x + obs.width / 2, obs.y - 8);
            ctx.lineTo(obs.x + obs.width, obs.y);
            ctx.fill();
        }
    }

    // ─── Helpers ───────────────────────────────────────────
    private jump(): void {
        if (!this.gameStarted || this.gameOver) return;
        if (this.player.isJumping) return;   // prevent double-jump
        this.player.vy = JUMP_FORCE;
        this.player.isJumping = true;
    }

    private spawnObstacle(): void {
        const h =
            MIN_OBSTACLE_H + Math.random() * (MAX_OBSTACLE_H - MIN_OBSTACLE_H);
        this.obstacles.push({
            x: CANVAS_W,
            y: GROUND_Y - h,
            width: OBSTACLE_W,
            height: h,
            passed: false,
        });
    }

    /** AABB collision detection */
    private checkCollision(a: Player, b: Obstacle): boolean {
        // Shrink hitbox slightly for fairness
        const margin = 4;
        return (
            a.x + margin < b.x + b.width &&
            a.x + a.width - margin > b.x &&
            a.y + margin < b.y + b.height &&
            a.y + a.height - margin > b.y
        );
    }

    private endGame(): void {
        this.gameOver = true;
        this.gameStarted = false;
        this.cancelAnimation();

        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.saveHighScore(this.highScore);
        }
        this.cdr.detectChanges();
    }

    private resetState(): void {
        this.score = 0;
        this.speed = INITIAL_SPEED;
        this.obstacles = [];
        this.distanceToNext = 400;
        this.frameCount = 0;
        this.player = this.newPlayer();
        this.cancelAnimation();
    }

    private newPlayer(): Player {
        return {
            x: 60,
            y: GROUND_Y - PLAYER_SIZE,
            width: PLAYER_SIZE,
            height: PLAYER_SIZE,
            vy: 0,
            isJumping: false,
        };
    }

    private initCanvas(): void {
        const canvas = this.canvasRef()?.nativeElement;
        if (canvas) {
            this.ctx = canvas.getContext('2d');
            // Listen for click/tap on canvas
            canvas.addEventListener('click', () => this.onCanvasClick());
            // Draw idle screen
            this.renderIdle();
        }
    }

    private renderIdle(): void {
        const ctx = this.ctx;
        if (!ctx) return;

        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

        // Grid
        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = 0.5;
        for (let x = 0; x <= CANVAS_W; x += 25) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, CANVAS_H);
            ctx.stroke();
        }
        for (let y = 0; y <= CANVAS_H; y += 25) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(CANVAS_W, y);
            ctx.stroke();
        }

        // Ground
        ctx.strokeStyle = '#0f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, GROUND_Y);
        ctx.lineTo(CANVAS_W, GROUND_Y);
        ctx.stroke();

        // Player standing idle
        this.drawPlayer(ctx);
    }

    private cancelAnimation(): void {
        if (this.animFrameId !== null) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
    }

    // ─── localStorage ──────────────────────────────────────
    private loadHighScore(): number {
        try {
            return parseInt(localStorage.getItem(LS_KEY) || '0', 10) || 0;
        } catch {
            return 0;
        }
    }

    private saveHighScore(val: number): void {
        try {
            localStorage.setItem(LS_KEY, String(val));
        } catch {
            // storage quota or private browsing — silently ignore
        }
    }
}
