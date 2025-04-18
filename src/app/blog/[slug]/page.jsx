import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostpage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    src="/blog-post1.jpg"
                    alt='blog post image'
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image 
                        className={styles.avatar}
                        src='/avatar.png'
                        width={50}
                        height={50}
                        alt='avatar' />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Jimmy Anderson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.04.2025</span>
                    </div>
                </div>
                <div className={styles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem impedit minus dolore facere mollitia id molestias obcaecati porro recusandae officia quisquam, autem quibusdam qui perferendis totam repellendus est saepe nemo non perspiciatis. Pariatur ipsum rerum provident voluptatem laudantium cumque, aliquid iste labore voluptatibus reiciendis odio itaque adipisci ad nam accusantium.</div>
            </div>
        </div>
    )
}

export default SinglePostpage