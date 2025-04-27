
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User } from "./models";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
  callbacks: {
    async signIn({user, account, profile}){
        if(account.provider === "github"){
            connectToDb();
            try{
                const user = await User.findOne({email: profile.email});

                if(!user){
                    const newUser = new User({
                        username: profile.name,
                        email: profile.email,                     
                    });
                    await newUser.save();
                }
            }catch(err){
                console.log(err);
                return false;
            }
        }
        return true;
    }
  }
});