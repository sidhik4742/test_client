import {useEffect, useState} from 'react';

import Layout from '../layout/layout';
import Styles from '../../styles/signup.module.css';
import {signupRoute} from '../../router/router';

function signup() {
  const [setup, setSetup] = useState(1);
  const [userDetails, setUserDetails] = useState();
  const [dp, setDp] = useState();

  const inputHandler = (event) => {
    setUserDetails({...userDetails, [event.target.name]: event.target.value});
  };

  const uploadImage = (event) => {
    console.log('Upload image');
    let type = event.target.files[0].type;
    if (type === 'image/jpeg' || type === 'image/jpg') {
      setup(event.target.files[0]);
      setProfilePic(URL.createObjectURL(event.target.files[0]));
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('profilePic', dp);
    formData.append('dealerSignupData', userDetails);
    submitForm(formData).then((result) => {
      console.log(result);
    });
  };

  console.log(userDetails);

  return (
    <Layout>
      <div className="container">
        <form onSubmit={submitForm}>
          {setup === 1 ? (
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
              </div>
              <button
                type="button"
                className="btn btn-success w-25 mx-auto d-block "
                onClick={() => setSetup(2)}
              >
                Next
              </button>
            </div>
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
                    onChange={inputHandler}
                  />
                </div>
                <div className="col-2 col-md-2 mt-5 ">
                  <button type="button" className="btn btn-success ">
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
