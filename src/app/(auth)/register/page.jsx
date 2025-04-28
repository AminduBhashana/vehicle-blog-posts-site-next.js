import { register } from '../../../lib/action'
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <form action={register} className={styles.form}>
                <input type="text" placeholder='Username' name='username'/>
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <input type="password" name="repeatPassword" placeholder='Confirm Password' />
                <button>Register</button>
            </form>
        </div>       
    </div>
  )
}

export default RegisterPage