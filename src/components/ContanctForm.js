import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_MAIL_SERVICE_KEY,
        process.env.REACT_APP_MAIL_TEMPLATE_KEY,
        form.current,
        process.env.REACT_MAIL_PUB_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();
  return (
    <div className="contact-form">
      <h1>Ota yhteyttä</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nimi</label>
        <input type="text" name="user_name" placeholder="Nimi" />
        <label>Sähköposti</label>
        <input type="email" name="user_email" placeholder="Sähköposti" />
        <label>Viesti</label>
        <textarea name="message" />
        <input type="submit" value="Lähetä" />
      </form>
    </div>
  );
}
