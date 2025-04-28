'use client'; 
import { login, handleGitLogin } from '../../../lib/authAction';

const LoginPage =  () => {
  
  
  return (
    <div>
      <button
        onClick={handleGitLogin}
      >
        Continue with GitHub
      </button>
      <form action={login} >
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login with Credentials</button>
    </form>
    </div>
  );
};

export default LoginPage;