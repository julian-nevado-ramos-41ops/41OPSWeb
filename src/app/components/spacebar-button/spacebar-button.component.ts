import {
  Component,
  ChangeDetectionStrategy,
  output,
  signal,
  afterNextRender,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-spacebar-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'spacebar__button',
    '[class.is-pressed]': 'isPressed()',
    '(mousedown)': 'startPress($event)',
    '(mouseup)': 'cancelPress()',
    '(mouseleave)': 'cancelPress()',
    '(touchstart)': 'startPress($event)',
    '(touchend)': 'cancelPress()',
  },
  templateUrl: `spacebar_button_template.html`,
  styleUrl: './spacebar_button_styles.css',
})
export class SpacebarButtonComponent implements OnDestroy {
  pressed = output<void>();

  isPressed = signal(false);
  private pressTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly ANIMATION_DURATION = 1000;

  private keydownHandler = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault(); // Always prevent scrolling
      if (!event.repeat) {
        this.startPress(event);
      }
    }
  };

  private keyupHandler = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      this.cancelPress();
    }
  };

  constructor() {
    afterNextRender(() => {
      document.addEventListener('keydown', this.keydownHandler);
      document.addEventListener('keyup', this.keyupHandler);
    });
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.keydownHandler);
    document.removeEventListener('keyup', this.keyupHandler);
    if (this.pressTimer) {
      clearTimeout(this.pressTimer);
    }
  }

  gradientTransform() {
    return this.isPressed() ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1, -140, 0)';
  }

  startPress(event: Event) {
    if (this.isPressed()) return;

    event.preventDefault();
    this.isPressed.set(true);

    this.pressTimer = setTimeout(() => {
      this.completeAction();
    }, this.ANIMATION_DURATION);
  }

  cancelPress() {
    if (this.pressTimer) {
      clearTimeout(this.pressTimer);
      this.pressTimer = null;
    }
    this.isPressed.set(false);
  }

  private completeAction() {
    if (this.pressTimer) {
      clearTimeout(this.pressTimer);
      this.pressTimer = null;
    }
    this.pressed.emit();
    this.isPressed.set(false);
  }
}
