import React from 'react'

export default function Task(props) {

  if (props.statusCode == 99) {
    return(
      <div>
        <strike>{props.title}</strike>
      </div>
    )
  }

  return(<div>{props.title}</div>)
}

