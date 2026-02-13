import { Component, ChangeDetectionStrategy, signal, viewChild } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SectionsContainerComponent } from './components/sections-container/sections-container.component';
import { SectionComponent } from './components/section/section.component';
import { AccordionComponent, AccordionCardData } from './components/accordion/accordion.component';
import { AccordionCardComponent } from './components/accordion-card/accordion-card.component';
import { CursorFollowerComponent } from './components/cursor-follower/cursor-follower.component';
import { AwardsListComponent } from './components/awards-list/awards-list.component';
import { LogoCarouselComponent } from './components/logo-carousel/logo-carousel.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HudOverlayComponent } from './components/hud-overlay/hud-overlay.component';
import { NavBarComponent, NavCommand } from './components/nav-bar/nav-bar.component';

interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavBarComponent,
    HeroComponent,
    SectionsContainerComponent,
    SectionComponent,
    AccordionComponent,
    AccordionCardComponent,
    CursorFollowerComponent,
    AwardsListComponent,
    LogoCarouselComponent,
    PreloaderComponent,
    HudOverlayComponent,
  ],
  template: `
    <app-preloader />
    <app-cursor-follower />
    <app-hud-overlay />

    <app-nav-bar 
      [logo]="{ src: './img/logo_stw.png', alt: 'SciTheWorld', link: '/' }"
      [menuItems]="navItems()" 
      variant="glass"
      topOffset="20px"
      borderRadius="10px"
      fontFamily="'PP Supply Mono Regular', 'PP Supply Mono Regular Placeholder', monospace"
    />

    <app-hero 
      title="THE FUTURE-PROOFED GROUP" 
      subtitle="SciTheWorld" 
      [showBrackets]="true"
      bracketsColor="var(--color-1)"
      subtitleColor="gray"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />

    <app-accordion
      mode="scroll"
      [cards]="accordionCards()"
      minWidth="60%"
      maxWidth="90%"
      cardHeight="350px"
      gap="1.5rem"
      borderRadius="20px"
      sectionHeight="200vh"
      scrollSnap
    />

    <app-sections-container
      layout="horizontal"
      viewportHeightVh="85"
      (sectionChanged)="onSectionChanged($event)"
      (navigateRequest)="handleNavigateRequest($event)"
      #sectionsContainer
    >
      @for (section of sections(); track section.id) {
        <app-section
          [id]="section.id"
          [title]="section.title"
          [subtitle]="section.subtitle"
          [backgroundColor]="section.backgroundColor"
        />
      }

      <app-section
        [id]="15"
        title=""
        subtitle=""
        backgroundColor="var(--color-4)"
        [isAccordionSection]="true"
      >
        <app-accordion mode="click" [blockCount]="2" height="70%">
          <app-accordion-card
            title="What this is"
            [expanded]="expandedCard() === 0"
            (clicked)="setExpandedCard(0)"
          >
            <ul class="bento-list">
              <li>a way for the less techie and quantitative to gain judgement and keep up with tech and AI advances;</li>
              <li>a continuous system that evolves with you, a companion for the rest of your career;</li>
              <li>a traceable portfolio of skills, risks, and options over time;</li>
              <li>a way to navigate change gradually, deliberately, and intelligently; and</li>
              <li>in the limit, for those that qualify, a technology partner as co-investor for certain members of the community that feel the need to become entrepreneurs.</li>
            </ul>
          </app-accordion-card>
          <app-accordion-card
            title="What this is not"
            [expanded]="expandedCard() === 1"
            (clicked)="setExpandedCard(1)"
          >
            <ul class="bento-list">
              <li>a single course;</li>
              <li>a one-off coaching interaction; nor</li>
              <li>a reskilling panic button.</li>
            </ul>
          </app-accordion-card>
        </app-accordion>
      </app-section>
    </app-sections-container>

    <div class="awards-block">
      <app-awards-list />
    </div>

    <div class="logos-block">
      <app-logo-carousel />
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f4f1ea;
      overflow-x: clip; /* clip instead of hidden to not break sticky */
    }

    .awards-block,
    .logos-block {
      width: 100%;
      padding: 4rem 0;
      scroll-snap-align: start;
    }

    .bento-list {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .bento-list li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.1rem;
      line-height: 1.5;
    }

    .bento-list li::before {
      content: '↓';
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.9rem;
      flex-shrink: 0;
      margin-top: 3px;
    }
  `],
})
export class AppComponent {
  currentSection = signal(0);
  expandedCard = signal(-1);

