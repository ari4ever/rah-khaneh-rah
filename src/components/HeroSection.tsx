'use client';

import { Link } from '@/navigation';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const heroImages = [
    '/hero/hero_villa.jpg',
    '/hero/hero_stadium.jpg',
    '/hero/hero_highway.jpg',
    '/hero/hero_green_house.jpg',
    '/hero/hero_road.jpg'
];

/* 
   TODO: Once quota resets or images are provided, replace the files in /public with:
   1. hero_highway_interchange.png
   2. hero_stadium_city.png
   3. hero_scenic_road.png
   4. hero_dam_sunset.png
*/

export default function HeroSection() {
    const t = useTranslations('Home');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            {heroImages.map((src, index) => (
                <div
                    key={index}
                    className={`${styles.backgroundImage} ${index === currentImageIndex ? styles.active : ''}`}
                >
                    <Image
                        src={src}
                        alt={t('heroImageAlt')}
                        fill
                        sizes="100vw"
                        className={styles.heroImage}
                        priority={index === 0}
                    />
                </div>
            ))}
            <div className={styles.overlay}></div>

            <div className={`container ${styles.content}`}>
                <h1 className={`animate-fade-in ${styles.title}`}>{t('heroTitle')}</h1>
                <p className={`animate-fade-in ${styles.subtitle} ${styles.delay200}`}>
                    {t('heroSubtitle')}
                </p>
                <div className={`animate-fade-in ${styles.buttons} ${styles.delay400}`}>
                    <Link href="/services" className="btn">
                        {t('ourServices')}
                    </Link>
                    <Link href="/contact" className={`btn btn-outline ${styles.contactBtn}`}>
                        {t('contact')}
                    </Link>
                </div>

                {/* Slider Indicators */}
                <div className={styles.controls}>
                    <div className={styles.indicators}>
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className={styles.progressBar}>
                        <div key={currentImageIndex} className={styles.progressFill}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
