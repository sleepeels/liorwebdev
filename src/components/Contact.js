import StarsReview from "./partials/StarsReview";
import UnderConst from "./partials/UnderConst";
import "./Contact.css";
import { useEffect } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    document.title = "Liorwebdev: Contact";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "liorwebdev-react",
        "template_xz6qywg",
        e.target,
        "user_iOqFHO61rrNVP9fuSKhx6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <form autoComplete="off" id="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="name" required />
        <input type="email" name="email" placeholder="email" required />
        <input type="text" name="subject" placeholder="subject" required />
        <input type="text" name="message" placeholder="message" required />
        <button type="submit">send message</button>
      </form>
    </section>
  );
};

export default Contact;
