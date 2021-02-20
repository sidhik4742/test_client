import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import Layout from '../components/layout/layout';

import {newPasswordRoute} from '../router/router';

function newPassword() {
  const router = useRouter();

  const statusRef = useRef();

  const [newPassword, setNewPassword] = useState({
    password: '',
    c_password: '',
  });

  const inputHandler = (event) => {
    setNewPassword({...newPassword, [event.target.name]: event.target.value});
  };
  const newPasswordHandler = () => {
    let mailId = router.query ? router.query.email : null;
    if (mailId) {
      if (
        newPassword.password !== '' &&
        newPassword.password === newPassword.c_password
      ) {
        statusRef.current.innerHTML = '';
        let data = {
          password: newPassword.password,
          email: mailId,
        };
        newPasswordRoute(data).then((result) => {
          console.log(result);
          if (result.status === 200) {
            router.push('/');
          } else {
            statusRef.current.style.color = 'red';
            statusRef.current.innerHTML = result.msg;
          }
        });
      } else {
        console.log('password does not match');
        statusRef.current.style.color = 'red';
        statusRef.current.innerHTML = 'password does not match';
      }
    }
  };

  console.log(router.query.email);

  return (
    <Layout>
      <div className="row">
        <div className="col-12 container mx-auto d-block ">
          <h2 className="text-center mb-2 ">New password</h2>
          <input
            className="w-25"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={inputHandler}
          />
        </div>
        <div className="col-12 mt-3 mb-2 ">
          <input
            className="w-25"
            type="password"
            name="c_password"
            placeholder="Re-enter password"
            onChange={inputHandler}
          />
          <p ref={statusRef}></p>
        </div>
        <div className="col-12 mt-3 ">
          <button
            className="btn btn-success"
            type="button"
            onClick={newPasswordHandler}
          >
            {' '}
            send{' '}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default newPassword;
