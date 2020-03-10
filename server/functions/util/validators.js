/*
Helper functions
*/

const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

const isUndefined = input => {
  if (input === undefined) return true;
  else return false;
};

const isEmail = email => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

const isPhoneNumber = phoneNumber => {
  const RegEx = /^\d{11,12}$/; // tests for cases without a "+"" in front phone number followed by 11-12 digits (ex. 385981234567)
  if (phoneNumber.match(RegEx)) return true;
  else return false;
};

const isSlug = slug => {
  const RegEx = /^(([a-z0-9]*)-?)*$/;
  if (slug.match(RegEx)) return true;
  else return false;
};

/*
Main validators
*/

exports.hasProperties = (obj, props) => {
  /* Checks if an object has all properties provided in an array
  Example usage: 
  Verify if request's body has all the required properties/fields.

  Input: 
  obj > object: object to be tested
  props > array: properties to check against

  Output:
  object.reqErrors > object: returns all found errors
  object.validReq > boolean: returns true if there are no errors
  */

  let reqErrors = {};

  props.forEach(prop => {
    if (isUndefined(obj[prop])) {
      reqErrors[prop] = `Must not be undefined.`;
    }
  });
  return {
    reqErrors,
    validReq: Object.keys(reqErrors).length === 0 ? true : false
  };
};

exports.validateSignupData = data => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Must not be empty.";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email address.";
  }
  if (isEmpty(data.password)) errors.password = "Must not be empty.";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords must match";
  if (isEmpty(data.userHandle)) errors.userHandle = "Must not be empty.";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateLoginData = data => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Must not be empty.";
  if (isEmpty(data.password)) errors.password = "Must not be empty.";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateStoryData = data => {
  let errors = {};

  if (isEmpty(data.body)) errors.body = "Must not be empty.";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateGuestData = data => {
  let errors = {};

  if (isEmpty(data.firstName)) errors.firstName = "Must not be empty.";
  if (isEmpty(data.lastName)) errors.lastName = "Must not be empty.";
  if (isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Must not be empty.";
  } else if (!isPhoneNumber(data.phoneNumber)) {
    errors.phoneNumber =
      "Phone number is not in correct format: 11 to 12 digits without spaces and special characters.";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.phoneNumberFormatter = phoneNumber => {
  const RegEx = /(^\+)|(\s|\(|\)|-+)/g; // Removes all whitespace, "-", "(", ")" and "+" characters
  return phoneNumber.replace(RegEx, "");
};

exports.validateEventData = data => {
  let errors = {};

  if (isEmpty(data.name)) errors.name = "Must not be empty.";
  if (isEmpty(data.type)) errors.type = "Must not be empty.";
  if (isEmpty(data.slug)) {
    errors.slug = "Must not be empty.";
  } else if (!isSlug(data.slug)) {
    errors.slug =
      "Must be in slug format. (No whitespace, '-' and numbers allowed) ";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.reduceUserDetails = data => {
  let userDetails = {};

  if (!isEmpty(data.bio)) userDetails.bio = data.bio;
  if (!isEmpty(data.website)) {
    if (data.website.trim().substring(0, 4) !== "http") {
      userDetails.website = `http://${data.website.trim()}`;
    } else userDetails.website = data.website;
  }
  if (!isEmpty(data.location)) userDetails.location = data.location;

  return userDetails;
};
