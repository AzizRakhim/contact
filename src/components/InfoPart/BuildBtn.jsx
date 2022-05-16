import React from 'react'

function BuildBtn(props) {
  return (
    <li className="btn-item col-3">
      <button className="sumbit-btn" onClick={props.btnTypeHandlder}>
        {props.btnType}
      </button>
    </li>
  )
}

export default BuildBtn
