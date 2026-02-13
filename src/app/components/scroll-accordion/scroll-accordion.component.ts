import {
    Component,
    ChangeDetectionStrategy,
    input,
    signal,
    ElementRef,
    AfterViewInit,
    OnDestroy,
    Inject,
    PLATFORM_ID,
    NgZone,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface ScrollAccordionCard {
    title: string;
    description: string;
    icon?: string;
    backgroundColor?: string;
}

@Component({
    selector: 'app-scroll-accordion',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './scroll-accordion.component.html',
    styleUrls: ['./scroll-accordion.component.css'],
})
export class ScrollAccordionComponent implements AfterViewInit, OnDestroy {
    // Content Inputs
    cards = input<ScrollAccordionCard[]>([]);

    // Appearance Inputs
    minWidth = input<string>('60%');
    maxWidth = input<string>('90%');
    cardHeight = input<string>('350px');
    gap = input<string>('1.5rem');
    borderRadius = input<string>('20px');
    sectionHeight = input<string>('200vh'); // Scroll distance for full expansion
    textColor = input<string>('#ffffff');
    fontFamily = input<string>("'Helvetica Neue', 'Arial', sans-serif");

    // Internal state
    expansionProgress = signal(0); // 0 = collapsed (minWidth), 1 = expanded (maxWidth)

    private scrollHandler: (() => void) | null = null;
    private isBrowser: boolean;

    constructor(
        private el: ElementRef,
        private ngZone: NgZone,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngAfterViewInit(): void {
        if (!this.isBrowser) return;

        this.ngZone.runOutsideAngular(() => {
            this.scrollHandler = () => this.onScroll();
            window.addEventListener('scroll', this.scrollHandler, { passive: true });
            // Initial calculation
            this.onScroll();
        });
    }

    ngOnDestroy(): void {
        if (this.scrollHandler) {
            window.removeEventListener('scroll', this.scrollHandler);
        }
    }

    private onScroll(): void {
        const el = this.el.nativeElement as HTMLElement;
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Start expanding when top of element enters the bottom third of viewport
        // Fully expanded when center of element reaches center of viewport
        const triggerStart = viewportHeight * 0.9; // Start animation here
        const triggerEnd = viewportHeight * 0.3;   // Fully expanded here

        const elementTop = rect.top;

        let progress: number;
        if (elementTop >= triggerStart) {
            progress = 0; // Not yet in view
        } else if (elementTop <= triggerEnd) {
            progress = 1; // Fully expanded
        } else {
            progress = 1 - (elementTop - triggerEnd) / (triggerStart - triggerEnd);
        }

        // Clamp
        progress = Math.max(0, Math.min(1, progress));

        // Only update if changed meaningfully (avoid unnecessary change detection)
        if (Math.abs(this.expansionProgress() - progress) > 0.005) {
            this.ngZone.run(() => {
                this.expansionProgress.set(progress);
            });
        }
    }

    /** Computes the interpolated width as a % string */
    get currentWidth(): string {
        const min = parseFloat(this.minWidth());
        const max = parseFloat(this.maxWidth());
        const width = min + (max - min) * this.expansionProgress();
        return `${width}%`;
    }
}
