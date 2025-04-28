"use server"
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from 'bcryptjs';
import { signIn } from "./auth";

export const addPost = async (formData) => {
    const { title, desc, slug, userId} = Object.fromEntries(formData);
    try{
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        await newPost.save();
        console.log("Save to DB");
        revalidatePath("/blog")
    } catch(err){
        console.log(err);
        return{ error: "Something went wrong."};
    }
}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try{
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted from DB");
        revalidatePath("/blog")
    } catch(err){
        console.log(err);
        return{ error: "Something went wrong."};
    }
}

export const register = async (formData) => {
    const { username, email, password, repeatPassword } = Object.fromEntries(formData);
    
    if(password !== repeatPassword){
        return "passwords do not match";
    }

    try{
        connectToDb();

        const user = await User.findOne({username});

        if(user){
            return "Username already exists";
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username, 
            email,
            password: hashedPassword
        })
    await newUser.save();
        console.log("Save to DB");
    }catch(error){
        console.log(error);
        return {error: "Something went wrong"};
    }
}


