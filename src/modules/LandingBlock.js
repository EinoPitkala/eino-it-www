import Button from "./Button";



export default function LandingBlock() {
    return (
        <div className="landing-block">
            <h1 className="companyName">IT-Apua asiantuntevalta 14-vuotiaalta nuorelta yrittäjältä.</h1>
            <h2 className="marketing-word">Hanki mielenrauhaa laitteidesi toimintavarmuuteen. Valitse pienyrityksen apu. Tuet myös samalla nuoren pojan unelmia ja haaveita.</h2>
            <div className="button-row">
                <Button buttonText="Palvelut" url="https://google.com/"  />
                <Button buttonText="Lue lisää" url="https://google.com/"   />
            </div>
        </div>
    );
};