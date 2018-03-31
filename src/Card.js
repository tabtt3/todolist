import React from 'react';

export default function Card(props) {
  return(
    <div className="card">
      <input
        type="checkbox"
        checked={props.checked}
        onClick={props.onClick}
      ></input>

      <div className="title">{props.title}</div>
      <div className="detail">{props.detail}</div>
      <div>{props.status}</div>
    </div>
  )
}
