// import StarsReview from "./partials/StarsReview";
// import UnderConst from "./partials/UnderConst";
import "./Contact.css";
import { useEffect, useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(true);

  useEffect(() => {
    document.title = "Liorwebdev: Contact";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS1,
        process.env.REACT_APP_EMAILJS2,
        e.target,
        process.env.REACT_APP_EMAILJS3
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setEmailSent(false);
        }
      );

    e.target.reset();
  };

  return (
    <>
      {emailSent ? (
        " "
      ) : (
        <h1>
          something went wrong :( <br /> please try again later..
        </h1>
      )}
      <section id="contact">
        <form autoComplete="off" id="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="name" required />
          <input type="email" name="email" placeholder="email" required />
          <input type="text" name="subject" placeholder="subject" required />
          <input type="text" name="message" placeholder="message" required />
          <button type="submit">send message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
