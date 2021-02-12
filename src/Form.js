import React, { useState } from "react";
import { FormSuccess } from "./FormSuccess";
import { FormSignUp } from "./FormSignUp";

export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
};
