import React from "react";
import "./Contact.css"


const Contact = () => {
 
  return (
    <form className="form" id='contact'>
      <h1>Contact Us 📞</h1>

      <label><h4>Name</h4></label>
      <input placeholder="Name"/>

      <label><h4>Email</h4></label>
      <input placeholder="Email"/>

      <label><h4>Message</h4></label>
      <textarea placeholder="Message">
        </textarea>

      <button type="submit">Submit</button>
    </form>
  );
};


export default Contact;