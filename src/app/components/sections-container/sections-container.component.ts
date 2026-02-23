import {
    Component,
    ChangeDetectionStrategy,
    ElementRef,
    output,
    afterNextRender,
    signal,
    input,
    computed,
    OnDestroy,
    numberAttribute,
    Renderer2,
    Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'app-sections-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'scroll-container',
        '[class.horizontal]': 'isHorizontal()',
        '[style.height]': 'hostHeight()',
        '[style.marginTop]': 'verticalMargin()',
        '[style.marginBottom]': 'verticalMargin()',
    },
    template: `
        <div class="viewport-wrapper">
            <div
                class="sections-track"
                [class.blurred]="showScrollIndicator()"
                [style.transform]="isHorizontal() ? trackTransform() : null"
            >
                <ng-content />
            </div>

            @if (showScrollIndicator()) {
              <div class="mobile-scroll-indicator">
                <img src="img/logo-nav-bar.gif" alt="Robot Indicator" class="indicator-bot">
                <span class="indicator-text" [innerHTML]="indicatorText()"></span>
              </div>
            }
        </div>
    `,
    styles: [`
    /* ─── Shared base ─── */
    :host {
      display: block;
      margin: 0 2rem;
      border-radius: 24px;
      overflow-x: clip; 
      background: #000;
      position: relative;
    }

    /* ─── Wrappers ─── */
    .viewport-wrapper {
      display: contents;
    }
    .sections-track {
      display: block; /* Required for filter: blur to work on the parent wrapper */
    }

    @media (max-width: 900px) {
      :host {
        margin: 0 1rem;
        border-radius: 16px;
      }
      :host(:not(.horizontal)) {
        height: 100dvh;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: y mandatory;
      }
    }

    /* ─── Mobile Scroll Indicator ─── */
    .mobile-scroll-indicator {
      display: none; /* Hidden by default on desktop */
    }
    
    .sections-track.blurred {
      filter: blur(4px);
      transition: filter 0.8s ease;
      pointer-events: none; /* Prevent accidental interactions while blurred */
    }

    @media (max-width: 900px) {
      .mobile-scroll-indicator {
        display: flex;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 0.75rem 1.5rem;
        border-radius: 100px;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        pointer-events: none; /* Let clicks pass through */
        animation: indicatorFadeIn 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        white-space: nowrap;
      }

      @keyframes indicatorFadeIn {
        from { opacity: 0; transform: translate(-50%, calc(-50% + 20px)); }
        to { opacity: 1; transform: translate(-50%, -50%); }
      }

      .indicator-bot {
        width: 30px;
        height: auto;
      }

      .indicator-text {
        color: rgba(0, 0, 0, 0.8);
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.5px;
      }

      .indicator-text u {
        text-decoration-color: var(--color-1, #E85D04);
        text-underline-offset: 4px;
        font-weight: 600;
      }
    }

    /* ─── Horizontal-specific ─── */

    :host.horizontal {
      overflow: hidden;
      background: transparent;
      scroll-snap-align: center;
      scroll-snap-stop: always;
    }

    :host.horizontal .viewport-wrapper {
      display: block;
      height: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 24px;
      /* background: #000; Removed to avoid black lines */
    }

    :host.horizontal .sections-track {
      display: flex;
      height: 100%;
      will-change: transform;
      transition: transform 0.7s cubic-bezier(0.65, 0, 0.35, 1);
    }



    /* Force sections to fill the viewport */
    :host.horizontal ::ng-deep app-section {
      min-width: 100%;
      height: 100% !important;
      flex-shrink: 0;
      scroll-snap-align: none;
    }
  `],
})
export class SectionsContainerComponent implements OnDestroy {
    /* Inputs */
    layout = input<'vertical' | 'horizontal'>('vertical');
    viewportHeightVh = input(85, { transform: numberAttribute });

    private static activeSnapContainers = 0;
    private isRegisteredForSnap = false;

    /* Outputs */
    sectionChanged = output<number>();
    navigateRequest = output<number>();
    containerVisible = output<boolean>();

    /* State */
    currentIndex = signal(0);
    private sections: Element[] = [];
    totalSections = signal(0);
    private observer: IntersectionObserver | null = null;
    private containerObserver: IntersectionObserver | null = null;

    /* Mobile Indicator State */
    showScrollIndicator = signal(false);
    private hasInteracted = signal(false);
    private indicatorTimeout: any;

    /* Horizontal helpers */
    isHorizontal = computed(() => this.layout() === 'horizontal');

    trackTransform = computed(
        () => `translateX(-${this.currentIndex() * 100}%)`
    );

