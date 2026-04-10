import { Component, ChangeDetectionStrategy, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface JobOffer {
  position: string;
  location: string;
  requiredSkills: string[];
  extraSkills: string[];
  description: string;
  linkedInUrl: string;
}

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'join-us-host' },
  template: `
    <!-- ══ HERO SECTION ══ -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ title() }}</h1>
        <div class="hero-description" [innerHTML]="description()"></div>
      </div>
    </div>

    <!-- ══ JOB OFFERS GRID ══ -->
    <div class="jobs-section">
      <!-- Left Arrow -->
      <button 
        class="nav-arrow nav-arrow-left" 
        [class.disabled]="jobOffers().length <= 1"
        [disabled]="jobOffers().length <= 1"
        (click)="previousJob($event)">
        <span class="arrow-icon">‹</span>
      </button>

      <div class="jobs-grid-wrapper">
        <div class="jobs-grid" [style.transform]="'translateX(' + currentOffset() + 'px)'">
          @for (job of jobOffers(); track job.position; let i = $index) {
            <article class="job-card" (click)="openModal(job, i)">
              <div class="job-card-header">
                <h2 class="job-position">{{ job.position }}</h2>
                <span class="job-location">{{ job.location }}</span>
              </div>
              
              <div class="job-skills">
                <div class="skills-label">Required</div>
                <div class="skills-list">
                  @for (skill of job.requiredSkills; track skill) {
                    <span class="skill-tag required">{{ skill }}</span>
                  }
                </div>
                
                @if (job.extraSkills.length > 0) {
                  <div class="skills-label extra">Plus</div>
                  <div class="skills-list">
                    @for (skill of job.extraSkills; track skill) {
                      <span class="skill-tag extra">{{ skill }}</span>
                    }
                  </div>
                }
              </div>

              <div class="job-cta">
                <span class="view-more-btn">{{ viewMoreLabel() }}</span>
                <span class="arrow">→</span>
              </div>
            </article>
          }
        </div>
      </div>

      <!-- Right Arrow -->
      <button 
        class="nav-arrow nav-arrow-right" 
        [class.disabled]="jobOffers().length <= 1"
        [disabled]="jobOffers().length <= 1"
        (click)="nextJob($event)">
        <span class="arrow-icon">›</span>
      </button>
    </div>

    <!-- ══ MODAL ══ -->
    @if (selectedJob()) {
      <div class="modal-overlay" (click)="closeModal()">
        <div class="modal-container" (click)="$event.stopPropagation()">
          <div class="modal-fixed-header">
            <button class="modal-close" (click)="closeModal()">
              {{ closeLabel() }}
              <span class="close-icon">×</span>
            </button>
            
            <div class="modal-header">
              <h2 class="modal-title">{{ selectedJob()!.position }}</h2>
              <span class="modal-location">{{ selectedJob()!.location }}</span>
            </div>
          </div>

          <div class="modal-body" [innerHTML]="selectedJob()!.description"></div>

          <div class="modal-footer">
            <a [href]="selectedJob()!.linkedInUrl" 
               target="_blank" 
               rel="noopener noreferrer"
               class="linkedin-btn">
              <svg class="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {{ applyLinkedInLabel() }}
            </a>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    /* ═══════════════════════════════════════════════════════
       JOIN-US COMPONENT - Industrial/Technical Aesthetic
       ═══════════════════════════════════════════════════════ */
    :host {
      display: block;
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
      background: #f4f1ea;
      color: #222222;
      font-family: 'PP Supply Mono Regular', 'Courier New', monospace;
    }

    /* ═══════════════════════════════════════════════════════
       HERO SECTION
       ═══════════════════════════════════════════════════════ */
    .hero-section {
      padding: 6rem 5% 4rem 5%;
      border-bottom: 1px solid rgba(232, 93, 4, 0.3);
      position: relative;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 100px,
          rgba(232, 93, 4, 0.03) 100px,
          rgba(232, 93, 4, 0.03) 101px
        ),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 100px,
          rgba(232, 93, 4, 0.03) 100px,
          rgba(232, 93, 4, 0.03) 101px
        );
      pointer-events: none;
    }

    .hero-content {
      max-width: 900px;
      position: relative;
    }

    .hero-label {
      display: inline-block;
      font-size: 0.75rem;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--color-1, #E85D04);
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      border: 1px solid var(--color-1, #E85D04);
    }

    .hero-title {
      font-family: 'Bebas Neue', Impact, sans-serif;
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 1;
      margin: 0 0 2rem 0;
      color: #111111;
    }

    .hero-description {
      font-family: 'Inter', sans-serif;
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555555;
    }

    .hero-description ::ng-deep p {
      margin-bottom: 1rem;
    }

    .hero-description ::ng-deep strong {
      color: var(--color-1, #E85D04);
      font-weight: 600;
    }

    /* ═══════════════════════════════════════════════════════
       JOBS GRID SECTION
       ═══════════════════════════════════════════════════════ */
    .jobs-section {
      padding: 4rem 120px 6rem 120px;
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
    }

    .jobs-grid-wrapper {
      overflow: visible;
    }

    .jobs-grid {
      display: flex;
      gap: 2rem;
      justify-content: center;
      transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    /* ═══════════════════════════════════════════════════════
       JOB CARD
       ═══════════════════════════════════════════════════════ */
    .job-card {
      background: #111111;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2rem;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      width: 400px;
    }

    .job-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--color-1, #E85D04);
      transform: scaleY(0);
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .job-card:hover {
      transform: translateY(-4px);
      border-color: rgba(232, 93, 4, 0.5);
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 60px rgba(232, 93, 4, 0.15);
    }

    .job-card:hover::before {
      transform: scaleY(1);
    }

    .job-card-header {
      margin-bottom: 1.5rem;
    }

    .job-position {
      font-family: 'PP Supply Mono Regular', monospace;
      font-size: 1.3rem;
      font-weight: 600;
      color: #ffffff;
      margin: 0 0 0.5rem 0;
      line-height: 1.3;
    }

    .job-location {
      font-size: 0.85rem;
      color: #888888;
      letter-spacing: 1px;
    }

    .job-skills {
      margin-bottom: 2rem;
    }

    .skills-label {
      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: white;
      margin-bottom: 0.75rem;
    }

    .skills-label.extra {
      margin-top: 1rem;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-tag {
      font-family: 'PP Supply Mono Regular', monospace;
      font-size: 0.75rem;
      padding: 0.4rem 0.8rem;
      border-radius: 2px;
      letter-spacing: 0.5px;
    }

    .skill-tag.required {
      background: rgba(232, 93, 4, 0.2);
      color: #E85D04;
      border: 1px solid rgba(232, 93, 4, 0.4);
    }

    .skill-tag.extra {
      background: rgba(255, 255, 255, 0.08);
      color: #999999;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .job-cta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .view-more-btn {
      font-size: 0.85rem;
      letter-spacing: 1px;
      color: #ffffff;
      text-transform: uppercase;
      font-weight: 500;
    }

    .arrow {
      font-size: 1.2rem;
      color: #E85D04;
      transition: transform 0.3s ease;
    }

    .job-card:hover .arrow {
      transform: translateX(6px);
    }

    /* ═══════════════════════════════════════════════════════
       MODAL
       ═══════════════════════════════════════════════════════ */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(244, 241, 234, 0.85);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 3000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      animation: fadeIn 0.3s ease;
    }

    .modal-container {
      background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
      border: 1px solid rgba(232, 93, 4, 0.4);
      width: 100%;
      max-width: 700px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 1.5rem 2.5rem 3rem 2.5rem;
      position: relative;
      animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      scrollbar-width: thin;
      scrollbar-color: #E85D04 #222;
    }

    .modal-fixed-header {
      background: #1a1a1a;
      padding: 1.5rem 0 1rem 0;
      margin: 0 0 1.5rem 0;
      z-index: 100;
      border-bottom: 1px solid rgba(232, 93, 4, 0.3);
    }

    .modal-container::-webkit-scrollbar {
      width: 6px;
    }

    .modal-container::-webkit-scrollbar-track {
      background: #222;
    }

    .modal-container::-webkit-scrollbar-thumb {
      background: #E85D04;
      border-radius: 3px;
    }

    .modal-close {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: none;
      border: none;
      color: #ffffff;
      font-family: 'PP Supply Mono Regular', monospace;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      transition: color 0.2s ease;
    }

    .modal-close:hover {
      color: #E85D04;
    }

    .close-icon {
      font-size: 1.5rem;
      line-height: 1;
    }

    .modal-header {
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .modal-title {
      font-family: 'Bebas Neue', Impact, sans-serif;
      font-size: 2rem;
      font-weight: 400;
      color: #ffffff;
      margin: 0 0 0.5rem 0;
      letter-spacing: 1px;
    }

    .modal-location {
      font-size: 0.9rem;
      color: #666;
      letter-spacing: 1px;
    }

    .modal-body {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      line-height: 1.8;
      color: #c0c0c0;
    }

    .modal-body ::ng-deep h3 {
      font-family: 'PP Supply Mono Regular', monospace;
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-1, #E85D04);
      margin: 2rem 0 1rem 0;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .modal-body ::ng-deep h3:first-child {
      margin-top: 0;
    }

    .modal-body ::ng-deep p {
      margin-bottom: 1rem;
    }

    .modal-body ::ng-deep ul {
      padding-left: 1.5rem;
      margin: 1rem 0;
    }

    .modal-body ::ng-deep li {
      margin-bottom: 0.5rem;
      color: #a0a0a0;
    }

    .modal-body ::ng-deep strong {
      color: #ffffff;
    }

    .modal-body ::ng-deep em {
      color: #666;
      font-style: italic;
    }

    .modal-footer {
      margin-top: 2.5rem;
      padding: 2rem 0 1rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .linkedin-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      background: #0077b5;
      color: #ffffff;
      font-family: 'PP Supply Mono Regular', monospace;
      font-size: 0.9rem;
      padding: 1rem 2rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .linkedin-btn:hover {
      background: #005885;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 119, 181, 0.3);
    }

    .linkedin-icon {
      width: 20px;
      height: 20px;
    }

    /* ═══════════════════════════════════════════════════════
       ANIMATIONS
       ═══════════════════════════════════════════════════════ */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(30px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ═══════════════════════════════════════════════════════
       RESPONSIVE
       ═══════════════════════════════════════════════════════ */
    @media (max-width: 900px) {
      .hero-section {
        padding: 4rem 1.5rem 3rem 1.5rem;
      }

      .hero-title {
        font-size: 3rem;
      }

      .jobs-section {
        padding: 3rem 1.5rem 4rem 1.5rem;
      }

      .jobs-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .job-card {
        padding: 1.5rem;
      }

      .modal-container {
        padding: 2rem 1.5rem;
      }

      .modal-title {
        font-size: 1.5rem;
        padding-right: 2rem;
      }

      .modal-close {
        top: 1rem;
        right: 1rem;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-label {
        font-size: 0.65rem;
      }

      .skill-tag {
        font-size: 0.7rem;
        padding: 0.3rem 0.6rem;
      }

      .job-position {
        font-size: 1.1rem;
      }
    }

    /* ═══════════════════════════════════════════════════════
       NAVIGATION ARROWS
       ═══════════════════════════════════════════════════════ */
    .nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 10;
      padding: 1rem;
    }

    .nav-arrow-left {
      left: 10px;
    }

    .nav-arrow-right {
      right: 10px;
    }

    .nav-arrow .arrow-icon {
      font-size: 6rem;
      color: #E85D04;
      line-height: 1;
      font-weight: 300;
    }

    .nav-arrow:hover:not(.disabled) {
      transform: translateY(-50%) scale(1.15);
    }

    .nav-arrow.disabled {
      cursor: default;
      opacity: 0.4;
    }

    .nav-arrow.disabled .arrow-icon {
      color: #E85D04;
    }

    @media (max-width: 900px) {
      .nav-arrow {
        width: 40px;
        height: 40px;
      }

      .nav-arrow-left {
        left: 10px;
      }

      .nav-arrow-right {
        right: 10px;
      }
    }
  `]
})
export class JoinUsComponent {
  title = input<string>('JOIN US');
  description = input<string>('');
  viewMoreLabel = input<string>('View more');
  applyLinkedInLabel = input<string>('Apply on LinkedIn');
  closeLabel = input<string>('Close');
  jobOffers = input<JobOffer[]>([]);

  selectedJob = signal<JobOffer | null>(null);
  currentOffset = signal(0);

  private cardWidth = 420;

  openModal(job: JobOffer, index: number) {
    this.selectedJob.set(job);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedJob.set(null);
    document.body.style.overflow = '';
  }

  previousJob(event: Event) {
    event.stopPropagation();
    const currentIndex = Math.round(this.currentOffset() / this.cardWidth);
    if (currentIndex > 0) {
      this.currentOffset.set((currentIndex - 1) * this.cardWidth);
    }
  }

  nextJob(event: Event) {
    event.stopPropagation();
    const currentIndex = Math.round(this.currentOffset() / this.cardWidth);
    if (currentIndex < this.jobOffers().length - 1) {
      this.currentOffset.set((currentIndex + 1) * this.cardWidth);
    }
  }
}