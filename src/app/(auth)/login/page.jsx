'use client'; 

import { signIn } from "next-auth/react";

const LoginPage =  () => {
    const handleGitLogin = () => {
        signIn('github',{ callbackUrl: '/' , redirect: true});     
    }
  return (
    <div>
      <button
        onClick={handleGitLogin}
      >
        Continue with GitHub
      </button>
    </div>
  );
};

export default LoginPage;