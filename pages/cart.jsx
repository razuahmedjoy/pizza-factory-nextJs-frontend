import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td><div className={styles.imgContainer}>
                            <Image
                                src="/img/pizza.png" objectFit="contain" layout="fill"
                                alt="" />
                        </div>
                        </td>
                        <td>
                            <span className={styles.name}>COLAZARIO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Spicy Sauce</span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.9</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.8</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td><div className={styles.imgContainer}>
                            <Image
                                src="/img/pizza.png" objectFit="contain" layout="fill"
                                alt="" />
                        </div>
                        </td>
                        <td>
                            <span className={styles.name}>COLAZARIO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Spicy Sauce</span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.9</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.8</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td><div className={styles.imgContainer}>
                            <Image
                                src="/img/pizza.png" objectFit="contain" layout="fill"
                                alt="" />
                        </div>
                        </td>
                        <td>
                            <span className={styles.name}>COLAZARIO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Spicy Sauce</span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.9</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.8</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b> $79.60

                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b> $79.60

                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b> $79.60

                    </div>
                    <button className={styles.button}>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;