"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom';
import styles from './loginForm.module.css';
import { login } from '../../lib/authAction';

const LoginForm = () => {
    const [ state, formAction ] = useFormState(login, undefined);

    const router = useRouter();
    // useEffect(() => (
    //     state?.success && router.push('/login')
    // ),[state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
        <input type="text" placeholder='Username' name='username'/>
        <input type="password" name="password" placeholder='Password' />
        <button>Login</button>
        <p className={styles.errorText}>{state?.error}</p>
        <Link href="/register">{"Don't Have an account? "}<b>Register</b></Link>
    </form>
  )
}

export default LoginForm