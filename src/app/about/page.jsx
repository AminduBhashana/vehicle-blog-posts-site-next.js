import Image from 'next/image'
import styles from './about.module.css'

export const metadata = {
  title: 'About Page',
  description: 'About Description',
}

const AboutPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About NewVehicles</h2>
          <h1 className={styles.title}>
            Ultimate Destination for New Car Arrivals in Sri
            Lanka!
          </h1>
          <p className={styles.description}>
            Step into the world of elite automotive excellence with Sri Lanka’s
            newest luxury car arrivals. From high-performance engines to opulent
            interiors, discover the finest models from Mercedes-Benz, BMW, Audi,
            and more. Experience prestige on the road with exclusive showroom
            offers and personalized financing plans.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
                <h1>10+</h1>
                <p>Years of Experience</p>
            </div>
            <div className={styles.box}>
                <h1>25+</h1>
                <p>New Vehicle Arrivals</p>
            </div>
            <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Daily Blog Users</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/about-image.png" alt="About image" fill />
        </div>
      </div>
    );
}

export default AboutPage