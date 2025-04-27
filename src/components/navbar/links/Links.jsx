"use client"

import Image from 'next/image';
import styles from './links.module.css'
import NavLink from './navLink/navLink';
import { useState } from 'react';
import { signOut } from 'next-auth/react';


const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    }
];

const Links = ({session}) => {
    const [ open, setOpen ] = useState(false);

    
    const handleLogout = () => {
        signOut();     
    }


    return(
        <div className={styles.container}>
            <div className={styles.links}>
            {links.map((link => (
                <NavLink item={link} key={link.title}/>
            )))}{
              session?.user ? (
                <>
                    {session.user?.isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                    <button onClick={handleLogout}  className={styles.logout}>Logout</button>
                </>
              ) : (
                <NavLink item={{title:"Login", path: "/login"}} />
              ) 
            }
        </div>
        <Image 
            className={styles.menuButton}
            src='/menu-icon.png'
            alt='menu'
            width={30}
            height={30}
            onClick={() => setOpen((prev) => !prev)}
        />
        { open && (
            <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
        )}
        </div>       
    );
};

export default Links
