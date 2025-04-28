"use client"
import { register } from '../../lib/action';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom';
import styles from './registerForm.module.css';

const RegisterForm = () => {
    const [ state, formAction ] = useFormState(register, undefined);

    const router = useRouter();
    useEffect(() => (
        state?.success && router.push('/login')
    ),[state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
        <input type="text" placeholder='Username' name='username'/>
        <input type="email" name="email" placeholder='Email' />
        <input type="password" name="password" placeholder='Password' />
        <input type="password" name="repeatPassword" placeholder='Confirm Password' />
        <button>Register</button>
        <p className={styles.errorText}>{state?.error}</p>
        <Link href="/login">Have an account? <b>login</b></Link>
    </form>
  )
}

export default RegisterForm