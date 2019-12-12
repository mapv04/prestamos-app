import React from 'react';
import { Link } from 'react-router-dom';

function FormButton(props) {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <Link to={props.to} className="w-full">
        <button
          className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          {props.text}
        </button>
      </Link>
    </div>
  );
}

export default FormButton;
