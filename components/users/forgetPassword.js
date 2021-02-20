import Layout from '../layout/layout';

import {forgetPasswordRoute} from '../../router/router';
import {useState} from 'react';

function forgetPassword() {
  const [email, setEmail] = useState();

  const inputHandler = (event) => {
    setEmail({...email, [event.target.name]: event.target.value});
  };

  const forgetPasswordHandler = () => {
    forgetPasswordRoute(email).then((result) => {
      console.log(result);
    });
  };

  console.log(email);

  return (
    <Layout>
      <div className="row">
        <div className="col-12 container mx-auto d-block ">
          <h2 className="text-center mb-2 ">Forget password</h2>
          <p>enter your email id here, i will send you the wizard </p>
          <input
            className="w-25"
            type="text"
            name="email"
            placeholder="email"
            onChange={inputHandler}
          />
        </div>
        <div className="col-12 mt-3 ">
          <button
            className="btn btn-success"
            type="button"
            onClick={forgetPasswordHandler}
          >
            {' '}
            send{' '}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default forgetPassword;
