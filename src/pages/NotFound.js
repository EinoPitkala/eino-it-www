import React from "react";
import Button from "../modules/Button";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not found - Eino IT</title>
      </Helmet>
      <div className="not-found">
        <h1>404 - not found</h1>
        <p>Oletko hukassa? Pääset kotisivulle alla olevasta napista</p>
        <Button buttonText="Kotiin" url="/" />
      </div>
    </>
  );
}