  navItems = signal<NavCommand[]>([
    { label: 'KNOWLEDGE', link: '/knowledge' },
    { label: 'SERVICES', link: '/#services' },
    { label: 'ABOUT US', link: '/#about-us' },
    { label: 'AWARDS', link: '/awards' },
    { label: 'WHO TRUST US', link: '/brands' }
  ]);

  accordionCards = signal<AccordionCardData[]>([
    {
      title: 'Extreme-efficient nation, following our DNA',
      description: 'In 2025, we became the first company to be trusted to change a whole country - Spain. \n\nIt was based on our AI-geostrategy paper and involved the Ministry of Economy (bottom-up guidance of the economic policy; \n\nFirst things first - we established a methodology to help all companies detect and prioritize their transformation projects. Actually, one of the least advanced challenges to date.',
      icon: '',
      backgroundColor: 'rgba(232, 93, 4, 0.85)',
    },
    {
      title: 'Pioneers of Agentic AI',
      description: 'We are highly regarded as the global pioneers of strategies-based Agentic AI. We started in 2015 and published our results in our first paper - Data MAPs.\n\nDo not trust our word for that. Ask your preferred LLM, here.',
      icon: '',
      backgroundColor: 'rgba(0, 119, 182, 0.85)',
    },
    {
      title: 'A pristine track record on innovation',
      description: 'Those who have known us for years have already witnessed the track record in real time.\n\nFor the rest, a good KPI is to see how much they anticipate the wish lists published year after year by Y Combinator. We can’t give details but you can work it out throughout our literature and co.',
      icon: '',
      backgroundColor: 'rgba(59, 25, 180, 0.85)',
    },
  ]);

  sections = signal<SectionData[]>([
    { id: 1, title: 'About us', subtitle: 'WELL BEYOND EDUCATION', backgroundColor: 'var(--color-1)' },
    { id: 2, title: 'The problem we solve', subtitle: 'STATIC OR REACTIVE ARE TOO RISKY', backgroundColor: 'var(--color-2)' },
    { id: 3, title: 'What this is and this is not', subtitle: 'WE ARE KEEN ON DISRUPTION, NOT ON THE BUSINESS OF EDUCATION', backgroundColor: 'var(--color-3)' },
    { id: 4, title: 'Carrer HEDGING, NOT GAMBLING', subtitle: 'PROFESSIONALS OF RISK-REWARD', backgroundColor: 'var(--color-4)' },
    { id: 5, title: 'The method: follow, evolve, deviate', subtitle: 'WHAT WE EXPECT FROM YOU', backgroundColor: 'var(--color-5)' },
    { id: 6, title: 'From degrees to resilience', subtitle: "4Y AT UNI CAN'T HAVE SUCH A LONG-RUN EFFECT IN YOUR CAREER", backgroundColor: 'var(--color-1)' },
    { id: 7, title: 'From skills to opportunities', subtitle: "4Y AT UNI CAN'T HAVE SUCH A LONG-RUN EFFECT IN YOUR CAREER", backgroundColor: 'var(--color-2)' },
    { id: 8, title: 'Why systematizing a competitive advantage?', subtitle: 'NOT ONLY ABOUT SOCIAL IMPACT', backgroundColor: 'var(--color-3)' },
    { id: 9, title: 'How learning works with us', subtitle: 'CONNECTING CONCEPTS THAT HAVE TRADITIONALLY BEEN FAR APART', backgroundColor: 'var(--color-4)' },
    { id: 10, title: 'Custom', subtitle: "IT'S ALL ABOUT YOU", backgroundColor: 'var(--color-5)' },
    { id: 11, title: 'Who this is for', subtitle: 'VERY SPECIAL PEOPLE', backgroundColor: 'var(--color-1)' },
    { id: 12, title: 'Radically honest', subtitle: 'WE WISH THERE WERE GUARANTEES', backgroundColor: 'var(--color-2)' },
    { id: 13, title: 'In one sentence', subtitle: 'YOU HAVE FOLLOWED OUR FIRST PILL', backgroundColor: 'var(--color-3)' },
  ]);

  sectionsContainerRef = viewChild<SectionsContainerComponent>('sectionsContainer');

  onSectionChanged(index: number) {
    this.currentSection.set(index);
  }

  handleNavigateRequest(index: number) {
    this.currentSection.set(index);
  }

  setExpandedCard(index: number) {
    this.expandedCard.set(index);
  }
}
