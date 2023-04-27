import Button from "./Button";

export default function ContactAd() {
  return (
    <div className="contact-ad">
      <div className="contact-ad-container">
        <div className="contact-ad-text">
          <h1>Sattuisiko juuri sinulla olemaan nyt joku tarve minun apuuni?</h1>
          <p>
            Voimme alkaa sopimaan työtä heti vaikka sähköpostilla, Messenger
            viestillä, puhelimella, tekstiviestillä tai muulla tavalla. Eikö
            palvelua mitä etsit löydy hinnastostani? Hinnastooni lisään koko
            ajan paljon haluttuja palveluita, joten hinnastosta ei välttämättä
            aina löydy kaikkea. Joihinkin palveluihin on vaikea antaa kiinteää
            hintaa, joten hinta sovitaan erikseen tai veloitetaan tuntimaksulla.
          </p>
        </div>
        <div className="contact-buttons">
          <Button buttonText="Sähköposti" url="mailto:eino@eino-it.fi" />
          <Button buttonText="Messenger" url="m.me/eino.it" />
          <Button buttonText="Muut" url="/yhteystiedot" />
        </div>
      </div>
    </div>
  );
}
