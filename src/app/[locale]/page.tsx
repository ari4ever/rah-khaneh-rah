import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import styles from './Home.module.css';

export default function Home() {
  const t = useTranslations('Home');
  const tServices = useTranslations('Services');
  const tServiceCards = useTranslations('ServiceCards');
  const tProducts = useTranslations('Products');
  const tItems = useTranslations('ProjectItems');
  const tProjects = useTranslations('Projects');

  return (
    <div>
      <HeroSection />
      <section className="section-padding container">
        <h2 className="section-title">{t('ourServices')}</h2>
        <div className={styles.servicesGrid}>
          <ServiceCard
            title={tServices('consultingTitle')}
            description={tServiceCards('consulting')}
            href="/services#consulting"
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            }
          />
          <ServiceCard
            title={tServices('designTitle')}
            description={tServiceCards('design')}
            href="/services#design"
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            }
          />
          <ServiceCard
            title={tServices('executionTitle')}
            description={tServiceCards('execution')}
            href="/services#execution"
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            }
          />
        </div>
      </section>

      <ProjectShowcase />

      <section className={`section-padding ${styles.featuredSection}`}>
        <div className="container">
          <h2 className="section-title">{t('featuredProducts')}</h2>
          <div className={styles.productsGrid}>
            <ProductCard
              title={tProducts('excavator')}
              price={2500.00}
              category={tProducts('equipment')}
              image="/products/product_excavator.png"
            />
            <ProductCard
              title={tProducts('blueprints')}
              price={500.00}
              category={tProducts('services')}
              image="/products/product_blueprints.png"
            />
            <ProductCard
              title={tProducts('permit')}
              price={150.00}
              category={tProducts('services')}
              image="/products/product_permit.png"
            />
            <ProductCard
              title={tProducts('greenDesign')}
              price={3000.00}
              category={tProducts('services')}
              image="/products/product_green_design.png"
            />
            <ProductCard
              title={tProducts('constructionMgmt')}
              price={5000.00}
              category={tProducts('services')}
              image="/products/product_construction_mgmt.png"
            />
            <ProductCard
              title={tProducts('apartmentDesign')}
              price={4500.00}
              category={tProducts('services')}
              image="/products/product_apartment_design.png"
            />
            <ProductCard
              title={tProducts('tiles')}
              price={45.00}
              category={tProducts('materials')}
              image="/products/product_tiles.png"
            />
            <ProductCard
              title={tProducts('rebar')}
              price={850.00}
              category={tProducts('structural')}
              image="/products/product_rebar_bundle.png"
            />
            <ProductCard
              title={tProducts('smartHome')}
              price={1200.00}
              category={tProducts('technology')}
              image="/products/product_smart_home.png"
            />
            <ProductCard
              title={tProducts('piling')}
              price={3500.00}
              category={tProducts('equipment')}
              image="/products/product_piling_rig.jpg"
            />
          </div>
          <div className={styles.viewAllContainer}>
            <Link href="/shop" className="btn btn-outline">{t('viewAllProducts')}</Link>
          </div>
        </div>
      </section>

      <section className="section-padding container">
        <h2 className="section-title">{tProjects('title')}</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <Image src="/hero_skyscraper.png" alt={tItems('goldenTower')} fill className={styles.projectImage} sizes="(max-width: 768px) 100vw, 50vw" />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>{tItems('goldenTower')}</h3>
              <p className={styles.projectSubtitle}>{tItems('tehran')} | {tItems('residential')}</p>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Image src="/hero/hero_stadium.jpg" alt={tItems('cityStadium')} fill className={styles.projectImage} sizes="(max-width: 768px) 100vw, 50vw" />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>{tItems('cityStadium')}</h3>
              <p className={styles.projectSubtitle}>{tItems('mashhad')} | {tItems('infrastructure')}</p>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Image src="/hero/hero_highway.jpg" alt={tItems('northHighway')} fill className={styles.projectImage} sizes="(max-width: 768px) 100vw, 50vw" />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>{tItems('northHighway')}</h3>
              <p className={styles.projectSubtitle}>{tItems('rasht')} | {tItems('infrastructure')}</p>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Image src="/hero/hero_green_house.jpg" alt={tItems('ecoVilla')} fill className={styles.projectImage} sizes="(max-width: 768px) 100vw, 50vw" />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>{tItems('ecoVilla')}</h3>
              <p className={styles.projectSubtitle}>{tItems('shiraz')} | {tItems('residential')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-padding container ${styles.featuresSection}`}>
        <h2 className="section-title">{t('whyChooseUs')}</h2>
        <div className={styles.featuresGrid}>
          <div>
            <h3 className={styles.featureTitle}>{t('expertTeam')}</h3>
            <p>{t('expertTeamDesc')}</p>
          </div>
          <div>
            <h3 className={styles.featureTitle}>{t('qualityAssurance')}</h3>
            <p>{t('qualityAssuranceDesc')}</p>
          </div>
          <div>
            <h3 className={styles.featureTitle}>{t('onTimeDelivery')}</h3>
            <p>{t('onTimeDeliveryDesc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
