import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../i18n';
import { RunnerGameComponent } from '../runner-game/runner-game.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RunnerGameComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <img src="img/logo-ISO.png" alt="ISO Logo" class="iso-logo">
          <span class="iso-text">{{ ts.t().footer.isoText }}</span>
        </div>
        <div class="footer-right">
          <p class="copyright">
            <span class="easter-egg" (click)="showGame.set(true)">&copy;</span> {{ currentYear() }} SciTheWorld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    @if (showGame()) {
      <div class="game-overlay" (click)="onOverlayClick($event)">
        <button class="close-btn" (click)="showGame.set(false)">✕</button>
        <app-runner-game />
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      background-color: #0d0d0d;
      color: rgba(255, 255, 255, 0.6);
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer {
      padding: 2rem 5%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .footer-left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .iso-logo {
      height: 40px;
      width: auto;
      object-fit: contain;
    }

    .iso-text {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .copyright {
      margin: 0;
      letter-spacing: 0.02em;
    }

    .easter-egg {
      cursor: pointer;
      user-select: none;
    }

    /* ─── Fullscreen game overlay ─── */
    .game-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 30px;
      background: transparent;
      border: 1px solid #333;
      color: #0f0;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 6px 12px;
      font-family: 'Courier New', monospace;
      transition: all 0.3s;
      z-index: 10000;
    }

    .close-btn:hover {
      background: #0f0;
      color: #000;
      box-shadow: 0 0 10px #0f0;
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      
      .footer-left {
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  `]
})
export class FooterComponent {
  readonly ts = inject(TranslationService);
  currentYear = computed(() => new Date().getFullYear());
  showGame = signal(false);

  onOverlayClick(event: MouseEvent): void {
    // Close only if clicking the dark backdrop, not the game itself
    if ((event.target as HTMLElement).classList.contains('game-overlay')) {
      this.showGame.set(false);
    }
  }
}
