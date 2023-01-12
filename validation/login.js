
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  // if (!Validator.isEmail(data.email)) {
  //   errors.email = 'Email is invalid';
  // }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Please enter your Rock-N-Roll username or email address';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Please enter Rock-N-Roll your password';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};