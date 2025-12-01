import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Projects.module.css';

export default function ProjectsPage() {
    const t = useTranslations('Projects');
    const tItems = useTranslations('ProjectItems');

    const projects = [
        { id: 1, title: tItems('goldenTower'), location: tItems('tehran'), category: tItems('residential'), image: '/hero_skyscraper.png' },
        { id: 2, title: tItems('cityStadium'), location: tItems('mashhad'), category: tItems('infrastructure'), image: '/hero/hero_stadium.jpg' },
        { id: 3, title: tItems('northHighway'), location: tItems('rasht'), category: tItems('infrastructure'), image: '/hero/hero_highway.jpg' },
        { id: 4, title: tItems('ecoVilla'), location: tItems('shiraz'), category: tItems('residential'), image: '/hero/hero_green_house.jpg' },
    ];

    return (
        <div className="container section-padding">
            <h1 className="section-title">{t('title')}</h1>
            <p className={styles.description}>
                {t('description')}
            </p>

            <div className={styles.grid}>
                {projects.map(project => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.category}>
                                {project.category}
                            </div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.location}>
                                <span>📍</span>
                                {project.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
