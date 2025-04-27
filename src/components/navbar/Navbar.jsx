import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "../../lib/auth"

const Navbar = async () => {

    return(
        <div className={styles.container}>
            <Link href='/' className={styles.logo}>NewVehicles</Link>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar