import React from "react";
import Card from "../modules/Card";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="contacts">
      <h1>Yhteystiedot</h1>
      <div className="contacts-cards">
        <Card icon={<FaPhone />} title="Puhelinnumero" content={<a className="contact-link" href="phone:0442008211">0442008211</a>} />
        <Card icon={<FaEnvelope />} title="Sähköposti" content={<a className="contact-link" href="mailto:eino@eino-it.fi">eino@eino-it.fi</a>} />
        <Card icon={<FaPhone />} title="Puhelinnumero" content="044 200 8211" />
        <Card icon={<FaPhone />} title="Puhelinnumero" content="044 200 8211" />
      </div>
    </div>
  );
}
