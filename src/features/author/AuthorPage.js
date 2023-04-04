import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Dawid Zięba"
        body={
            <p>Dzień doberek,mam na imię Dawid.Aktualnie mam 26lat. <em>Pochodzę</em> ze śląska,ale
            bliżej mi do
            Poznania,gdzie tam
            ukończyłem studia na kierunku <b>Filologia Japońska</b> z poziomem licencjata.
            Obecnie pracuję w firmie spedycyjnej zajmującej się transportem <strong>krajowym.</strong>
        </p>
        }
      />
      </Container>
);