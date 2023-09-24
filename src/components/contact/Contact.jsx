import "./contact.css";

import React from "react";

import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {
 
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>benav994@gmail.com</h5>
          </article>
        </div>
        <form action="https://formsubmit.co/benav994@gmail.com" method="POST">
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email Address"
            required
          />

          <textarea
            placeholder="Your Message"
            class="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
