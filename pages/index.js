import Head from 'next/head'
import Login from '../components/users/login'
import styles from '../styles/Home.module.css'



function index() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default index;
