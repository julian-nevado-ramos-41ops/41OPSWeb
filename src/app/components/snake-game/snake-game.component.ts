import { Component, ElementRef, HostListener, OnDestroy, OnInit, viewChild, ChangeDetectorRef, inject } from '@angular/core';

@Component({
    selector: 'app-snake-game',
    standalone: true,
    templateUrl: './snake-game.component.html',
    styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit, OnDestroy {
    canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('snakeBoard');

    private ctx: CanvasRenderingContext2D | null = null;
    private animFrameId: number | null = null;
    private cdr = inject(ChangeDetectorRef);

    private readonly gridSize = 25;
    private readonly initialSpeed = 150;

    private snake: { x: number, y: number }[] = [];
    private prevSnake: { x: number, y: number }[] = [];
    private food: { x: number, y: number } = { x: 0, y: 0 };
    private prevFood: { x: number, y: number } | null = null;
    private foodJustEaten = false;
    private dx = this.gridSize;
    private dy = 0;

    public score = 0;
    public gameOver = false;
    public gameStarted = false;
    private currentSpeed = this.initialSpeed;
    private inputQueue: { dx: number, dy: number }[] = [];

    private lastTickTime = 0;
    private tickProgress = 1;

    ngOnInit(): void {
        setTimeout(() => {
            this.initGame();
        }, 0);
    }

    ngOnDestroy(): void {
        this.cancelAnimation();
    }

    private initGame(): void {
        const canvas = this.canvasRef()?.nativeElement;
        if (canvas) {
            this.ctx = canvas.getContext('2d');
            this.snake = [
                { x: 3 * this.gridSize, y: Math.floor((canvas.height / 2) / this.gridSize) * this.gridSize },
                { x: 2 * this.gridSize, y: Math.floor((canvas.height / 2) / this.gridSize) * this.gridSize },
                { x: 1 * this.gridSize, y: Math.floor((canvas.height / 2) / this.gridSize) * this.gridSize }
            ];
            this.prevSnake = this.snake.map(s => ({ ...s }));
            this.clearCanvas();
            this.drawSnake(1);
        }
    }

    public startGame(): void {
        this.gameStarted = true;
        this.resetGame();
    }

    public resetGame(): void {
        this.cancelAnimation();
        const canvas = this.canvasRef()?.nativeElement;
        const startY = canvas ? Math.floor((canvas.height / 2) / this.gridSize) * this.gridSize : 0;
        this.snake = [
            { x: 3 * this.gridSize, y: startY },
            { x: 2 * this.gridSize, y: startY },
            { x: 1 * this.gridSize, y: startY }
        ];
        this.prevSnake = this.snake.map(s => ({ ...s }));
        this.dx = this.gridSize;
        this.dy = 0;
        this.score = 0;
        this.gameOver = false;
        this.gameStarted = true;
        this.currentSpeed = this.initialSpeed;
        this.inputQueue = [];
        this.lastTickTime = performance.now();
        this.tickProgress = 1;
        this.spawnFood();
        this.animFrameId = requestAnimationFrame((t) => this.gameLoop(t));
    }

    private gameLoop(timestamp: number): void {
        if (this.gameOver) return;

        const elapsed = timestamp - this.lastTickTime;

        if (elapsed >= this.currentSpeed) {
            // Save previous positions for interpolation
            this.prevSnake = this.snake.map(s => ({ ...s }));

            // Clear previous food eaten flag
            this.foodJustEaten = false;
            this.prevFood = null;

            // Process one queued input
            if (this.inputQueue.length > 0) {
                const next = this.inputQueue.shift()!;
                this.dx = next.dx;
                this.dy = next.dy;
            }

            // Advance game logic
            this.advanceSnake();

            if (this.hasGameEnded()) {
                this.gameOver = true;
                this.gameStarted = false;
                // Draw final frame at full progress
                this.clearCanvas();
                this.drawFood();
                this.drawSnake(1);
                this.cdr.detectChanges();
                return;
            }

            this.lastTickTime = timestamp;
            this.tickProgress = 0;
        } else {
            this.tickProgress = elapsed / this.currentSpeed;
        }

        // Render interpolated frame
        this.clearCanvas();
        // If food was just eaten, keep drawing old food while snake slides toward it
        if (this.foodJustEaten && this.prevFood) {
            this.drawFoodAt(this.prevFood);
        }
        this.drawFood();
        this.drawSnake(this.tickProgress);

        this.animFrameId = requestAnimationFrame((t) => this.gameLoop(t));
    }

    private cancelAnimation(): void {
        if (this.animFrameId !== null) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
    }

    private clearCanvas(): void {
        if (!this.ctx) return;
        const canvas = this.canvasRef()?.nativeElement;
        if (canvas) {
            this.ctx.fillStyle = '#111';
            this.ctx.strokeStyle = '#333';
            this.ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.ctx.strokeRect(0, 0, canvas.width, canvas.height);

            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#222';
            this.ctx.beginPath();
            for (let x = 0; x <= canvas.width; x += this.gridSize) {
                this.ctx.moveTo(x, 0);
                this.ctx.lineTo(x, canvas.height);
            }
            for (let y = 0; y <= canvas.height; y += this.gridSize) {
                this.ctx.moveTo(0, y);
                this.ctx.lineTo(canvas.width, y);
            }
            this.ctx.stroke();
        }
    }

    private lerp(a: number, b: number, t: number): number {
        return a + (b - a) * t;
    }

    private drawSnake(progress: number): void {
        if (!this.ctx || this.snake.length === 0) return;

        const ctx = this.ctx;
        const halfGrid = this.gridSize / 2;

        // Build interpolated positions
        const interpolated: { x: number, y: number }[] = [];
        for (let i = 0; i < this.snake.length; i++) {
            if (i < this.prevSnake.length) {
                interpolated.push({
                    x: this.lerp(this.prevSnake[i].x, this.snake[i].x, progress),
                    y: this.lerp(this.prevSnake[i].y, this.snake[i].y, progress)
                });
            } else {
                interpolated.push({ ...this.snake[i] });
            }
        }

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#0c0';

        for (let i = 1; i < interpolated.length; i++) {
            const prev = interpolated[i - 1];
            const curr = interpolated[i];

            ctx.beginPath();
            ctx.moveTo(prev.x + halfGrid, prev.y + halfGrid);
            ctx.lineTo(curr.x + halfGrid, curr.y + halfGrid);

            const ratio = 1 - (i / interpolated.length);
            const width = Math.max(2, this.gridSize * 0.8 * ratio);
            ctx.lineWidth = width;
            ctx.stroke();
        }

        const head = interpolated[0];
        const headX = head.x + halfGrid;
        const headY = head.y + halfGrid;
        const headRadius = this.gridSize * 0.5;

        ctx.fillStyle = '#0f0';
        ctx.beginPath();
        ctx.arc(headX, headY, headRadius, 0, Math.PI * 2);
        ctx.fill();

        let eye1X = 0, eye1Y = 0;
        let eye2X = 0, eye2Y = 0;
        let pupilOffsetX = 0, pupilOffsetY = 0;

        const eyeDist = headRadius * 0.5;
        const eyeOffset = headRadius * 0.4;
        const pupilShift = headRadius * 0.15;

        if (this.dx > 0) {
            eye1X = eyeDist; eye1Y = -eyeOffset;
            eye2X = eyeDist; eye2Y = eyeOffset;
            pupilOffsetX = pupilShift; pupilOffsetY = 0;
        } else if (this.dx < 0) {
            eye1X = -eyeDist; eye1Y = -eyeOffset;
            eye2X = -eyeDist; eye2Y = eyeOffset;
            pupilOffsetX = -pupilShift; pupilOffsetY = 0;
        } else if (this.dy > 0) {
            eye1X = -eyeOffset; eye1Y = eyeDist;
            eye2X = eyeOffset; eye2Y = eyeDist;
            pupilOffsetX = 0; pupilOffsetY = pupilShift;
        } else if (this.dy < 0) {
            eye1X = -eyeOffset; eye1Y = -eyeDist;
            eye2X = eyeOffset; eye2Y = -eyeDist;
            pupilOffsetX = 0; pupilOffsetY = -pupilShift;
        } else {
            eye1X = eyeDist; eye1Y = -eyeOffset;
            eye2X = eyeDist; eye2Y = eyeOffset;
            pupilOffsetX = pupilShift; pupilOffsetY = 0;
        }

        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(headX + eye1X, headY + eye1Y, headRadius * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(headX + eye2X, headY + eye2Y, headRadius * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(headX + eye1X + pupilOffsetX, headY + eye1Y + pupilOffsetY, headRadius * 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(headX + eye2X + pupilOffsetX, headY + eye2Y + pupilOffsetY, headRadius * 0.15, 0, Math.PI * 2);
        ctx.fill();
    }

    private advanceSnake(): void {
        const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
        this.snake.unshift(head);

        const hasEatenFood = head.x === this.food.x && head.y === this.food.y;
        if (hasEatenFood) {
            this.score += 1;
            this.cdr.detectChanges();
            this.prevFood = { ...this.food };
            this.foodJustEaten = true;
            this.spawnFood();
            if (this.currentSpeed > 70) {
                this.currentSpeed -= 1.5;
            }
        } else {
            this.snake.pop();
        }
    }

    private drawFood(): void {
        this.drawFoodAt(this.food);
    }

    private drawFoodAt(pos: { x: number, y: number }): void {
        const ctx = this.ctx;
        if (!ctx) return;

        const halfGrid = this.gridSize / 2;
        const centerX = pos.x + halfGrid;
        const centerY = pos.y + halfGrid;
        const radius = this.gridSize * 0.4;

        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(centerX - radius * 0.3, centerY - radius * 0.3, radius * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0f0';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY - radius * 0.9, radius * 0.3, radius * 0.15, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
    }

    private randomTen(min: number, max: number): number {
        return Math.round((Math.random() * (max - min) + min) / this.gridSize) * this.gridSize;
    }

    private spawnFood(): void {
        const canvas = this.canvasRef()?.nativeElement;
        if (!canvas) return;

        this.food.x = this.randomTen(0, canvas.width - this.gridSize);
        this.food.y = this.randomTen(0, canvas.height - this.gridSize);

        this.snake.forEach((part) => {
            const hasEaten = part.x === this.food.x && part.y === this.food.y;
            if (hasEaten) {
                this.spawnFood();
            }
        });
    }

    private hasGameEnded(): boolean {
        const canvas = this.canvasRef()?.nativeElement;
        if (!canvas) return true;

        for (let i = 4; i < this.snake.length; i++) {
            if (this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y) {
                return true;
            }
        }

        const hitLeftWall = this.snake[0].x < 0;
        const hitRightWall = this.snake[0].x >= canvas.width;
        const hitToptWall = this.snake[0].y < 0;
        const hitBottomWall = this.snake[0].y >= canvas.height;

        return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent): void {
        if (!this.gameStarted) return;

        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
            event.preventDefault();
        }

        // Determine current effective direction (after queued inputs)
        let effectiveDx = this.dx;
        let effectiveDy = this.dy;
        if (this.inputQueue.length > 0) {
            const last = this.inputQueue[this.inputQueue.length - 1];
            effectiveDx = last.dx;
            effectiveDy = last.dy;
        }

        const keyPressed = event.key;
        const goingUp = effectiveDy === -this.gridSize;
        const goingDown = effectiveDy === this.gridSize;
        const goingRight = effectiveDx === this.gridSize;
        const goingLeft = effectiveDx === -this.gridSize;

        let newDx = effectiveDx;
        let newDy = effectiveDy;
        let valid = false;

        if ((keyPressed === 'ArrowLeft' || keyPressed === 'a' || keyPressed === 'A') && !goingRight) {
            newDx = -this.gridSize;
            newDy = 0;
            valid = true;
        } else if ((keyPressed === 'ArrowUp' || keyPressed === 'w' || keyPressed === 'W') && !goingDown) {
            newDx = 0;
            newDy = -this.gridSize;
            valid = true;
        } else if ((keyPressed === 'ArrowRight' || keyPressed === 'd' || keyPressed === 'D') && !goingLeft) {
            newDx = this.gridSize;
            newDy = 0;
            valid = true;
        } else if ((keyPressed === 'ArrowDown' || keyPressed === 's' || keyPressed === 'S') && !goingUp) {
            newDx = 0;
            newDy = this.gridSize;
            valid = true;
        }

        if (valid && this.inputQueue.length < 2) {
            this.inputQueue.push({ dx: newDx, dy: newDy });
        }
    }
}

