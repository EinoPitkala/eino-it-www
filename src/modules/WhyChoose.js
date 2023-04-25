import { FaCreditCard, FaPeopleArrows } from 'react-icons/fa';

import Card from './Card';
export default function WhyChoose() {
    return (
        <div className="why-choose">
            <h2>Saatat kysyä itseltäsi; miksi valitsisin juuri Eino IT:n palvelut?</h2>
            <div className="why-choose-cards">
                <Card
                    icon={<FaCreditCard />}
                    title="Hinta-laatusuhde"
                    content="Tarjoan palveluitani edullisesti ja laadukkaasti. Olen nuori ja innokas yrittäjä, joka haluaa tarjota asiakkailleen parasta mahdollista palvelua."
                />
                <Card
                    icon={<FaPeopleArrows />}
                    title="Luotettavuus"
                    content="Olen luotettava ja rehellinen yrittäjä, joka haluaa tarjota asiakkailleen parasta mahdollista palvelua. Olen ainut yrityksen työntekijä, joten saat aina minun palvelukseni."
                />
            </div>
        </div>
    )
}