import LandingBlock from "../modules/LandingBlock";
import WhyChoose from "../modules/WhyChoose";
import OpinionsGrid from "../modules/OpinionsGrid";
import ContactAd from "../modules/ContactAd";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Eino IT - Etusivu</title>
      </Helmet>
      <LandingBlock />
      <WhyChoose />
      <OpinionsGrid />
      <ContactAd />
    </>
  );
}
