import { Component, ChangeDetectionStrategy, input, computed, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'section',
    '[class.visible]': 'isVisible()',
    '[class.folded]': 'isFolded()',
    '[class.full-width-section]': 'isAccordionSection() || fullWidth()',
    '[style.background-color]': 'backgroundColor()',
    '[id]': '"section-" + id()',
  },
  template: `
    <div class="section-content" [class.full-width]="isAccordionSection() || fullWidth()">
      @if (!isAccordionSection()) {
        <h1 class="section-title">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="section-subtitle">{{ subtitle() }}</p>
        }
      } @else {
        <h3 class="section-mini-title">{{ title() }}</h3>
      }
      <ng-content />
    </div>
  `,
  styles: [`
    :host {
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 10%;
      position: relative;
      overflow: hidden;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

    :host.full-width-section {
      padding-left: 0;
      justify-content: center;
    }

    :host.folded {
      display: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
      opacity: 0;
      transition: opacity 1s ease;
      pointer-events: none;
    }

    :host.visible::before {
      opacity: 1;
    }

    .section-content {
      text-align: left;
      padding: 2rem 0;
      max-width: 600px;
      margin-right: auto;
      margin-left: 0;
      opacity: 1;
      transform: translateY(0);
    }

    :host.visible .section-content {
      /* Visible state - same as default now */
      opacity: 1;
      transform: translateY(0);
    }

    .section-content.full-width {
      width: 100%;
      max-width: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
    }

    .section-title {
      font-family: 'Bebas Neue', 'Impact', sans-serif;
      font-size: clamp(2rem, 10vw, 8rem);
      font-weight: 400;
      letter-spacing: 0.05em;
      line-height: 0.9;
      text-transform: uppercase;
      color: #ffffff;
      transition-delay: 1s;
    }

    .section-subtitle {
      font-family: 'Inter', sans-serif;
      font-size: clamp(0.875rem, 2vw, 2rem);
      font-weight: 300;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: #ffffff;
      margin-top: 1rem;
      opacity: 0.9;
      transition-delay: 0.2s;
    }

    .section-mini-title {
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1.5rem;
      color: rgba(255, 255, 255, 0.6);
    }
  `],
})
export class SectionComponent {
  id = input.required<number>();
  title = input.required<string>();
  subtitle = input('');
  backgroundColor = input('var(--color-1)');
  isAccordionSection = input(false, { transform: booleanAttribute });
  fullWidth = input(false, { transform: booleanAttribute });
  isVisible = input(false);
  isFolded = input(false);
}
