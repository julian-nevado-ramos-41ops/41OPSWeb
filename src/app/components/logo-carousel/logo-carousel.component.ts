import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Logo {
  src: string;
  name: string;
  offsetY: number; // Ajuste vertical en píxeles (positivo = abajo, negativo = arriba)
}

@Component({
  selector: 'app-logo-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="carousel-header">
      <span class="bracket">[</span>
      <h2 class="carousel-title">Brands that trust us</h2>
      <span class="bracket">]</span>
      <!--<span class="arrow">▼</span>-->
    </div>
    
    <!-- Main Carousel Wrapper -->
    <div class="carousel-wrapper">
      <div class="track-container">
        <div class="track animate-scroll"
             (mouseenter)="isPaused = true"
             (mouseleave)="isPaused = false; resetAllMagnets()">
          
          <!-- Original Set -->
          <div *ngFor="let logo of logos; let i = index" 
               class="logo-item"
               style="flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 200px; height: 100px; cursor: pointer;"
               (mousemove)="handleMouseMove($event, i)" 
               (mouseleave)="handleMouseLeave(i)"
               [style.transform]="getTransform(i)">
            <img 
              [src]="logo.src" 
              [alt]="logo.name" 
              style="height: 40px; width: auto; max-width: 160px; object-fit: contain; transition: all 0.3s ease; display: block;"
              [style.transform]="'translateY(' + logo.offsetY + 'px)'"
              [style.filter]="hoveredIndex === i ? 'grayscale(0) brightness(1.2)' : 'grayscale(1) brightness(1.1)'"
              [style.opacity]="hoveredIndex === i ? '1' : '0.8'"
            />
          </div>

          <!-- Duplicate Set for Infinite Scroll -->
          <div *ngFor="let logo of logos; let i = index" 
               class="logo-item"
               style="flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 200px; height: 100px; cursor: pointer;"
               (mousemove)="handleMouseMove($event, i + logos.length)" 
               (mouseleave)="handleMouseLeave(i + logos.length)"
               [style.transform]="getTransform(i + logos.length)">
            <img 
              [src]="logo.src" 
              [alt]="logo.name" 
              style="height: 40px; width: auto; max-width: 160px; object-fit: contain; transition: all 0.3s ease; display: block;"
              [style.transform]="'translateY(' + logo.offsetY + 'px)'"
              [style.filter]="hoveredIndex === (i + logos.length) ? 'grayscale(0) brightness(1.2)' : 'grayscale(1) brightness(1.1)'"
              [style.opacity]="hoveredIndex === (i + logos.length) ? '1' : '0.8'"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .carousel-header {
      display: flex;
      align-items: center;
      justify-content: flex-start; 
      justify-content: left;
      margin-left: 6rem;
      gap: 0.5rem;
      margin-bottom: 2rem;
      color: rgba(0, 0, 0, 0.4);
      font-family: "PP Supply Mono Regular", "PP Supply Mono Regular Placeholder", monospace;
      font-size: 1.1rem;
      font-weight: 800;
      text-align: left;
    }

    .carousel-title {
      font-family: "PP Supply Mono Regular", "PP Supply Mono Regular Placeholder", monospace;
      font-size: 1.1rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .bracket {
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.4);
    }

    .arrow {
      font-size: 0.8rem;
      margin-left: 0.5rem;
      color: rgba(0, 0, 0, 0.4);
    }

    .carousel-wrapper {
      position: relative;
      width: 100%;
      max-width: none;
      margin: 2rem 0;
      overflow: hidden;
      padding: 2rem 0;
      /* Fading effect on the edges */
      mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }

    .track-container {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      align-items: center;
    }

    .track {
      display: flex;
      flex-direction: row;
      gap: 4rem;
      flex-shrink: 0;
      align-items: center;
    }

    @media (max-width: 768px) {
      .carousel-header {
        flex-wrap: wrap;
      }
      
      .carousel-wrapper {
        padding: 1rem 0 !important;
      }
    }

    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-scroll {
      animation: scroll 40s linear infinite; /* Slower animation for elegance */
    }

    .animate-scroll:hover {
      animation-play-state: paused;
    }

    .logo-item {
      transition: transform 0.15s ease-out;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class LogoCarouselComponent {
  transforms: { [key: number]: { x: number, y: number } } = {};
  hoveredIndex: number | null = null;
  isPaused = false;

  logos: Logo[] = [
    { src: 'img/bbva_logo.svg', name: 'BBVA', offsetY: 0 },
    { src: 'img/jpmorgan_logo.svg', name: 'JP Morgan', offsetY: 0 },
    { src: 'img/logo-santander.svg', name: 'Santander', offsetY: 0 },
    { src: 'img/moeve_logo.svg', name: 'Moeve', offsetY: 18 },
    { src: 'img/bbva_logo.svg', name: 'BBVA', offsetY: 0 },
    { src: 'img/jpmorgan_logo.svg', name: 'JP Morgan', offsetY: 0 },
    { src: 'img/logo-santander.svg', name: 'Santander', offsetY: 0 },
    { src: 'img/moeve_logo.svg', name: 'Moeve', offsetY: 18 },
  ];

  handleMouseMove(e: MouseEvent, index: number) {
    this.hoveredIndex = index;
    const element = e.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    this.transforms[index] = {
      x: x / 4,
      y: y / 4
    };
  }

  handleMouseLeave(index: number) {
    this.hoveredIndex = null;
    this.transforms[index] = { x: 0, y: 0 };
  }

  resetAllMagnets() {
    Object.keys(this.transforms).forEach(key => {
      this.transforms[+key] = { x: 0, y: 0 };
    });
  }

  getTransform(index: number): string {
    const t = this.transforms[index] || { x: 0, y: 0 };
    return `translate(${t.x}px, ${t.y}px)`;
  }
}
