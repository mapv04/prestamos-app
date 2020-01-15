import React from 'react';

import ModalLink from '../ModalLink';

function PhoneCodeModal(props) {
  return (
    <ModalLink
      to={props.to}
      isOpen={props.isOpen}
      onCloseModal={props.onCloseModal}
    >
      <h1 className="text-2xl text-pink-500 font-bold text-center">
        Registro Existoso
      </h1>
      Te hemos enviado un mensaje de texto a tu celular. Para seguir con el
      proceso descarga la app y da acceso a la app para analizar tu celular.
      Puedes consultar nuestro aviso de privacidad{' '}
      <span className="cursor-pointer text-pink-500 border-b-2 border-transparent hover:border-pink-700 hover:text-pink-700">
        aquí
      </span>
    </ModalLink>
  );
}

export default PhoneCodeModal;
