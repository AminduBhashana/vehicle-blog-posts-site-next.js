import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '../../../components/postUser/PostUser'
import { Suspense } from 'react';
import { getPost } from '../../../lib/data';

//FETCH DATA WITH AN API

// const getPostData = async (slug) => {
//     const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//     if(!res.ok){
//         throw new Error("Something went wrong!");
//     }

//     return res.json();
// }

const SinglePostpage = async ({params}) => {
    const {slug} = params;
    //FETCH DATA WITH AN API
    //const post = await getPostData(slug);

    //FETCH DATA WITHOUT AN API
    const post = await getPost(slug);
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
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    <Image 
                        className={styles.avatar}
                        src='/avatar.png'
                        width={50}
                        height={50}
                        alt='avatar' />
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId = {post.userId}/>
                    </Suspense>    
                    )}                                
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.04.2025</span>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePostpage