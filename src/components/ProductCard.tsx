import styles from './ProductCard.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ProductCardProps {
    title: string;
    price: number;
    category: string;
    image?: string;
}

export default function ProductCard({ title, price, category, image }: ProductCardProps) {
    const t = useTranslations('Shop');

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image || "/product_cement.png"}
                    alt={title}
                    fill
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.category}>{category}</div>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.price}>${price.toLocaleString()}</div>
                <div className={styles.actions}>
                    <button className={styles.addToCartBtn}>
                        {t('addToCart')}
                    </button>
                </div>
            </div>
        </div>
    );
}
