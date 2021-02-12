import React from "react";
import useForm from "./useForm";
import validate from "./validate.js";

export const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="abc">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="form-control">
          <label htmlFor="firstName" className="form-label">
            FirstName:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            placeholder="enter first name"
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="lastName" className="form-label">
            LastName:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="enter last name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="enter email"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="confirm password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="confirm password"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
