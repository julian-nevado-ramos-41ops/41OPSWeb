import {
  Component,
  ChangeDetectionStrategy,
  output,
  signal,
  afterNextRender,
  OnDestroy,
  ElementRef,
  input,
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
  isActive = input<boolean>(false);

  isPressed = signal(false);
  private pressTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly ANIMATION_DURATION = 1000;
  /** Tracks whether THIS button initiated the current spacebar press */
  private isHandlingPress = false;

  private keydownHandler = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      // If this button initiated the current press, keep preventing default
      // even after navigating (e.g. to the last section which has no button)
      if (this.isHandlingPress && event.repeat) {
        event.preventDefault();
        return;
      }
      // Only respond if this button's section is the active one and parent container is in view
      if (!this.isCurrentSection() || !this.isInView()) return;
      event.preventDefault();
      if (!event.repeat) {
        this.isHandlingPress = true;
        this.startPress(event);
      }
    }
  };

  private keyupHandler = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      this.isHandlingPress = false;
      this.cancelPress();
    }
  };

  constructor(private elementRef: ElementRef<HTMLElement>) {
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

  /** Check if this button's section is the currently active section in its container */
  private isCurrentSection(): boolean {
    // Walk up to find the parent app-section
    let sectionEl: HTMLElement | null = this.elementRef.nativeElement;
    while (sectionEl && sectionEl.tagName !== 'APP-SECTION') {
      sectionEl = sectionEl.parentElement;
    }
    if (!sectionEl) return false;

    // Walk up to find the parent app-sections-container
    let containerEl: HTMLElement | null = sectionEl;
    while (containerEl && containerEl.tagName !== 'APP-SECTIONS-CONTAINER') {
      containerEl = containerEl.parentElement;
    }
    if (!containerEl) return false;

    // Find this section's index among its sibling sections
    const allSections = Array.from(containerEl.querySelectorAll(':scope > * app-section'));
    // For horizontal containers, also check direct children
    const sections = allSections.length > 0 ? allSections : Array.from(containerEl.querySelectorAll('app-section'));
    const myIndex = sections.indexOf(sectionEl);

    // Check which section currently has the 'visible' class
    const visibleIndex = sections.findIndex(s => s.classList.contains('visible'));

    return myIndex === visibleIndex;
  }

  /** Check if the parent sections-container is visible in the viewport center */
  private isInView(): boolean {
    // Walk up to find the parent app-sections-container
    let el: HTMLElement | null = this.elementRef.nativeElement;
    while (el && el.tagName !== 'APP-SECTIONS-CONTAINER') {
      el = el.parentElement;
    }
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
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
