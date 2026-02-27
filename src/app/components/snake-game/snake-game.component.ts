import { Component, ElementRef, HostListener, OnDestroy, OnInit, viewChild } from '@angular/core';

@Component({
    selector: 'app-snake-game',
    standalone: true,
    templateUrl: './snake-game.component.html',
    styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit, OnDestroy {
    canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('snakeBoard');

    private ctx: CanvasRenderingContext2D | null = null;
    private intervalId: any;

    private readonly gridSize = 20;
    private readonly initialSpeed = 150;

    private snake: { x: number, y: number }[] = [];
    private food: { x: number, y: number } = { x: 0, y: 0 };
    private dx = this.gridSize;
    private dy = 0;

    public score = 0;
    public gameOver = false;
    private currentSpeed = this.initialSpeed;
    private changingDirection = false;

    ngOnInit(): void {
        setTimeout(() => {
            this.initGame();
        }, 0);
    }

    ngOnDestroy(): void {
        this.clearInterval();
    }

    private initGame(): void {
        const canvas = this.canvasRef()?.nativeElement;
        if (canvas) {
            this.ctx = canvas.getContext('2d');
            this.resetGame();
        }
    }

    public resetGame(): void {
        this.clearInterval();
        this.snake = [
            { x: 3 * this.gridSize, y: 0 },
            { x: 2 * this.gridSize, y: 0 },
            { x: 1 * this.gridSize, y: 0 }
        ];
        this.dx = this.gridSize;
        this.dy = 0;
        this.score = 0;
        this.gameOver = false;
        this.currentSpeed = this.initialSpeed;
        this.spawnFood();
        this.gameLoop();
    }

    private gameLoop(): void {
        if (this.hasGameEnded()) {
            this.gameOver = true;
            return;
        }

        this.changingDirection = false;
        this.intervalId = setTimeout(() => {
            this.clearCanvas();
            this.drawFood();
            this.advanceSnake();
            this.drawSnake();
            this.gameLoop();
        }, this.currentSpeed);
    }

    private clearInterval(): void {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
            this.intervalId = null;
        }
    }

    private clearCanvas(): void {
        if (!this.ctx) return;
        const canvas = this.canvasRef()?.nativeElement;
        if (canvas) {
            this.ctx.fillStyle = '#111'; // Dark background
            this.ctx.strokeStyle = '#333';
            this.ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.ctx.strokeRect(0, 0, canvas.width, canvas.height);
        }
    }

    private drawSnake(): void {
        if (!this.ctx) return;
        this.snake.forEach((part, index) => {
            if (!this.ctx) return;
            this.ctx.fillStyle = index === 0 ? '#0f0' : '#0c0'; // Neon green
            this.ctx.strokeStyle = '#000';
            this.ctx.fillRect(part.x, part.y, this.gridSize, this.gridSize);
            this.ctx.strokeRect(part.x, part.y, this.gridSize, this.gridSize);
        });
    }

    private advanceSnake(): void {
        const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
        this.snake.unshift(head);

        const hasEatenFood = head.x === this.food.x && head.y === this.food.y;
        if (hasEatenFood) {
            this.score += 10;
            this.spawnFood();
            // Increase speed slightly up to a limit
            if (this.currentSpeed > 50) {
                this.currentSpeed -= 2;
            }
        } else {
            this.snake.pop();
        }
    }

    private drawFood(): void {
        if (!this.ctx) return;
        this.ctx.fillStyle = '#f00'; // Red food
        this.ctx.strokeStyle = '#000';
        this.ctx.fillRect(this.food.x, this.food.y, this.gridSize, this.gridSize);
        this.ctx.strokeRect(this.food.x, this.food.y, this.gridSize, this.gridSize);
    }

    private randomTen(min: number, max: number): number {
        return Math.round((Math.random() * (max - min) + min) / this.gridSize) * this.gridSize;
    }

    private spawnFood(): void {
        const canvas = this.canvasRef()?.nativeElement;
        if (!canvas) return;

        this.food.x = this.randomTen(0, canvas.width - this.gridSize);
        this.food.y = this.randomTen(0, canvas.height - this.gridSize);

        // If spawned on snake, respawn
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
        const hitRightWall = this.snake[0].x > canvas.width - this.gridSize;
        const hitToptWall = this.snake[0].y < 0;
        const hitBottomWall = this.snake[0].y > canvas.height - this.gridSize;

        return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent): void {
        if (this.changingDirection) return;

        // Prevent default scrolling for arrow keys and space
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
            event.preventDefault();
        }

        const keyPressed = event.key;
        const goingUp = this.dy === -this.gridSize;
        const goingDown = this.dy === this.gridSize;
        const goingRight = this.dx === this.gridSize;
        const goingLeft = this.dx === -this.gridSize;

        if ((keyPressed === 'ArrowLeft' || keyPressed === 'a' || keyPressed === 'A') && !goingRight) {
            this.dx = -this.gridSize;
            this.dy = 0;
            this.changingDirection = true;
        }
        if ((keyPressed === 'ArrowUp' || keyPressed === 'w' || keyPressed === 'W') && !goingDown) {
            this.dx = 0;
            this.dy = -this.gridSize;
            this.changingDirection = true;
        }
        if ((keyPressed === 'ArrowRight' || keyPressed === 'd' || keyPressed === 'D') && !goingLeft) {
            this.dx = this.gridSize;
            this.dy = 0;
            this.changingDirection = true;
        }
        if ((keyPressed === 'ArrowDown' || keyPressed === 's' || keyPressed === 'S') && !goingUp) {
            this.dx = 0;
            this.dy = this.gridSize;
            this.changingDirection = true;
        }
    }
}
