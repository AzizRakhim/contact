import React from 'react'
import "./Layout.css";

function Layout(props) {
  return (
    <div className='main d-flex'>
      {props.children}
    </div>
  )
}

export default Layout
