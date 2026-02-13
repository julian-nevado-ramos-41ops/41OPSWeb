import { Component, ChangeDetectionStrategy, input, output, booleanAttribute, signal } from '@angular/core';

@Component({
  selector: 'app-accordion-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'card',
    '[class.expanded]': 'expanded()',
    '[class.collapsed]': '!expanded()',
    '[class.no-expanded]': '!anyExpanded()',
    '(click)': 'onClick()',
  },
  template: `
    <div class="vertical-title">{{ title() }}</div>
    <div class="card-content">
      <h2>{{ title() }}</h2>
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: flex 0.5s cubic-bezier(0.25, 1, 0.5, 1);
      background: #0d0d0d;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    :host.expanded {
      flex: 8;
    }

    :host.collapsed {
      flex: 1;
      background: #111;
      align-items: center;
      justify-content: center;
    }

    :host.collapsed:hover {
      background: #1a1a1a;
    }

    .card-content {
      padding: 40px 60px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 10%;
      opacity: 1;
      transition: opacity 0.3s ease;
      max-width: 600px;
      box-sizing: border-box;
      overflow: hidden;
    }

    :host.collapsed .card-content {
      display: none;
    }

    .vertical-title {
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform-origin: 0 50%;
      transform: rotate(-90deg);
      white-space: nowrap;
      font-size: 1.8rem;
      font-weight: 500;
      color: #ffffff;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    :host.collapsed.no-expanded .vertical-title {
      opacity: 1;
      transform: none;
      left: 40px;
      bottom: 40px;
    }

    /* When expanded, collapsed cards should just show vertical title (default opacity 0 in base style, need to override here) */
    :host.collapsed:not(.no-expanded) .vertical-title {
      opacity: 1;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 400;
      margin: 0 0 1.5rem 0;
      font-family: 'Bebas Neue', 'Impact', sans-serif;
      color: #ffffff;
    }

    @media (max-width: 768px) {
      :host,
      :host.collapsed,
      :host.expanded {
        flex: none;
        height: 200px;
        width: 100%;
      }

      :host.expanded {
        height: 400px;
      }

      .vertical-title {
        display: none;
      }

      :host.collapsed .card-content {
        display: flex;
      }

      .card-content {
        padding: 30px;
      }
    }
  `,
})
export class AccordionCardComponent {
  title = input.required<string>();
  expanded = input(false, { transform: booleanAttribute });
  clicked = output<void>();
  anyExpanded = signal(false);

  onClick() {
    if (!this.expanded()) {
      this.clicked.emit();
    }
  }
}
