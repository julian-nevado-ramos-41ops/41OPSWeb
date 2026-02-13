import { Component, ChangeDetectionStrategy, input, numberAttribute, contentChildren, signal, effect } from '@angular/core';
import { AccordionCardComponent } from '../accordion-card/accordion-card.component';

@Component({
  selector: 'app-accordion-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'bento-container',
  },
  template: `<ng-content />`,
  styles: `
    :host {
      display: flex;
      gap: 12px;
      width: 85%;
      height: 70vh;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      :host {
        flex-direction: column;
        height: auto;
        margin-left: 0;
      }
    }
  `,
})
export class AccordionContainerComponent {
  blockCount = input(2, { transform: numberAttribute });

  cards = contentChildren(AccordionCardComponent);
  anyExpanded = signal(false);

  constructor() {
    effect(() => {
      const cards = this.cards();
      const hasExpanded = cards.some(card => card.expanded());
      console.log('Accordion Effect: hasExpanded=', hasExpanded, 'cards=', cards.length);

      this.anyExpanded.set(hasExpanded);

      // Propagar el estado a todas las cards
      cards.forEach(card => {
        card.anyExpanded.set(hasExpanded);
      });
    });
  }
}
