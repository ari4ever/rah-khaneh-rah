'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './ProjectShowcase.module.css';

const projectImages = [
    { src: '/projects/ham-nava/hamnava_1.jpg', key: 'exterior' },
    { src: '/projects/ham-nava/hamnava_2.jpg', key: 'bathroom' },
    { src: '/projects/ham-nava/hamnava_3.png', key: 'interior' },
    { src: '/projects/ham-nava/hamnava_4.jpg', key: 'staircase' },
    { src: '/projects/ham-nava/hamnava_5.jpg', key: 'detail' },
    { src: '/projects/ham-nava/hamnava_6.jpg', key: 'office' },
    { src: '/projects/ham-nava/hamnava_7.jpg', key: 'bedroom' },
    { src: '/projects/ham-nava/hamnava_8.jpg', key: 'kitchen' },
    { src: '/projects/ham-nava/hamnava_9.jpg', key: 'gym' },
    { src: '/projects/ham-nava/hamnava_10.jpg', key: 'dining' },
    { src: '/projects/ham-nava/hamnava_11.png', key: 'cinema' },
];

export default function ProjectShowcase() {
    const t = useTranslations('HamNava');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projectImages.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className={styles.showcase}>
            <div className={styles.mainDisplay}>
                {projectImages.map((img, index) => (
                    <Image
                        key={index}
                        src={img.src}
                        alt={t(img.key)}
                        fill
                        sizes="100vw"
                        className={`${styles.mainImage} ${index === activeIndex ? styles.active : ''}`}
                        priority={index === 0}
                    />
                ))}
                <div className={styles.overlay}></div>

                <div className={styles.content}>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.description}>{t('description')}</p>
                    <h3 className={styles.activeDescription}>
                        {t(projectImages[activeIndex].key)}
                    </h3>
                </div>
            </div>

            <div
                className={styles.thumbnails}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {projectImages.map((img, index) => (
                    <div
                        key={index}
                        className={`${styles.thumbnail} ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <Image
                            src={img.src}
                            alt={t(img.key)}
                            fill
                            sizes="(max-width: 768px) 120px, 180px"
                            className={styles.thumbnailImage}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
