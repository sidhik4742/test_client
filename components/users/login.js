import {useRef, useState} from 'react';
import Link from 'next/link';
import router, {useRouter} from 'next/router';

import Layout from '../layout/layout';
import Styles from '../../styles/login.module.css';

import {loginRoute} from '../../router/router';

function login() {
  const router = useRouter();

  const authStatusRef = useRef();

  const [loginCredentials, setLoginCredentials] = useState();

  const formSubmitHandler = (event) => {
    loginRoute(loginCredentials).then((result) => {
      if (result.status === 200) {
        console.log(result.msg);
        router.push('/landing');
      } else {
        console.log(result.msg);
        authStatusRef.current.innerHTML = result.msg;
      }
    });
  };
  const inputHandler = (event) => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  };
  console.log(loginCredentials);
  return (
    <Layout>
      <div>
        <form className={Styles.form}>
          <div className={Styles.box}>
            <h1>Dashboard</h1>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={inputHandler}
              className={Styles.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={inputHandler}
              className={Styles.email}
              required
            />
            <p style={{color: 'red'}} ref={authStatusRef}></p>
            <a onClick={formSubmitHandler}>
              <div className={Styles.btn}>Sign In</div>
            </a>{' '}
            <a>
              <Link href="/signup">
                <div id={Styles.btn2}>Sign Up</div>
              </Link>
            </a>{' '}
          </div>{' '}
        </form>
        <p>
          Forgot your password?{' '}
          <Link href="/forgetPassword">
            <u style={{color: '#f1c40f', cursor: 'pointer'}}>Click Here!</u>
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default login;
