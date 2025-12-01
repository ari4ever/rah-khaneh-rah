import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Services.module.css';

export default function ServicesPage() {
    const t = useTranslations('Services');

    return (
        <div className="container section-padding">
            <h1 className="section-title">{t('title')}</h1>

            {/* Consulting Section */}
            <div className={styles.section} id="consulting">
                <div className={styles.imageContainer}>
                    <Image
                        src="/services/service_consulting.png"
                        alt={t('consultingTitle')}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                </div>
                <div className={styles.contentContainer}>
                    <h2 className={styles.title}>{t('consultingTitle')}</h2>
                    <p className={styles.description}>
                        {t('consultingDesc')}
                    </p>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🔍</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('consultingFeature1Title')}</h3>
                                <p className={styles.featureText}>{t('consultingFeature1Desc')}</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🧱</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('consultingFeature2Title')}</h3>
                                <p className={styles.featureText}>{t('consultingFeature2Desc')}</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>⚖️</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('consultingFeature3Title')}</h3>
                                <p className={styles.featureText}>{t('consultingFeature3Desc')}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.extraSection}>
                        <p className={styles.extraText}>{t('consultingWhyUs')}</p>
                    </div>
                </div>
            </div>

            {/* Design Section */}
            <div className={styles.section} id="design">
                <div className={styles.imageContainer}>
                    <Image
                        src="/services/service_design.png"
                        alt={t('designTitle')}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                </div>
                <div className={styles.contentContainer}>
                    <h2 className={styles.title}>{t('designTitle')}</h2>
                    <p className={styles.description}>
                        {t('designDesc')}
                    </p>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>💡</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('designFeature1Title')}</h3>
                                <p className={styles.featureText}>{t('designFeature1Desc')}</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🎯</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('designFeature2Title')}</h3>
                                <p className={styles.featureText}>{t('designFeature2Desc')}</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🏗️</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('designFeature3Title')}</h3>
                                <p className={styles.featureText}>{t('designFeature3Desc')}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.extraSection}>
                        <p className={styles.extraText}>{t('designOutput')}</p>
                    </div>
                </div>
            </div>

            {/* Execution Section */}
            <div className={styles.section} id="execution">
                <div className={styles.imageContainer}>
                    <Image
                        src="/services/service_execution.png"
                        alt={t('executionTitle')}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                </div>
                <div className={styles.contentContainer}>
                    <h2 className={styles.title}>{t('executionTitle')}</h2>
                    <p className={styles.description}>
                        {t('executionDesc')}
                    </p>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>🛡️</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('executionFeature1Title')}</h3>
                                <p className={styles.featureText}>{t('executionFeature1Desc')}</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>⏱️</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('executionFeature2Title')}</h3>
                                <p className={styles.featureText}>{t('executionFeature2Desc')}</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.icon}>💰</div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{t('executionFeature3Title')}</h3>
                                <p className={styles.featureText}>{t('executionFeature3Desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
