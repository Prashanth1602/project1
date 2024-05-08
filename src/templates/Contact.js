import React from "react";

function Contact() {
  
  return (
    <div className="container">
      <h1 >Contact</h1>
      <div className="input-group"></div>
      <span className="input-group-text">First and last name</span>
      <input type="text" aria-label="First name" className="form-control" />
      <input type="text" aria-label="Last name" className="form-control" />
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-danger"
          
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
