import React from 'react';

function FormInput(props) {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block font-bold mb-2 text-sm">
        {props.text}
      </label>
      <input
        type={props.type}
        id={props.id}
        className={props.class}
        placeholder={props.text}
      />
    </div>
  );
}

export default FormInput;
