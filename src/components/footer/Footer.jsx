import styles from './footer.module.css';

const Footer = () => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.logo}>NewVehicles</div>
            <div className={styles.text}>
                New Vehicles 2025 © All Rights Reserved
            </div>
        </div>
        </>
    )
}

export default Footer