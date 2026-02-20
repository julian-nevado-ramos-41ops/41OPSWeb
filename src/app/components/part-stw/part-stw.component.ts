
import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-part-stw',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './part-stw.component.html',
    styleUrl: './part-stw.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartStwComponent {
    /** HTML content for the title, allows styling like underlines */
    titleHtml = input.required<string>();

    /** Description text displayed on the right column */
    description = input.required<string>();

    descriptionHtml = computed(() => {
        const desc = this.description();
        const lines = desc.split('\n').map(l => l.trim()).filter(l => l.length > 0);

        if (lines.length === 0) return '';

        const intro = lines[0];
        const points = lines.slice(1);

        if (points.length === 0) return `<div class="intro">${intro}</div>`;

        return `
            <div class="intro">${intro}</div>
            <div class="points-container">
                ${points.map(p => `<div class="point-item">${p}</div>`).join('')}
            </div>
        `;
    });

    // Customization Inputs
    backgroundColor = input<string>('#F3F1E7'); // Light beige default
    textColor = input<string>('#1a1a1a');

    /** Font family for the title */
    titleFont = input<string>("'Inter', sans-serif");

    /** Font family for the description */
    descriptionFont = input<string>("'DM Sans', sans-serif");
}
