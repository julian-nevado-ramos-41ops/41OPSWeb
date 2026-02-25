import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Translations } from './translations.type';
import { EN } from './en';
import { ES } from './es';

const DICTIONARIES = {
    en: EN,
    es: ES,
};

type Lang = 'en' | 'es';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    readonly currentLang = signal<Lang>('en');

    readonly t = computed<Translations>(() => DICTIONARIES[this.currentLang()]);

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            const savedLang = localStorage.getItem('la-lang') as Lang;
            if (savedLang === 'en' || savedLang === 'es') {
                this.currentLang.set(savedLang);
            }
        }
    }

    setLanguage(lang: Lang) {
        this.currentLang.set(lang);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('la-lang', lang);
        }
    }

    toggleLanguage() {
        this.setLanguage(this.currentLang() === 'en' ? 'es' : 'en');
    }
}
