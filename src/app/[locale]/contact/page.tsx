import { useTranslations } from 'next-intl';
import styles from './Contact.module.css';

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <div className="container section-padding">
            <div className={styles.wrapper}>
                <h1 className="section-title">{t('title')}</h1>
                <p className={styles.description}>
                    {t('description')}
                </p>

                <div className={styles.grid}>
                    <div className={styles.infoSection}>
                        <h3>{t('contactInfo')}</h3>
                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <h4>{t('addressTitle')}</h4>
                                <p>123 Engineering Blvd, Tech District<br />Tehran, Iran</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h4>{t('phoneTitle')}</h4>
                                <p>+98 21 1234 5678</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h4>{t('emailTitle')}</h4>
                                <p>info@civileng.com</p>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>{t('nameLabel')}</label>
                            <input type="text" className={styles.input} placeholder={t('namePlaceholder')} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>{t('emailLabel')}</label>
                            <input type="email" className={styles.input} placeholder={t('emailPlaceholder')} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>{t('messageLabel')}</label>
                            <textarea rows={5} className={styles.textarea} placeholder={t('messagePlaceholder')}></textarea>
                        </div>
                        <button type="submit" className="btn">{t('sendMessage')}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
