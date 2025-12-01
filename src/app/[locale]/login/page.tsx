import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import styles from './Login.module.css';

export default function LoginPage() {
    const t = useTranslations('Login');

    return (
        <div className={`container section-padding ${styles.container}`}>
            <h1 className="section-title">{t('title')}</h1>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>{t('emailLabel')}</label>
                    <input
                        type="email"
                        placeholder={t('emailPlaceholder')}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>{t('passwordLabel')}</label>
                    <input
                        type="password"
                        placeholder={t('passwordPlaceholder')}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={`btn ${styles.submitBtn}`}>{t('submitButton')}</button>
                <p className={styles.footer}>
                    {t('noAccount')} <Link href="/register" className={styles.link}>{t('registerLink')}</Link>
                </p>
            </form>
        </div>
    );
}
