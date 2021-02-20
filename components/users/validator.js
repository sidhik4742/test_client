export const formValidator = (data) => {
  let errMsg = {
    status: true,
  };
  if (data.firstName === '') {
    errMsg.firstName = 'first name should be non-empty';
    errMsg.status = false;
  }
  if (data.lastName === '') {
    errMsg.lastName = 'last name should be non-empty';
    errMsg.status = false;
  }
  if (data.password.length <= 3 && data.password.length >= 8) {
    errMsg.password = 'password length should be in the limit';
    errMsg.status = false;
  }
  if (data.c_password !== data.password) {
    errMsg.c_password = 'passwords must be equal';
    errMsg.status = false;
  }
  if (data.email === '') {
    errMsg.email = 'email should be valid';
    errMsg.status = false;
  }
  if (data.phone.length !== 10) {
    errMsg.phone = 'phone number should be valid';
    errMsg.status = false;
  }
  if (data.city === '') {
    errMsg.city = 'city should be non-empty';
    errMsg.status = false;
  }
  if (data.country === '') {
    errMsg.country = 'country should be non-empty';
    errMsg.status = false;
  }
  if (data.age === 0) {
    errMsg.age = 'age should be non-empty';
    errMsg.status = false;
  }
  if (data.employeeId === '') {
    errMsg.employeeId = 'employeeId should be non-empty';
    errMsg.status = false;
  }
  return errMsg;
};
