import React from 'react';
import "./FormPart.css";
import "../InfoPart/InfoPart.css";

function FormPart(props) {
  return (
    <div className='form-part col-6'>
      <form class="form-group" onSubmit={props.submitHandler}>
        <div>
          <h2 className="form-title">
            Contact
          </h2>
          <div className="holder">
            <label htmlFor="first-name" className="label-group">
              First name:
            </label>
            <input id="first-name" type="text" className="form-control" name="first-name" placeholder="Aziz" onChange={props.inputNameHandler} required />
          </div>
          <div className="holder">
            <label htmlFor="last-name" className="label-group">
              Last name:
            </label>
            <input id="last-name" type="text" className="form-control" name="last-name" placeholder="Rakhim" onChange={props.inputSurnameHandler} required />
          </div>
          <div className="holder">
            <label htmlFor="phone" className="label-group">
              Phone:
            </label>
            <input id="phone" type="tel" className="form-control" name="phone" placeholder="+998 95 011 36 33" onChange={props.inputPhoneHandler} required />
          </div>
          <div className="holder d-flex align-items-center">
            <label htmlFor="relationship" className="label-group r-label w-50">
              Relationship:
            </label>
            <select name="relationship" id="relationship" className="select-option w-50" onChange={props.inputRelationHandler}>
              <option value="family" selected>
                Family
              </option>
              <option value="friend">
                Friend
              </option>
              <option value="colleague">
                Collegue
              </option>
            </select>
          </div>
          <button className="sumbit-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormPart
