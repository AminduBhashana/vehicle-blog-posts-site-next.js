import { connectToDb } from './utils';
import { Post, User } from './models';
// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Mike"}
// ];

// const posts = [
//     {id: 1, title: "Post 1", body: "This is my post 1", userId: 1},
//     {id: 2, title: "Post 2", body: "This is my post 2", userId: 1},
//     {id: 3, title: "Post 3", body: "This is my post 3", userId: 2},
//     {id: 4, title: "Post 4", body: "This is my post 4", userId: 2},
// ];

export const getPosts = async () => {
    try{
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch(err){
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
};

export const getPost = async (slug) => {
    try{
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch(err){
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
}

export const getUser = async (id) => {
    try{
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch(err){
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
}

export const getUsers = async () => {
    try{
        connectToDb();
        const users = await User.find();
        return users;
    } catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
}