    indicatorText = computed(() => {
        return this.isHorizontal()
            ? 'keep track of the messages <u>to the right</u>'
            : '<u>scrolling down</u>';
    });

    /* Flat height: simply the input height (e.g. 85vh) */
    hostHeight = computed(() =>
        this.isHorizontal() ? `${this.viewportHeightVh()}vh` : null
    );

    /* Vertical centering margin: (100 - height) / 2 */
    verticalMargin = computed(() => {
        if (!this.isHorizontal()) return null;
        const vh = this.viewportHeightVh();
        const margin = (100 - vh) / 2;
        return `${margin}vh`;
    });

    /* Navigation state */
    private isTransitioning = false;
    private readonly TRANSITION_DURATION = 750;
    private readonly WHEEL_THRESHOLD = 30;
    private readonly SWIPE_THRESHOLD = 50;
    private touchStartX = 0;
    private touchStartY = 0;

    /* Handlers */
    private wheelHandler = (e: WheelEvent) => this.onWheel(e);
    private keyHandler = (e: KeyboardEvent) => this.onKey(e);
    private touchStartHandler = (e: TouchEvent) => this.onTouchStart(e);
    private touchEndHandler = (e: TouchEvent) => this.onTouchEnd(e);

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document
    ) {
        afterNextRender(() => {
            if (this.isHorizontal()) {
                this.setupHorizontal();
            } else {
                this.setupSectionObserver();
            }
            this.setupContainerVisibilityObserver();
        });
    }

    /* ───────── Vertical ───────── */

    private setupSectionObserver() {
        const container = this.elementRef.nativeElement;
        this.sections = Array.from(container.querySelectorAll('app-section'));
        this.totalSections.set(this.sections.length);

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = this.sections.indexOf(entry.target);
                        if (index !== -1 && index !== this.currentIndex()) {
                            this.currentIndex.set(index);
                            this.sectionChanged.emit(index);
                            entry.target.classList.add('visible');
                        }
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.5 }
        );

        this.sections.forEach((section) => this.observer!.observe(section));

        if (this.sections[0]) {
            this.sections[0].classList.add('visible');
        }

        // Attach events to hide indicator on user scroll/interaction
        container.addEventListener('wheel', this.wheelHandler, { passive: true });
        container.addEventListener('touchstart', this.touchStartHandler, { passive: true });
        container.addEventListener('touchend', this.touchEndHandler, { passive: true });
        document.addEventListener('keydown', this.keyHandler);
    }

    /* ───────── Horizontal ───────── */

    private setupHorizontal() {
        const container = this.elementRef.nativeElement;
        this.sections = Array.from(container.querySelectorAll('app-section'));
        this.totalSections.set(this.sections.length);

        if (this.sections[0]) {
            this.sections[0].classList.add('visible');
        }

        container.addEventListener('wheel', this.wheelHandler, { passive: false });
        container.addEventListener('touchstart', this.touchStartHandler, { passive: true });
        container.addEventListener('touchend', this.touchEndHandler, { passive: true });
        document.addEventListener('keydown', this.keyHandler);
    }

    private onWheel(e: WheelEvent) {
        this.hideMobileIndicator();
        if (this.isTransitioning) {
            if (this.isHorizontal()) e.preventDefault();
            return;
        }

        if (!this.isHorizontal()) return;

        const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
        if (Math.abs(delta) < this.WHEEL_THRESHOLD) return;

        const idx = this.currentIndex();

        if (delta > 0) {
            if (idx < this.sections.length - 1) {
                e.preventDefault();
                this.navigateHorizontal(idx + 1);
            }
        } else {
            if (idx > 0) {
                e.preventDefault();
                this.navigateHorizontal(idx - 1);
            }
        }
    }

    private onKey(e: KeyboardEvent) {
        this.hideMobileIndicator();
        if (this.isTransitioning || !this.isHorizontal()) return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateHorizontal(this.currentIndex() + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateHorizontal(this.currentIndex() - 1);
        }
    }

    private onTouchStart(e: TouchEvent) {
        this.hideMobileIndicator();
        this.touchStartX = e.changedTouches[0].clientX;
        this.touchStartY = e.changedTouches[0].clientY;
    }

    private onTouchEnd(e: TouchEvent) {
        this.hideMobileIndicator();
        if (this.isTransitioning) return;
        const dx = this.touchStartX - e.changedTouches[0].clientX;
        const dy = this.touchStartY - e.changedTouches[0].clientY;

        if (!this.isHorizontal()) return;

        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > this.SWIPE_THRESHOLD) {
            if (dx > 0) {
                this.navigateHorizontal(this.currentIndex() + 1);
            } else {
                this.navigateHorizontal(this.currentIndex() - 1);
            }
        }
    }

    private navigateHorizontal(index: number) {
        const clamped = Math.max(0, Math.min(index, this.sections.length - 1));
        if (clamped === this.currentIndex()) return;

        this.isTransitioning = true;

        this.sections[this.currentIndex()]?.classList.remove('visible');
        this.sections[clamped]?.classList.add('visible');
        this.currentIndex.set(clamped);
        this.sectionChanged.emit(clamped);
        this.navigateRequest.emit(clamped);

        setTimeout(() => {
            this.isTransitioning = false;
        }, this.TRANSITION_DURATION);
    }

    /* ───────── Shared ───────── */

    navigateNext() {
        if (this.isHorizontal()) {
            this.navigateHorizontal(this.currentIndex() + 1);
        } else {
            const nextIndex = Math.min(this.currentIndex() + 1, this.sections.length - 1);
            this.navigateToSection(nextIndex);
        }
    }

    onSideNavClick(index: number) {
        if (this.isHorizontal()) {
            this.navigateHorizontal(index);
        } else {
            this.navigateToSection(index);
        }
    }

    private setupContainerVisibilityObserver() {
        const container = this.elementRef.nativeElement;
        const visibilityObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    this.containerVisible.emit(entry.isIntersecting);

                    // Toggle snapping only for vertical containers
                    if (!this.isHorizontal()) {
                        if (entry.isIntersecting && !this.isRegisteredForSnap) {
                            this.isRegisteredForSnap = true;
                            SectionsContainerComponent.activeSnapContainers++;
                        } else if (!entry.isIntersecting && this.isRegisteredForSnap) {
                            this.isRegisteredForSnap = false;
                            SectionsContainerComponent.activeSnapContainers--;
                        }

                        if (SectionsContainerComponent.activeSnapContainers > 0 && this.shouldEnableGlobalSnap()) {
                            this.renderer.addClass(this.document.documentElement, 'snapping-enabled');
                        } else {
                            this.renderer.removeClass(this.document.documentElement, 'snapping-enabled');
                        }
                    }

                    // Trigger mobile indicator on first appearance if mobile and on first section
                    if (entry.isIntersecting && window.innerWidth <= 900 && !this.hasInteracted() && this.currentIndex() === 0) {
                        this.triggerMobileIndicator();
                    }
                });
            },
            { root: null, threshold: 0.2 }
        );
        visibilityObserver.observe(container);
    }

    private shouldEnableGlobalSnap(): boolean {
        return window.matchMedia('(min-width: 901px) and (pointer: fine)').matches;
    }

    private triggerMobileIndicator() {
        if (this.hasInteracted()) return;

        this.showScrollIndicator.set(true);

        if (this.indicatorTimeout) {
            clearTimeout(this.indicatorTimeout);
        }

        this.indicatorTimeout = setTimeout(() => {
            if (this.showScrollIndicator()) {
                this.showScrollIndicator.set(false);
            }
        }, 5000); /* 5 seconds of animation */
    }

    private hideMobileIndicator() {
        if (!this.hasInteracted()) {
            this.hasInteracted.set(true);
            this.showScrollIndicator.set(false);
            if (this.indicatorTimeout) {
                clearTimeout(this.indicatorTimeout);
            }
        }
    }

    scrollToSection(index: number) {
        if (this.isHorizontal()) {
            this.navigateHorizontal(index);
        } else {
            this.navigateToSection(index);
        }
    }

    private navigateToSection(index: number) {
        const targetIndex = Math.max(0, Math.min(index, this.sections.length - 1));
        const targetSection = this.sections[targetIndex];

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.navigateRequest.emit(targetIndex);
        }
    }

    ngOnDestroy() {
        if (this.isRegisteredForSnap) {
            SectionsContainerComponent.activeSnapContainers--;
            if (SectionsContainerComponent.activeSnapContainers === 0) {
                this.renderer.removeClass(this.document.documentElement, 'snapping-enabled');
            }
        }
        if (this.observer) this.observer.disconnect();
        this.renderer.removeClass(this.document.documentElement, 'snapping-enabled');
        const container = this.elementRef.nativeElement;
        container.removeEventListener('wheel', this.wheelHandler);
        container.removeEventListener('touchstart', this.touchStartHandler);
        container.removeEventListener('touchend', this.touchEndHandler);
        document.removeEventListener('keydown', this.keyHandler);
    }
}
