import ProductCard from "@/components/ProductCard";
import { useTranslations } from 'next-intl';
import styles from './Shop.module.css';

export default function ShopPage() {
    const t = useTranslations('Shop');
    const tProducts = useTranslations('Products');

    const products = [
        { id: 1, title: tProducts('cement'), price: 15.99, category: tProducts('materials'), image: "/product_cement.png" },
        { id: 2, title: tProducts('rebar'), price: 850.00, category: tProducts('structural'), image: "/product_rebar.png" },
        { id: 3, title: tProducts('helmet'), price: 25.50, category: tProducts('safetyGear'), image: "/product_helmet.png" },
        { id: 4, title: tProducts('laser'), price: 120.00, category: tProducts('tools'), image: "/product_laser.png" },
        { id: 5, title: tProducts('vest'), price: 12.00, category: tProducts('safetyGear'), image: "/product_vest.png" },
        { id: 6, title: tProducts('boots'), price: 85.00, category: tProducts('safetyGear'), image: "/product_boots.png" },
        { id: 7, title: tProducts('mixer'), price: 450.00, category: tProducts('equipment'), image: "/product_mixer.png" },
        { id: 8, title: tProducts('drill'), price: 150.00, category: tProducts('tools'), image: "/product_drill.png" },
    ];

    return (
        <div className="container section-padding">
            <h1 className="section-title">{t('title')}</h1>
            <div className={styles.grid}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}
