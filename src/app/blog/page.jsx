import styles from './blog.module.css'
import PostCard from '../../components/postCard/postCard'
import {getPosts} from '../../lib/data'

//FETCH DATA WITH AN API

const getData = async () => {
    const res =  await fetch("http://localhost:3000/api/blog");

    if(!res.ok){
        throw new Error("Something went wrong!");
    }

    return res.json();
}

const BlogPage = async () => {
    //FETCH DATA WITH AN API
    const posts = await getData();

    //FETCH DATA WITHOUT AN API
    //const posts = await getPosts();
    return(
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post}>
                    <PostCard post={post} key={post.id}/>
            </div>  
            ))}     
        </div>
    )
}

export default BlogPage