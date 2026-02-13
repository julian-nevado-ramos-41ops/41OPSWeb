import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

@Component({
  selector: 'app-section-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'section-indicator',
  },
  template: `
    <div class="indicator-wrapper">
      <span class="current">{{ formattedCurrent() }}</span>
      <span class="separator">/</span>
      <span class="total">{{ formattedTotal() }}</span>
    </div>
  `,
  styles: `
    :host {
      display: block; /* Ensure it's a block for positioning */
      color: #ffffff;
      font-family: 'Bebas Neue', sans-serif;
      /* Positioning handled by parent */
    }

    .indicator-wrapper {
      display: flex;
      align-items: baseline;
      gap: 2px;
      line-height: 1;
    }

    .current {
      font-size: 3rem; /* Matching the large "04" in image */
      font-weight: 400;
      letter-spacing: -2px;
    }

    .separator {
      font-size: 2rem;
      opacity: 0.8;
      margin-left: 2px;
      transform: translateY(-2px);
    }

    .total {
      font-size: 2rem; /* Matching the smaller "09" in image */
      opacity: 0.9;;
      margin-left: 0px
      transform: translateY(1px);
    }

    @media (max-width: 768px) {
      :host {
        bottom: 1.5rem;
        left: 1.5rem;
      }
      .current { font-size: 2.5rem; }
      .separator { font-size: 2rem; }
      .total { font-size: 1.25rem; }
    }
  `,
})
export class SectionIndicatorComponent {
  current = input.required<number>();
  total = input.required<number>();

  formattedCurrent = computed(() =>
    (this.current() + 1).toString().padStart(2, '0')
  );

  formattedTotal = computed(() =>
    this.total().toString().padStart(2, '0')
  );
}
