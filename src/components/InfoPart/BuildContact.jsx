import React from 'react';
import CloseBtn from './CloseBtn';

function BuildContact(props) {
  const {name, surname, number, relation} = props.data;
  return (
    <li className="name-item col-6 position-relative">
      <div className="cover">
        <p className="name-text">
          {name} {surname}
        </p>
        <p className="joint">
          {relation}
        </p>
        <a href="tel:+998950113633">
          {number}
        </a>
        <CloseBtn 
          closeBtnHandler={props.closeBtnHandler}  
        />
      </div>
    </li>
  )
}

export default BuildContact;
