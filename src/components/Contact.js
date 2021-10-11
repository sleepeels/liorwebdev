import StarsReview from "./partials/StarsReview";
import UnderConst from "./partials/UnderConst";
import "./Contact.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    document.title = "Liorwebdev: Contact";
  }, []);

  return (
    <section id="contact">
      <UnderConst />
    </section>
  );
};

export default Contact;
