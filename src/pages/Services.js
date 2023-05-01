import ServicesHeader from "../components/ServicesHeader";
import { Helmet } from "react-helmet";
import ItemCards from "../components/ItemCards";
export default function Services() {
  return (
    <>
      <Helmet>
        <title>Palvelut - Eino IT</title>
      </Helmet>
      <ServicesHeader />
      <ItemCards />
    </>
  );
}
