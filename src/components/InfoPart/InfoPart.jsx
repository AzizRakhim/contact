import React from 'react';
import "./InfoPart.css";
import "../FormPart/FormPart.css";
import BuildBtn from './BuildBtn';
import BuildContact from './BuildContact';

const btns = ["All", "Family", "Friends", "Colleagues"];

function InforPart (props) {
  return (
    <div className='info-part col-6'>
      <ul class="btn-groups d-flex align-items-center justify-content-between p-0 m-0">
        {btns.map((item, index) => (
          <BuildBtn 
            key={index} 
            btnType={item} 
            btnTypeHandlder={props.btnTypeHandlder}
            data={props.data} 
          />
        ))}
      </ul>
      <ul className="name-list m-0 p-0 d-flex flex-wrap">
        {props.data.map((item, index) => (
          <BuildContact 
            key={index} 
            data={item} 
            closeBtnHandler={() => props.closeBtnHandler(index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default InforPart;
