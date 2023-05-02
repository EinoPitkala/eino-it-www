import Contacts from "../components/Contacts";
import { Helmet } from "react-helmet";

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Yhteystiedot - Eino IT</title>
      </Helmet>
      <Contacts />
      <h3>Yhteydenottolomake tulossa!</h3>
    </>
  );
}
