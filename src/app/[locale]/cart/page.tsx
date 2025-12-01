import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import styles from './Cart.module.css';

export default function CartPage() {
  const t = useTranslations('Shop');

  return (
    <div className="container section-padding">
      <h1 className="section-title">{t('cartTitle')}</h1>
      <div className={styles.container}>
        <div className={styles.emptyCart}>
          <p className={styles.emptyMessage}>{t('emptyCart')}</p>
          <Link href="/shop" className={styles.continueBtn}>{t('continueShopping')}</Link>
        </div>

        {/* Mock Cart Item for visual */}
        {/* 
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: '#f0f0f0' }}></div>
            <div>
              <h3 style={{ fontWeight: '600' }}>High-Grade Cement</h3>
              <p>$15.99</p>
            </div>
          </div>
          <div>
            <input type="number" defaultValue="1" style={{ width: '50px', padding: '5px' }} />
          </div>
          <div>$15.99</div>
        </div>
        */}
      </div>
    </div>
  );
}
