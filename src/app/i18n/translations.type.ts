export interface Translations {
    navBar: {
        partners: string;
        aboutUs: string;
        awards: string;
        whoTrustUs: string;
        theGroup: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
    partStw: {
        titleHtml: string;
        description: string;
    };
    highlights: {
        sectionTitle: string;
        sectionSubtitle: string;
        testimonialsLabel: string;
        copyPromptLabel: string;
        copyButtonLabel: string;
        copiedButtonLabel: string;
        llmSectionLabel: string;
        cards: Array<{
            title: string;
            description: string;
            prompt?: string;
            testimonials: Array<{
                name: string;
                role: string;
                quote: string;
            }>;
            markers?: Array<{
                city: string;
                country: string;
                description: string;
            }>;
        }>;
    };
    horizontalSections: Array<{
        title: string;
    }>;
    aboutUsHorizontal: Array<{
        title: string;
        modalContent: string;
    }>;
    unbeatableVertical: Array<{
        title: string;
        modalContent?: string;
        customContent?: string;
    }>;
    newVerticalSections: Array<{
        title: string;
        subtitle: string;
        modalContent?: string;
    }>;
    engagementModes: Array<{
        title: string;
        content: string;
    }>;
    transformationSpeeds: Array<{
        title: string;
        content: string;
    }>;
    oldVerticalSections: Array<{
        title: string;
        subtitle: string;
        modalContent?: string;
    }>;
    pillarsList: Array<{
        title: string;
        content: string;
    }>;
    outputsList: Array<{
        title: string;
        content: string;
    }>;
    academicPartners: {
        title: string;
        subtitle: string;
        introText: string;
        outroText: string;
        partners: Array<{
            institution: string;
            partnership: string;
        }>;
    };
    awards: {
        title: string;
        subtitle: string;
        items: Array<{
            name: string;
            category: string;
            project: string;
        }>;
    };
    contactUs: {
        title: string;
        addressLines: string[];
    };
    footer: {
        isoText: string;
    };
    cookieBanner: {
        text: string;
        accept: string;
    };
    preloader: {
        textLeft: string;
        textRight: string;
    };
    modals: {
        copyPromptFirst: string;
        copied: string;
        copyPrompt: string;
        checkLlms: string;
    };
    brands: {
        title: string;
    };
    common: {
        seeMore: string;
    };
}
