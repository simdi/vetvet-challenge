import React from 'react'

export default function Button(props) {
  const {
    btnType,
    children
  } = props;

  return (
    <button className={`btn ${btnType}`}>
      { children }
    </button>
  )
}
