import Image from 'next/image';
import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>New Vehicle Arrivals</h1>
      <p className={styles.description}>Welcome to the Ultimate Destination for New Car Arrivals in Sri Lanka! Explore the latest models from top global brands, featuring cutting-edge technology, sleek designs, and unmatched performance.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt='car brands' fill className={styles.brandImage}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.png" alt='hero image' fill className={styles.heroImage} />
    </div>
  </div>;
};

export default Home;