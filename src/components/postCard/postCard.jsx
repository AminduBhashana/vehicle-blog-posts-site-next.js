import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/blog-post1.jpg" alt='post image' fill className={styles.img} />
            </div>
            <span className={styles.date}>02.04.2025</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsam obcaecati eum dolor incidunt inventore quod repudiandae dolorem ipsum praesentium corporis a recusandae blanditiis esse ut eos reprehenderit impedit quidem nisi. Iure, officiis odit veritatis voluptatem exercitationem quaerat nostrum necessitatibus!</p>
            <Link className={styles.link} href="/blog/post">Read More</Link>
        </div>
    </div>
  )
}

export default PostCard
