import ServicesHeader from "../modules/ServicesHeader";
import { Helmet } from "react-helmet";
import ItemCards from "../modules/ItemCards";
export default function Services() {
  return (
    <>
      <Helmet>
        <title>Eino IT - Palvelut</title>
      </Helmet>
      <ServicesHeader />
      <ItemCards />
    </>
  );
}
