import { signIn } from "next-auth/react";

export const handleGitLogin = () => {
    signIn('github',{ callbackUrl: '/' , redirect: true});     
}

export const login = async (formData) => {
const { username, password } = Object.fromEntries(formData);

try{
    await signIn("credentials", { username, password });
}catch(error){
    console.log(error);
    return {error: "Something went wrong"};
}
}