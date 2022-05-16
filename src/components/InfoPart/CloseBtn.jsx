import React from 'react';
import "./InfoPart.css";

function CloseBtn(props) {
  return (
    <button className='close-btn' onClick={props.closeBtnHandler}>
      <span className='hide-it'>{props.key}</span>
      <i class='bx bx-x'></i>
    </button>
  )
}

export default CloseBtn
