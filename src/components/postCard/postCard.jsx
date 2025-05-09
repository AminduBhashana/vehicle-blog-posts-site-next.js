import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          {post.img ? <div className={styles.imgContainer}>
                <Image src={post.img} alt='post image' fill className={styles.img} />
            </div> : 
              <div className={styles.imgContainer}>
              <Image src="/blog-post1.jpg" alt='post image' fill className={styles.img} />
          </div>
            }          
            <span className={styles.date}>{post.createdAt.toString().slice(0,10)}</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.body}</p>
            <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard
