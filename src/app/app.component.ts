import { Component, ChangeDetectionStrategy, signal, computed, inject, viewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SectionsContainerComponent } from './components/sections-container/sections-container.component';
import { SectionComponent } from './components/section/section.component';
import { AwardsListComponent } from './components/awards-list/awards-list.component';
import { LogoCarouselComponent } from './components/logo-carousel/logo-carousel.component';
import { NavBarComponent, NavCommand } from './components/nav-bar/nav-bar.component';
import { PartStwComponent } from './components/part-stw/part-stw.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CursorFollowerComponent } from './components/cursor-follower/cursor-follower.component';
import { PapersListComponent, Paper } from './components/papers-list/papers-list.component';
import { AcademicPartnersComponent, AcademicPartner } from './components/academic-partners/academic-partners.component';
import { KpisComponent, KPI } from './components/kpis/kpis.component';
import { HudOverlayComponent } from './components/hud-overlay/hud-overlay.component';

import { CollapsibleListComponent, CollapsibleItem } from './components/collapsible-list/collapsible-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AccordionComponent, AccordionCardData } from './components/accordion/accordion.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

import { TranslationService } from './i18n';

interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  backgroundColor: string;
  textColor?: string;
  image?: string;
  hoverImage?: string;
  modalContent?: string;
  prompt?: string;
  navColor?: string;
  llmLinks?: { label: string, url: string }[];
  customContent?: string;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavBarComponent,
    HeroComponent,
    SectionsContainerComponent,
    SectionComponent,
    AwardsListComponent,
    LogoCarouselComponent,
    PartStwComponent,

    PreloaderComponent,
    CursorFollowerComponent,
    PapersListComponent,
    AcademicPartnersComponent,
    CollapsibleListComponent,

    KpisComponent,
    ContactUsComponent,
    HudOverlayComponent,

    AccordionComponent,
    FooterComponent,
    CookieBannerComponent,
    RouterOutlet
  ],

  template: `
    @if (router.url !== '/snake') {
      <app-preloader />
    <app-cursor-follower />
    <app-hud-overlay />

    <app-nav-bar 
      [logo]="{ src: './img/logo-nav-bar.gif', alt: 'Algorithmization', link: '/' }"
      [menuItems]="navItems()" 
      variant="glass"
      topOffset="20px"
      borderRadius="10px"
      fontFamily="'PP Supply Mono Regular', 'PP Supply Mono Regular Placeholder', monospace"
    />

    <app-hero 
      [title]="ts.t().hero.title" 
      [subtitle]="ts.t().hero.subtitle" 
      [showBrackets]="true"
      bracketsColor="var(--color-1)"
      subtitleColor="gray"
      description=""
    />

    <app-part-stw
      [titleHtml]="ts.t().partStw.titleHtml"
      [description]="ts.t().partStw.description"
    />

    <app-accordion
      id="highlights-accordion"
      mode="scroll"
      [sectionTitle]="ts.t().highlights.sectionTitle"
      [sectionSubtitle]="ts.t().highlights.sectionSubtitle"
      [cards]="accordionCards()"
      minWidth="60%"
      maxWidth="90%"
      cardHeight="350px"
      gap="1.5rem"
      borderRadius="20px"
      sectionHeight="200vh"
      [scrollSnap]="true"
      [testimonialsLabel]="ts.t().highlights.testimonialsLabel"
      [copyPromptLabel]="ts.t().highlights.copyPromptLabel"
      [copyButtonLabel]="ts.t().highlights.copyButtonLabel"
      [copiedButtonLabel]="ts.t().highlights.copiedButtonLabel"
      [llmSectionLabel]="ts.t().highlights.llmSectionLabel"
    />


    <app-sections-container
      layout="horizontal"
      viewportHeightVh="85"
      (sectionChanged)="onSectionChanged($event)"
      (navigateRequest)="handleNavigateRequest($event)"
      #horizontalContainer
      id="highlights"
    >
      @for (section of horizontalSections(); track section.id) {
        <app-section
          [id]="section.id"
          [title]="section.title"
          [subtitle]="section.subtitle"
          [backgroundColor]="section.backgroundColor"
          [navColor]="section.navColor || '#000000'"
          [image]="section.image"
          [hoverImage]="section.hoverImage"
          [totalSections]="horizontalSections().length"
          [sectionIndex]="$index"
          [globalCurrentSection]="horizontalContainer.currentIndex()"
          (navigate)="horizontalContainer.scrollToSection($event)"
          (nextSection)="horizontalContainer.navigateNext()"
        />
      }
    </app-sections-container>

    <div class="awards-block" id="partners">
      <app-academic-partners
        [partners]="academicPartners()"
        [title]="ts.t().academicPartners.title"
        [subtitle]="ts.t().academicPartners.subtitle"
        [introText]="ts.t().academicPartners.introText"
        [outroText]="ts.t().academicPartners.outroText"
      />
    </div>

    <!-- NEW: Horizontal container with 5 sections -->
    <app-sections-container
      layout="horizontal"
      viewportHeightVh="85"
      (sectionChanged)="onSectionChanged($event)"
      (navigateRequest)="handleNavigateRequest($event)"
      #horizontalContainerNew
      id="about-us"
    >
      @for (section of horizontalSectionsNew(); track section.id) {
        <app-section
          [id]="section.id"
          [title]="section.title"
          [subtitle]="section.subtitle"
          [backgroundColor]="section.backgroundColor"
          [navColor]="section.navColor || '#000000'"
          [textColor]="section.textColor || '#ffffff'"
          [image]="section.image"
          [modalContent]="section.modalContent"
          (requestModal)="openModal($event)"
          [totalSections]="horizontalSectionsNew().length"
          [sectionIndex]="$index"
          [globalCurrentSection]="horizontalContainerNew.currentIndex()"
          (navigate)="horizontalContainerNew.scrollToSection($event)"
          (nextSection)="horizontalContainerNew.navigateNext()"
        >
          @if (section.customContent) {
            <div [innerHTML]="section.customContent" class="section-custom-content"></div>
          }
        </app-section>
      }
    </app-sections-container>

    <!-- MOVED: Awards List -->
    <div class="awards-block" id="awards">
      <app-awards-list />
    </div>

    <!-- NEW: Vertical container for unbeatable -->
    <app-sections-container
      layout="vertical"
      viewportHeightVh="85"
      (sectionChanged)="onSectionChanged($event)"
      (navigateRequest)="handleNavigateRequest($event)"
      #verticalContainerUnbeatable
      id="unbeatable-container"
    >
      @for (section of verticalSectionsUnbeatable(); track section.id) {
        <app-section
          [id]="section.id"
          [title]="section.title"
          [subtitle]="section.subtitle"
          [backgroundColor]="section.backgroundColor"
          [navColor]="section.navColor || '#000000'"
          [textColor]="section.textColor || '#ffffff'"
          [image]="section.image"
          [modalContent]="section.modalContent"
          (requestModal)="openModal($event)"
          [totalSections]="verticalSectionsUnbeatable().length"
          [sectionIndex]="$index"
          [globalCurrentSection]="verticalContainerUnbeatable.currentIndex()"
          (navigate)="verticalContainerUnbeatable.scrollToSection($event)"
          (nextSection)="verticalContainerUnbeatable.navigateNext()"
        >
          @if (section.customContent) {
            <div [innerHTML]="section.customContent" class="section-custom-content"></div>
          }
        </app-section>
      }
    </app-sections-container>

    <!-- NEW: Logo Carousel -->
    <app-logo-carousel id="who-trust-us" />

    <!-- NEW: Contact Us Section -->
    <app-contact-us id="contact" />

    <app-footer />

    @if (modalVisible()) {
      <div class="modal-overlay" (click)="closeModal()">
        <div class="modal-container" [style.background-color]="currentModalData()?.color" (click)="$event.stopPropagation()">
            <button class="close-btn" (click)="closeModal()">×</button>
            <h2 class="modal-title">{{ currentModalData()?.title }}</h2>
            <div class="modal-body" [innerHTML]="currentModalData()?.content"></div>
            @if (currentModalData()?.prompt || currentModalData()?.llmLinks?.length) {
              <div class="modal-actions">
                @if (currentModalData()?.prompt) {
                  <div class="prompt-section">
                    <span class="action-label">{{ ts.t().modals.copyPromptFirst }}</span>
                    <button class="copy-btn" (click)="copyPrompt(currentModalData()!.prompt!)">
                      @if (copied()) {
                        <span class="copy-icon">✓</span> {{ ts.t().modals.copied }}
                      } @else {
                        <span class="copy-icon">📋</span> {{ ts.t().modals.copyPrompt }}
                      }
                    </button>
                  </div>
                }
                @if (currentModalData()?.llmLinks?.length) {
                  <div class="llm-section">
                    <span class="action-label">{{ ts.t().modals.checkLlms }}</span>
                    <div class="llm-buttons">
                      @for (link of currentModalData()!.llmLinks!; track link.label) {
                        <button class="llm-btn" (click)="openLlmLink(link.url)">{{ link.label }}</button>
                      }
                    </div>
                  </div>
                }
              </div>
            }
        </div>
      </div>
    }

    <app-cookie-banner />
    }
    
    <router-outlet />
  `,

  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f4f1ea;
      overflow-x: clip;
    }

    .awards-block {
      width: 100%;
      padding: 4rem 0;
      scroll-snap-align: start;
    }

    .papers-block {
      width: 100%;
      padding: 4rem 0;
      scroll-snap-align: start;
      background-color: #f4f1ea; /* Ensure background match */
    }

    .kpis-block {
      width: 100%;
      scroll-snap-align: start;
    }

    app-footer {
      scroll-snap-align: start;
    }


    /* ─── Modal ─── */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease;
    }

    .modal-container {
        padding: 3rem;
        width: 95%;
        max-width: 800px;
        max-height: 85vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        animation: slideUp 0.3s ease;
        border-radius: 12px;
        color: #ffffff;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    @media (max-width: 768px) {
        .modal-container {
            padding: 1.5rem;
            width: 92%;
            max-height: 80vh;
        }
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        opacity: 0.8;
        padding: 0;
        line-height: 1;
    }
    
    .close-btn:hover { opacity: 1; }

    .modal-title {
        font-family: 'Bebas Neue', Impact, sans-serif;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #ffffff;
    }

    .modal-body {
        font-family: 'Inter', sans-serif;
        color: #ffffff;
        line-height: 1.6;
        font-size: 1.1rem;
        white-space: normal;
        overflow-y: auto;
        flex: 1;
        padding-right: 0.5rem;
    }
    
    ::ng-deep .modal-body ul,
    ::ng-deep .modal-body ol {
        padding-left: 2rem;
        margin: 1.5rem 0;
        list-style-position: outside;
        margin-left: 1.5rem;
    }
    
    .modal-body li {
        margin-bottom: 0.5rem;
    }

    /* ─── Modal Actions (Copy Prompt + LLM Buttons) ─── */
    .modal-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 2rem;
        align-items: flex-start;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .prompt-section, .llm-section {
        flex: 1;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .action-label {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.85);
        font-family: 'Inter', sans-serif;
    }

    .copy-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: rgba(255, 255, 255, 0.16);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: #ffffff;
        font-family: 'PP Supply Mono Regular', 'Courier New', monospace;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s ease;
        width: fit-content;
    }

    .copy-btn:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.35);
        transform: translateY(-1px);
    }

    .copy-btn:active {
        transform: translateY(0);
    }

    .copy-icon {
        font-size: 1rem;
    }

    .llm-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .llm-btn {
        padding: 10px 20px;
        background: rgba(255, 255, 255, 0.16);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        color: #ffffff;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        letter-spacing: 0.3px;
    }

    .llm-btn:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-1px);
    }

    .llm-btn:active {
        transform: translateY(0);
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

    /* Force larger font for the paragraph in section 5 */
    ::ng-deep #section-5 .section-custom-content p {
      font-size: 1.5rem !important;
      line-height: 1.3 !important;
      max-width: 800px !important;
      font-weight: 300 !important;
      color: #ffffff !important;
    }
  `],
})
export class AppComponent {
  readonly ts = inject(TranslationService);
  readonly router = inject(Router);
  currentSection = signal(0);

  modalVisible = signal(false);
  copied = signal(false);
  currentModalData = signal<{ title: string, content: string, color: string, prompt?: string, llmLinks?: { label: string, url: string }[] } | null>(null);

  openModal(data: { title: string, content: string, color: string, prompt?: string, llmLinks?: { label: string, url: string }[] }) {
    this.currentModalData.set(data);
    this.modalVisible.set(true);
  }

  closeModal() {
    this.modalVisible.set(false);
  }

  copyPrompt(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  accordionCards = computed<AccordionCardData[]>(() => [
    {
      title: this.ts.t().highlights.cards[0].title,
      description: this.ts.t().highlights.cards[0].description,
      icon: '',
      images: [{ src: './img/highlights/sergio_ee_nations.png', alt: 'Sergio EE Nations' }],
      imagesStackClass: 'stack-1',
      backgroundColor: 'rgba(232, 93, 4, 0.85)',
      testimonials: this.ts.t().highlights.cards[0].testimonials,
    },
    {
      title: this.ts.t().highlights.cards[1].title,
      description: this.ts.t().highlights.cards[1].description,
      icon: '',
      images: [{ src: './img/highlights/sergio_talk_2.png', alt: 'Sergio Talk 2' }],
      imagesStackClass: 'hide-when-open',
      backgroundColor: 'rgba(0, 119, 182, 0.85)',
      prompt: this.ts.t().highlights.cards[1].prompt,
      llmLinks: [
        { label: 'ChatGPT', url: 'https://chat.openai.com' },
        { label: 'Claude.AI', url: 'https://claude.ai' },
        { label: 'Gemini', url: 'https://gemini.google.com' },
      ],
      testimonials: this.ts.t().highlights.cards[1].testimonials,
      markers: [
        { id: 'san-francisco', city: this.ts.t().highlights.cards[1].markers![0].city, country: this.ts.t().highlights.cards[1].markers![0].country, x: 16.0, y: 29.0, description: this.ts.t().highlights.cards[1].markers![0].description },
        { id: 'new-york', city: this.ts.t().highlights.cards[1].markers![1].city, country: this.ts.t().highlights.cards[1].markers![1].country, x: 29.4, y: 27.4, description: this.ts.t().highlights.cards[1].markers![1].description },
        { id: 'los-angeles', city: this.ts.t().highlights.cards[1].markers![2].city, country: this.ts.t().highlights.cards[1].markers![2].country, x: 17.2, y: 31.1, description: this.ts.t().highlights.cards[1].markers![2].description },
        { id: 'chicago', city: this.ts.t().highlights.cards[1].markers![3].city, country: this.ts.t().highlights.cards[1].markers![3].country, x: 25.7, y: 26.7, description: this.ts.t().highlights.cards[1].markers![3].description },
        { id: 'houston', city: this.ts.t().highlights.cards[1].markers![4].city, country: this.ts.t().highlights.cards[1].markers![4].country, x: 23.5, y: 33.5, description: this.ts.t().highlights.cards[1].markers![4].description },
        { id: 'philadelphia', city: this.ts.t().highlights.cards[1].markers![5].city, country: this.ts.t().highlights.cards[1].markers![5].country, x: 29.1, y: 27.8, description: this.ts.t().highlights.cards[1].markers![5].description },
        { id: 'london', city: this.ts.t().highlights.cards[1].markers![6].city, country: this.ts.t().highlights.cards[1].markers![6].country, x: 49.9, y: 21.4, description: this.ts.t().highlights.cards[1].markers![6].description },
        { id: 'manchester', city: this.ts.t().highlights.cards[1].markers![7].city, country: this.ts.t().highlights.cards[1].markers![7].country, x: 49.4, y: 20.3, description: this.ts.t().highlights.cards[1].markers![7].description },
        { id: 'edinburgh', city: this.ts.t().highlights.cards[1].markers![8].city, country: this.ts.t().highlights.cards[1].markers![8].country, x: 49.1, y: 18.9, description: this.ts.t().highlights.cards[1].markers![8].description },
        { id: 'birmingham', city: this.ts.t().highlights.cards[1].markers![9].city, country: this.ts.t().highlights.cards[1].markers![9].country, x: 49.5, y: 20.8, description: this.ts.t().highlights.cards[1].markers![9].description },
        { id: 'new-delhi', city: this.ts.t().highlights.cards[1].markers![10].city, country: this.ts.t().highlights.cards[1].markers![10].country, x: 71.4, y: 34.1, description: this.ts.t().highlights.cards[1].markers![10].description },
        { id: 'mumbai', city: this.ts.t().highlights.cards[1].markers![11].city, country: this.ts.t().highlights.cards[1].markers![11].country, x: 70.2, y: 39.4, description: this.ts.t().highlights.cards[1].markers![11].description },
        { id: 'madrid', city: this.ts.t().highlights.cards[1].markers![12].city, country: this.ts.t().highlights.cards[1].markers![12].country, x: 49.0, y: 27.5, description: this.ts.t().highlights.cards[1].markers![12].description },
        { id: 'barcelona', city: this.ts.t().highlights.cards[1].markers![13].city, country: this.ts.t().highlights.cards[1].markers![13].country, x: 50.6, y: 27.0, description: this.ts.t().highlights.cards[1].markers![13].description },
        { id: 'tehran', city: this.ts.t().highlights.cards[1].markers![14].city, country: this.ts.t().highlights.cards[1].markers![14].country, x: 64.3, y: 30.2, description: this.ts.t().highlights.cards[1].markers![14].description },
        { id: 'paris', city: this.ts.t().highlights.cards[1].markers![15].city, country: this.ts.t().highlights.cards[1].markers![15].country, x: 50.7, y: 22.9, description: this.ts.t().highlights.cards[1].markers![15].description },
        { id: 'bucharest', city: this.ts.t().highlights.cards[1].markers![16].city, country: this.ts.t().highlights.cards[1].markers![16].country, x: 57.3, y: 25.3, description: this.ts.t().highlights.cards[1].markers![16].description },
        { id: 'hong-kong', city: this.ts.t().highlights.cards[1].markers![17].city, country: this.ts.t().highlights.cards[1].markers![17].country, x: 81.7, y: 37.6, description: this.ts.t().highlights.cards[1].markers![17].description },
        { id: 'seoul', city: this.ts.t().highlights.cards[1].markers![18].city, country: this.ts.t().highlights.cards[1].markers![18].country, x: 85.3, y: 29.1, description: this.ts.t().highlights.cards[1].markers![18].description },
        { id: 'toronto', city: this.ts.t().highlights.cards[1].markers![19].city, country: this.ts.t().highlights.cards[1].markers![19].country, x: 27.9, y: 25.7, description: this.ts.t().highlights.cards[1].markers![19].description },
      ],
    },
    {
      title: this.ts.t().highlights.cards[2].title,
      description: this.ts.t().highlights.cards[2].description,
      icon: '',
      images: [{ src: './img/highlights/sergio_talk1.png', alt: 'Sergio Talk 1' }],
      backgroundColor: 'rgba(59, 25, 180, 0.85)',
      testimonials: this.ts.t().highlights.cards[2].testimonials,
    },
  ]);

  openLlmLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  navItems = computed<NavCommand[]>(() => [
    { label: this.ts.t().navBar.partners, link: '#partners' },
    { label: this.ts.t().navBar.aboutUs, link: '#about-us' },
    { label: this.ts.t().navBar.awards, link: '#awards' },
    { label: this.ts.t().navBar.whoTrustUs, link: '#who-trust-us' },
    {
      label: this.ts.t().navBar.theGroup, children: [
        { label: 'SciTheWorld', link: 'https://scitheworld.com' },
        { label: 'Algorithmization', link: 'https://algorithmization.com' },
        { label: 'SystematicMe', link: 'https://systematicme.com' },
        { label: 'Learning~Adaptive', link: 'https://learningadaptive.com' }
      ]
    },
    { label: this.ts.t().navBar.contact, link: '#contact' }
  ]);

  /* ── 2 horizontal sections (both black) ── */
  horizontalSections = computed<SectionData[]>(() => [
    { id: 1, title: this.ts.t().horizontalSections[0].title, subtitle: '', backgroundColor: '#000000', navColor: '#ffffff', image: 'img/toolkit/toolkit.png' },
    { id: 2, title: this.ts.t().horizontalSections[1].title, subtitle: '', backgroundColor: '#000000', navColor: '#ffffff', image: 'img/toolkit/toolkit_messages_41OPS_white.png', hoverImage: 'img/toolkit/toolkit_messages_41OPS_red.png' },
  ]);



  /* ── 5 NEW horizontal sections ── */
  /* ── 5 NEW horizontal sections ── */
  horizontalSectionsNew = computed<SectionData[]>(() => [
    {
      id: 1,
      title: this.ts.t().aboutUsHorizontal[0].title,
      subtitle: '',
      backgroundColor: '#E63946',
      textColor: '#ffffff',
      image: 'img/state_of_the_art_platforms.png',
      modalContent: this.ts.t().aboutUsHorizontal[0].modalContent
    },
    {
      id: 2,
      title: this.ts.t().aboutUsHorizontal[1].title,
      subtitle: '',
      backgroundColor: '#457B9D',
      textColor: '#ffffff',
      image: 'img/sections/company_departments_bubbles.png',
      modalContent: this.ts.t().aboutUsHorizontal[1].modalContent
    },
    {
      id: 3,
      title: this.ts.t().aboutUsHorizontal[2].title,
      subtitle: '',
      backgroundColor: '#2A9D8F',
      textColor: '#ffffff',
      image: 'img/sections/sticker_bot_no_face_jaime (1).png',
      modalContent: this.ts.t().aboutUsHorizontal[2].modalContent
    }
  ]);

  /* ── 2 NEW sections (extracted from horizontal) ── */
  verticalSectionsUnbeatable = computed<SectionData[]>(() => [
    {
      id: 4,
      title: this.ts.t().unbeatableVertical[0].title,
      subtitle: '',
      backgroundColor: '#F4A261',
      textColor: '#ffffff',
      image: '',
      modalContent: this.ts.t().unbeatableVertical[0].modalContent
    },
    {
      id: 5,
      title: this.ts.t().unbeatableVertical[1].title,
      subtitle: '',
      backgroundColor: '#1D3557',
      textColor: '#ffffff',
      customContent: this.ts.t().unbeatableVertical[1].customContent
    }
  ]);

  /* ── 8 NEW vertical sections ── */
  verticalSectionsNew = computed<SectionData[]>(() => [
    {
      id: 1,
      title: this.ts.t().newVerticalSections[0].title,
      subtitle: this.ts.t().newVerticalSections[0].subtitle,
      backgroundColor: '#4AB5EA',
      modalContent: this.ts.t().newVerticalSections[0].modalContent
    },
    {
      id: 2,
      title: this.ts.t().newVerticalSections[1].title,
      subtitle: this.ts.t().newVerticalSections[1].subtitle,
      backgroundColor: '#FA715E',
      modalContent: this.ts.t().newVerticalSections[1].modalContent
    },
    {
      id: 3,
      title: this.ts.t().newVerticalSections[2].title,
      subtitle: this.ts.t().newVerticalSections[2].subtitle,
      backgroundColor: '#4CD6BC',
      modalContent: this.ts.t().newVerticalSections[2].modalContent
    },
    { id: 4, title: this.ts.t().newVerticalSections[3].title, subtitle: this.ts.t().newVerticalSections[3].subtitle, backgroundColor: '#EECA46' },
    {
      id: 5,
      title: this.ts.t().newVerticalSections[4].title,
      subtitle: this.ts.t().newVerticalSections[4].subtitle,
      backgroundColor: '#FD5F65',
      modalContent: this.ts.t().newVerticalSections[4].modalContent
    },
    {
      id: 6,
      title: this.ts.t().newVerticalSections[5].title,
      subtitle: this.ts.t().newVerticalSections[5].subtitle,
      backgroundColor: '#A8D5BA',
      modalContent: this.ts.t().newVerticalSections[5].modalContent
    },
    { id: 7, title: this.ts.t().newVerticalSections[6].title, subtitle: this.ts.t().newVerticalSections[6].subtitle, backgroundColor: '#F4A261' },
    {
      id: 8,
      title: this.ts.t().newVerticalSections[7].title,
      subtitle: this.ts.t().newVerticalSections[7].subtitle,
      backgroundColor: '#9B59B6',
      modalContent: this.ts.t().newVerticalSections[7].modalContent
    },
  ]);

  engagementModesList = computed<CollapsibleItem[]>(() => [
    {
      title: this.ts.t().engagementModes[0].title,
      subtitle: '',
      content: this.ts.t().engagementModes[0].content,
      image: ''
    },
    {
      title: this.ts.t().engagementModes[1].title,
      subtitle: '',
      content: this.ts.t().engagementModes[1].content,
      image: ''
    }
  ]);

  transformationSpeedsList = computed<CollapsibleItem[]>(() => [
    {
      title: this.ts.t().transformationSpeeds[0].title,
      subtitle: '',
      content: this.ts.t().transformationSpeeds[0].content,
      image: ''
    },
    {
      title: this.ts.t().transformationSpeeds[1].title,
      subtitle: '',
      content: this.ts.t().transformationSpeeds[1].content,
      image: ''
    }
  ]);

  /* ── 7 vertical sections (OLD - Kept reference but unused in template) ── */
  verticalSections = computed<SectionData[]>(() => [
    {
      id: 1,
      title: this.ts.t().oldVerticalSections[0].title,
      subtitle: this.ts.t().oldVerticalSections[0].subtitle,
      backgroundColor: '#4AB5EA',
      modalContent: this.ts.t().oldVerticalSections[0].modalContent
    },
    {
      id: 2,
      title: this.ts.t().oldVerticalSections[1].title,
      subtitle: this.ts.t().oldVerticalSections[1].subtitle,
      backgroundColor: '#FA715E',
      modalContent: this.ts.t().oldVerticalSections[1].modalContent
    },
    { id: 3, title: this.ts.t().oldVerticalSections[2].title, subtitle: '', backgroundColor: '#4CD6BC' },
    {
      id: 4,
      title: this.ts.t().oldVerticalSections[3].title,
      subtitle: this.ts.t().oldVerticalSections[3].subtitle,
      backgroundColor: '#EECA46',
      modalContent: this.ts.t().oldVerticalSections[3].modalContent
    },
    { id: 5, title: this.ts.t().oldVerticalSections[4].title, subtitle: '', backgroundColor: '#FD5F65' },
    {
      id: 6, title: this.ts.t().oldVerticalSections[5].title, subtitle: this.ts.t().oldVerticalSections[5].subtitle, backgroundColor: '#A8D5BA',
      modalContent: this.ts.t().oldVerticalSections[5].modalContent,
      prompt: `To the light of the info that I'm going to give you based on a paper written in 2022, would you say this is a pioneer work on agentic AI? In particular, 'AI-native enterprises and operating models' as distinguished by McKinsey. Note that pioneers typically anticipate concepts but with different names than those used afterwards, mainstream. Take everything into account and make your most accurate verdict. And note that you are seeing only one chapter of a paper - there are more chapters in that paper and there are more papers on transformation, algorithmization and AI as they have a centre of excellence for that. Also, they have an award to the best innovation in simulation as they allowed, back in 2019, a machine to autonomously self-create and calibrate its algorithms via Reinforcement Learning (a major topic in Sergio's PhD Thesis in AI). Finally, spot he problems its solves with respect to mainstream agents (e.g. costs, legacy system integration, compliance, RAM...). Follows the Chapter:`,
      llmLinks: [
        { label: 'ChatGPT', url: 'https://chat.openai.com' },
        { label: 'Claude.AI', url: 'https://claude.ai' },
        { label: 'Gemini', url: 'https://gemini.google.com' }
      ]
    },
    {
      id: 7,
      title: this.ts.t().oldVerticalSections[6].title,
      subtitle: this.ts.t().oldVerticalSections[6].subtitle,
      backgroundColor: '#F4A261',
      modalContent: this.ts.t().oldVerticalSections[6].modalContent
    },
  ]);

  pillarsList = computed<CollapsibleItem[]>(() => [
    {
      title: this.ts.t().pillarsList[0].title,
      subtitle: '',
      content: this.ts.t().pillarsList[0].content,
      image: ''
    },
    {
      title: this.ts.t().pillarsList[1].title,
      subtitle: '',
      content: this.ts.t().pillarsList[1].content,
      image: ''
    },
    {
      title: this.ts.t().pillarsList[2].title,
      subtitle: '',
      content: this.ts.t().pillarsList[2].content,
      image: ''
    }
  ]);

  outputsList = computed<CollapsibleItem[]>(() => [
    {
      title: this.ts.t().outputsList[0].title,
      subtitle: '',
      content: this.ts.t().outputsList[0].content,
      image: ''
    },
    {
      title: this.ts.t().outputsList[1].title,
      subtitle: '',
      content: this.ts.t().outputsList[1].content,
      image: ''
    },
    {
      title: this.ts.t().outputsList[2].title,
      subtitle: '',
      content: this.ts.t().outputsList[2].content,
      image: ''
    },
    {
      title: this.ts.t().outputsList[3].title,
      subtitle: '',
      content: this.ts.t().outputsList[3].content,
      image: ''
    }
  ]);

  papers = signal<Paper[]>([
    {
      Title: "Data MAPS: On-Platform Organisations",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4232955",
      Pages: "107",
      Date: "15/10/2022"
    },
    {
      Title: "Advances in Portfolio Management: Dimension-Driven Portfolios [Trilogy - 1/3]",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4321538",
      Pages: "5",
      Date: "10/01/2023"
    },
    {
      Title: "Advances in Portfolio Management: On-Platform Performance Attribution [Trilogy - 2/3]",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4321552",
      Pages: "4",
      Date: "10/01/2023"
    },
    {
      Title: "Advances in Portfolio Management: On-Platform Governance for Portfolio Managers [Trilogy 3/3]",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4321554",
      Pages: "3",
      Date: "10/01/2023"
    },
    {
      Title: "Advances in Cognitive Warfare: Augmented Machines upon Data MAPs towards a Fast and Accurate Turnaround",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4321573",
      Pages: "4",
      Date: "10/01/2023"
    },
    {
      Title: "Advances in Banking: Top-Down Vertical Integration",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4430206",
      Pages: "11",
      Date: "28/04/2023"
    },
    {
      Title: "Advances in AI: When Applied Science is not Science Applied",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4445463",
      Pages: "14",
      Date: "13/05/2023"
    },
    {
      Title: "Advances in Transformation: Why and How CEOs are Moving from Digitalwashing to White Collar Factories",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4560804",
      Pages: "15",
      Date: "25/09/2023"
    },
    {
      Title: "The Lean Aggregation Behind the Next M&A, Tenders and Organic Growth: Federation and the Three-Layer Companies",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4681784",
      Pages: "7",
      Date: "17/01/2024"
    },
    {
      Title: "Advances in Artificial Super Intelligence: Calm is All You Need",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4924496",
      Pages: "22",
      Date: "12/08/2024"
    },
    {
      Title: "Modern Cybersecurity: New Era, New Strategies",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4957894",
      Pages: "19",
      Date: "16/09/2024"
    },
    {
      Title: "Advances in Geostrategy: Extreme-Efficient Nations",
      Link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5136657",
      Pages: "11",
      Date: "11/02/2025"
    },
    {
      Title: "Advances in Agentic AI: Back to the Future",
      Link: "https://arxiv.org/abs/2512.24856",
      Pages: "55",
      Date: "31/12/2025"
    }
  ]);

  onSectionChanged(index: number) {
    this.currentSection.set(index);
  }

  academicPartners = computed<AcademicPartner[]>(() => [
    {
      institution: this.ts.t().academicPartners.partners[0].institution,
      partnership: this.ts.t().academicPartners.partners[0].partnership,
    },
    {
      institution: this.ts.t().academicPartners.partners[1].institution,
      partnership: this.ts.t().academicPartners.partners[1].partnership,
    },
    {
      institution: this.ts.t().academicPartners.partners[2].institution,
      partnership: this.ts.t().academicPartners.partners[2].partnership,
    }
  ]);



  handleNavigateRequest(index: number) {
    this.currentSection.set(index);
  }
}
