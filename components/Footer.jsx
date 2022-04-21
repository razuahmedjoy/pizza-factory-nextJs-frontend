import styles from "../styles/Footer.module.css";
import Image from 'next/image'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.moto}>
                        OH YES! DI THE PIIZA FACTORY WITH REACT AND ITS FRAMEWORK NEXT JS.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURENTS</h1>
                    <p className={styles.text}>
                        Old TT college Road, <br></br>
                        Bogura Sadar, 5800 <br />
                        Bogura, Bangladesh
                    </p>

                </div>
                <div className={styles.cart}>
                <h1 className={styles.title}>Working Hours</h1>
                <p className={styles.text}>
                        SATURDAY - SUNDAY <br></br>
                        10.00 AM to 8.00 PM
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;