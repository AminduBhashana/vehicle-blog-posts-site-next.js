
import { signIn } from "next-auth/react";

export const login = async (prevState,formData) => {
const { username, password } = Object.fromEntries(formData);

try{
    await signIn("credentials", { username, password });
}catch(error){
    console.log(error);
    if(error.message.includes("CredentialsSignin")){
        return { error: "Invalid username or password"};
    }
    return {error: "Something went wrong"};
}
}