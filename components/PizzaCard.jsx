import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image';

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" width="500" height="500" alt="" />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi veniam culpa maiores?
            </p>
        </div>
    );
};

export default PizzaCard;