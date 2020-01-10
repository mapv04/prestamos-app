import React from 'react';

function SignupContainer(props) {
  return (
    <div className="pt-24 container mx-auto">
      <h1 className="text-center font-bold text-5xl text-pink-600 block">
        Registro
      </h1>
      <h2 className="text-center font-bold text-lg text-pink-400 block mb-4">
        {props.title}
      </h2>
      <div className="flex justify-center">
        <form className={props.formClassName}>{props.content}</form>
      </div>
    </div>
  );
}

export default SignupContainer;
