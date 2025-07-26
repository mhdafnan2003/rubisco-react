import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // Create a ref for the form element
  const form = useRef();

  // State to manage the status message (e.g., "Sending...", "Sent!", "Error")
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    setStatusMessage("Sending...");

    // Replace with your actual IDs from your EmailJS account
    const serviceID = 'service_famszz8';
    const templateID = 'template_y5ky4zi';
    const publicKey = 'YIYqwgs0GMz0qZ6GX';

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          form.current.reset(); // Reset the form fields after successful submission
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section pb-100" id='contact'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Get In Touch</span>
              <h2>Send Us Message</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-area wow fadeInUp">
              {/* Add the ref and onSubmit handler to the form */}
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form_control"
                        name="name" // This 'name' must match the template variable {{name}}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="form_control"
                        name="number" // Matches {{number}}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form_control"
                        name="email" // Matches {{email}}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input
                        type="url"
                        placeholder="Website"
                        className="form_control"
                        name="website" // Matches {{website}}
                        
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group">
                      <textarea
                        name="message" // Matches {{message}}
                        placeholder="Write Message"
                        className="form_control"
                        rows={6}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group text-center">
                      <button className="main-btn primary-btn">
                        Send Us Message
                        <i className="fas fa-paper-plane" />
                      </button>
                    </div>
                  </div>
                  {/* Display the status message to the user */}
                  {statusMessage && <p className="text-center mt-3">{statusMessage}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;