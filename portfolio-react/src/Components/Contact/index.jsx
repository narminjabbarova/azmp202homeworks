import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Get in <span>touch</span>
        </h2>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h3>Let's talk</h3>
            <p>
              I'm currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <ul>
              <li>Email: <a href="narminjabbar@gmail.com">narminjabbar@gmail.com</a></li>
              <li>Phone: +77 777777</li>
              <li>Location: Baku, Azerbaijan</li>
            </ul>
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Write your message here" required></textarea>
            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
