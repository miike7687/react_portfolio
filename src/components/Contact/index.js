import React from "react";

const Contact = () => {
  return (
    <main class="container" id="contact-container">
      <h2>CONTACT</h2>
      <hr />
      {/* <!-- Create a form with area for user inputs: name, email, message --> */}
      <form class="contact-form">
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Type your full name here"
            onfocus="this.placeholder=''"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Type your email address here"
            onfocus="this.placeholder=''"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        {/* <!-- Create a submit button --> */}
        <button type="submit" class="btn btn-primary" id="submit-btn">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
