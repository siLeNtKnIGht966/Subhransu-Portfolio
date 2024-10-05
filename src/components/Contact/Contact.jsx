import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState(""); // Added state to track form submission result

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "3d461cb7-43b9-4846-99be-fa27b21723ad"); // Ensure this is the correct key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Reset form upon successful submission
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong, please try again.");
      }
    } catch (error) {
      console.log("Network Error", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contactme" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk.</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            contact me for any projects.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>subhransujena2468@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call" />
              <p>+919556995351</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Talcher, Odisha, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>

      {/* Display result message */}
      {result && <div className="form-result">{result}</div>}
    </div>
  );
};

export default Contact;
