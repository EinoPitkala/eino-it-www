import LandingBlock from "../components/LandingBlock";
import WhyChoose from "../components/WhyChoose";
import OpinionsGrid from "../components/OpinionsGrid";
import ContactAd from "../components/ContactAd";
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
