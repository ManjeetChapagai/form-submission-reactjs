import React from "react";

export default function validate(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First Name required";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Last Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid Email";
  }

  if (!values.password.trim()) {
    errors.password = "Password required";
  } else if (values.password.length < 5) {
    errors.password = "Password must be 5 character or more";
  }
  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = "Password required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password must match";
  }
  return errors;
}
