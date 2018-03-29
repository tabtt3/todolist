import React from 'react';

export default function Card(props) {
  return(
    <div className="card">
      <div className="title">{props.title}</div>
      <div className="detail">{props.detail}</div>
      <div>{props.status}</div>
    </div>
  )
}
