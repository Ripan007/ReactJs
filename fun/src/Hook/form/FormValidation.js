import React from "react";

export const FormValidation = () => {
  return (
    <>
      <form>
        <label htmlFor="name">name:</label>
        <br />
        <input type="text" placeholder="enter your name" />
        <br />
        <label htmlFor="email">email:</label>
        <br />
        <input type="email" placeholder="Enter your email" />
        <br />
        <label htmlFor="password">password:</label>
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <label htmlFor="confirmPassword">conformPassword</label>
        <br />
        <input type="password" placeholder="enter your conform password" />
        <br /> <br />
        <button>registration</button>
      </form>
    </>
  );
};

// * formik and yup offer an easy ,understandable and extensible  solution to handling and validating form in react and reactNative
