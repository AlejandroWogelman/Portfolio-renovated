import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-title" id="contact">
        contact
      </h2>
      <div className="contact-mail">
        <a href="mailto:alehellamn@gmail.com">alehellamn@gmail.com</a>
      </div>
      <ul className="ul-nav">
        <li>
          <a
            href="https://github.com/AlejandroWogelman?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alejandrowogel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BvtBYjh%2FQrCJ4tOULZ7mag%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/AlejandroWogel/"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};
