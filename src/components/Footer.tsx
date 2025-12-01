import { Link } from '@/navigation';
import styles from './Footer.module.css';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>{t('companyName')}</h3>
                        <p className={styles.description}>
                            {t('description')}
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3>{t('services')}</h3>
                        <ul>
                            <li><Link href="/services#consulting">{t('consulting')}</Link></li>
                            <li><Link href="/services#design">{t('design')}</Link></li>
                            <li><Link href="/services#supervision">{t('supervision')}</Link></li>
                            <li><Link href="/services#execution">{t('execution')}</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>{t('quickLinks')}</h3>
                        <ul>
                            <li><Link href="/">{t('aboutUs')}</Link></li> {/* Note: About page doesn't exist yet, linking to home or placeholder */}
                            <li><Link href="/projects">{t('projects')}</Link></li>
                            <li><Link href="/shop">{t('shop')}</Link></li>
                            <li><Link href="/contact">{t('contact')}</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>{t('contact')}</h3>
                        <ul>
                            <li>{t('addressLine1')}</li>
                            <li>{t('addressLine2')}</li>
                            <li>{t('email')}</li>
                            <li>{t('phone')}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} {t('companyName')} {t('rightsReserved')}</p>
                </div>
            </div>
        </footer>
    );
}
