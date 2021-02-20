import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {nanoid} from 'nanoid';

import Layout from '../layout/layout';
import Styles from '../../styles/signup.module.css';
import {signupRoute} from '../../router/router';
import {formValidator} from './validator';

function signup() {
  const statusRef = useRef();

  const [setup, setSetup] = useState(1);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    password: '',
    c_password: '',
    email: '',
    phone: 0,
    city: '',
    country: '',
    age: 0,
    employeeId: '',
  });
  const [dp, setDp] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [employeeId, setEmployeeId] = useState();

  const inputHandler = (event) => {
    setUserDetails({...userDetails, [event.target.name]: event.target.value});
  };

  const uploadImage = (event) => {
    console.log('Upload image');
    console.log(event.target.files[0]);
    let type = event.target.files[0].type;
    if (type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png') {
      setDp(event.target.files[0]);
      //   setProfilePic(URL.createObjectURL(event.target.files[0]));
    }
  };

  const genarateIdHndler = () => {
    setEmployeeId(nanoid());
    setUserDetails({...userDetails, employeeId: nanoid()});
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log('inside submit handler');
    let formData = new FormData();
    let result = formValidator(userDetails);
    console.log(result);
    setErrorMsg(result);
    if (result.status) {
      console.log(userDetails);
      console.log(dp);
      formData.append('pic', dp);
      formData.append(
        'formData',
        JSON.stringify({
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          password: userDetails.password,
          c_password: userDetails.c_password,
          email: userDetails.email,
          phone: userDetails.phone,
          city: userDetails.city,
          country: userDetails.country,
          age: userDetails.age,
          employeeId: userDetails.employeeId,
        })
      );
      console.log(formData.get('pic'));
      signupRoute(formData).then((result) => {
        console.log(result);
        statusRef.current.innerHTML = result.msg;
      });
    }
  };

  console.log(employeeId);

  return (
    <Layout>
      <div className={`container ${Styles.parent} `}>
        <form onSubmit={submitForm}>
          {setup === 1 ? (
            <>
              <div className="form-row">
                <div className="col-12 col-md-12 ">
                  <div className={Styles.img_div}>
                    <label htmlFor="uploadImage">
                      <img
                        className={Styles.image}
                        // onClick={profilePicture}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJZTUP6x0wf971Bz8Y2Y0nrllmqbhqtRp4w&usqp=CAU"
                        alt=""
                      />
                    </label>
                    <input
                      type="file"
                      id="uploadImage"
                      onChange={uploadImage}
                      style={{display: 'none'}}
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    id="inputEmail4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="firstName">
                    {errorMsg ? errorMsg.firstName : null}
                  </p>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    id="inputPassword4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="lastName">
                    {errorMsg ? errorMsg.lastName : null}
                  </p>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="inputEmail4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="password">
                    {' '}
                    {errorMsg ? errorMsg.password : null}{' '}
                  </p>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Confirm Password</label>
                  <input
                    type="password"
                    name="c_password"
                    className="form-control"
                    id="inputPassword4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="c_password">
                    {' '}
                    {errorMsg ? errorMsg.c_password : null}{' '}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-success w-25 mx-auto d-block "
                  onClick={() => setSetup(2)}
                >
                  Next
                </button>
              </div>
              <div className="col-12 col-md-12  ">
                <p className="text-center" style={{color: 'black'}}>
                  You have an account{' '}
                  <Link href="/">
                    <u style={{color: '#f1c40f', cursor: 'pointer'}}>
                      Click Here!
                    </u>
                  </Link>
                </p>
              </div>
            </>
          ) : null}
          {setup === 2 ? (
            <>
              <div className="row mt-5 ">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="inputEmail4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="email">
                    {' '}
                    {errorMsg ? errorMsg.email : null}{' '}
                  </p>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    id="inputPassword4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="phone">
                    {' '}
                    {errorMsg ? errorMsg.phone : null}{' '}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-5">
                  <label htmlFor="inputEmail4">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    id="inputEmail4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="city">
                    {' '}
                    {errorMsg ? errorMsg.city : null}{' '}
                  </p>
                </div>
                <div className="form-group col-md-5">
                  <label htmlFor="inputPassword4">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    id="inputPassword4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="country">
                    {' '}
                    {errorMsg ? errorMsg.country : null}{' '}
                  </p>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputPassword4">Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    id="inputPassword4"
                    onChange={inputHandler}
                  />
                  <p className="error" id="age">
                    {' '}
                    {errorMsg ? errorMsg.age : null}{' '}
                  </p>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-10 mt-3 ">
                  <label htmlFor="inputPassword4">Employee ID</label>
                  <input
                    type="text"
                    name="employeeId"
                    className="form-control"
                    id="inputPassword4"
                    value={userDetails.employeeId}
                    onChange={inputHandler}
                  />
                  <p className="error" id="employeeId">
                    {' '}
                    {errorMsg ? errorMsg.employeeId : null}{' '}
                  </p>
                  <p className="text-center text-danger " ref={statusRef}>
                    {' '}
                  </p>
                </div>
                <div className="col-2 col-md-2 mt-5 ">
                  <button
                    type="button"
                    className="btn btn-success "
                    onClick={genarateIdHndler}
                  >
                    Generate
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success w-25 mx-auto d-block"
              >
                Sign in
              </button>
            </>
          ) : null}
        </form>
      </div>
    </Layout>
  );
}

export default signup;
