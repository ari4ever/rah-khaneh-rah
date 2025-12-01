import { Link } from '@/navigation';
import styles from './Header.module.css';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={locale === 'fa' ? '/logo-fa.png' : '/logo-en.png'}
                        alt="راه خانه راه"
                        width={180}
                        height={60}
                        priority
                        className={styles.logoImage}
                    />
                </Link>

                <nav className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>{t('home')}</Link>
                    <Link href="/services" className={styles.navLink}>{t('services')}</Link>
                    <Link href="/shop" className={styles.navLink}>{t('shop')}</Link>
                    <Link href="/projects" className={styles.navLink}>{t('projects')}</Link>
                    <Link href="/contact" className={styles.navLink}>{t('contact')}</Link>
                </nav>

                <div className={styles.actions}>
                    <LanguageSwitcher />
                    <Link href="/cart" className={styles.iconBtn} aria-label={t('cart')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </Link>
                    <Link href="/login" className={styles.iconBtn} aria-label={t('login')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </Link>
                    <button className={`${styles.iconBtn} ${styles.mobileMenuBtn}`} aria-label="Menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
