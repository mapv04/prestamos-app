import React from 'react';

import Container from '../components/Container';

const About = () => (
  <Container
    content={
      <div className="mx-auto container pt-24 text-center">
        <h1 className="text-5xl text-pink-600 block">
          <strong>Misión</strong>
        </h1>
        <p className="text-2xl">
          En Atenas nos apasionan ayudar a las pequeñas y medianas empresas a
          crecer, por eso ofrecemos créditos para mujeres que han sido excluidas
          del sistema financiero mexicano.
        </p>
        <h1 className="text-5xl text-pink-600 block">
          <strong>Visión</strong>
        </h1>
        <p className="text-2xl">
          Evolucionar la inclusión de las mujeres en el sistema financiero
          convirtiéndonos en una de las mejores fintechs en México.
        </p>
      </div>
    }
  />
);

export default About;
