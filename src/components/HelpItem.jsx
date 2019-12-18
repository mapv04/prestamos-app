import React from 'react';

function HelpItem(props) {
  return (
    <div>
      <div className={props.classTitleContainer} onClick={props.onClickHandler}>
        <h3 className={props.classTitle}>{props.title}</h3>
      </div>
      <ul className={props.classUl}>
        <li>{props.text}</li>
      </ul>
    </div>
  );
}

export default HelpItem;
