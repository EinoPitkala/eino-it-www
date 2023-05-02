import React from "react";
import Card from "../modules/Card";
import { FaPhone, FaEnvelope, FaFacebookMessenger } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="contacts">
      <h1>Yhteystiedot</h1>
      <div className="contacts-cards">
        <Card icon={<FaPhone />} title="Puhelinnumero" content={<a className="contact-link" href="phone:0442008211">0442008211</a>} />
        <Card icon={<FaEnvelope />} title="Sähköposti" content={<a className="contact-link" href="mailto:eino@eino-it.fi">eino@eino-it.fi</a>} />
        <Card icon={<FaFacebookMessenger />} title="Messenger" content={<a className="contact-link" href="https://m.me/eino.it">m.me/eino-it</a>} />
      </div>
    </div>
  );
}
