import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'hero-section',
  },
  template: `
    <div class="hero-content" [class]="'align-' + alignment()">
      @if (subtitle()) {
        <p class="hero-subtitle" 
           [style.color]="subtitleColor()"
           [style.font-size]="subtitleSize()">
          @if (showBrackets()) {
            <span class="bracket" [style.color]="bracketsColor()">[</span>
          }
          {{ subtitle() }}
          @if (showBrackets()) {
            <span class="bracket" [style.color]="bracketsColor()">]</span>
          }
        </p>
      }
      <h2 class="hero-title">{{ title() }}</h2>
      
      @if (description()) {
        <p class="hero-description"
           [style.color]="descriptionColor()"
           [style.font-size]="descriptionSize()">
          {{ description() }}
        </p>
      }
    </div>
  `,
  styles: [`
    :host {
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f4f1ea; /* Matches site background */
      color: #1a1a1a;
      position: relative;
      overflow: hidden;
      scroll-snap-align: start;
    }

    .hero-content {
      z-index: 1;
      padding: 0 5%;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1400px;
    }

    .hero-content.align-left {
      align-items: flex-start;
      text-align: left;
    }

    .hero-content.align-center {
      align-items: center;
      text-align: center;
    }

    .hero-content.align-right {
      align-items: flex-end;
      text-align: right;
    }

    .hero-title {
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: clamp(3rem, 10vw, 8rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.1;
      color: #1a1a1a;
      margin: 0;
    }

    .hero-subtitle {
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-weight: 400;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
      max-width: 800px;
    }

    .hero-description {
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      margin-top: 2rem;
      max-width: 600px;
    }
    
    .bracket {
      font-weight: 700;
      margin: 0 0.1em;
    }

    .bracket:first-child {
      margin-left: 0;
    }
  `],
})
export class HeroComponent {
  title = input.required<string>();
  subtitle = input('');
  description = input('');

  // Customization Inputs
  alignment = input<'left' | 'center' | 'right'>('left');
  subtitleSize = input<string>('1.5rem');
  subtitleColor = input<string>('gray');
  showBrackets = input<boolean>(false);
  bracketsColor = input<string>('var(--color-1)');

  descriptionSize = input<string>('1.2rem');
  descriptionColor = input<string>('#666666');
}
