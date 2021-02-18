import {useState} from 'react';
import Link from 'next/link';

import Layout from '../layout/layout';
import Styles from '../../styles/login.module.css';

import {loginRoute} from '../../router/router';

function login() {
  const [loginCredentials, setLoginCredentials] = useState();

  const formSubmitHandler = (event) => {
    loginRoute(loginCredentials).then((result) => {
      if (result.status === 200) {
        console.log(result.msg);
      } else {
        console.log(result.msg);
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
            <a onClick={formSubmitHandler}>
              <div className={Styles.btn}>Sign In</div>
            </a>{' '}
            <a>
              <Link href='/signup' >
                <div id={Styles.btn2}>Sign Up</div>
              </Link>
            </a>{' '}
          </div>{' '}
        </form>
        <p>
          Forgot your password? <u style={{color: '#f1c40f'}}>Click Here!</u>
        </p>
      </div>
    </Layout>
  );
}

export default login;
