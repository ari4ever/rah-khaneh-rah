'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'fa' : 'en';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            style={{
                background: 'transparent',
                border: '1px solid var(--color-border)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginLeft: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}
        >
            <span>{locale === 'en' ? '🇺🇸 EN' : '🇮🇷 FA'}</span>
        </button>
    );
}
