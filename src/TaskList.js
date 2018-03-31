import React from 'react'
import Task from './Task'
import Button from './Button'

export default function TaskList(props) {

  const TaskList = props.tasks.map( task =>
    <div>
      <Task
        title={task.title}
        statusCode={task.statusCode}
      />

      <Button
        onClick={ () => props.transitionStatus(task.statusCode)}
        status={nextStatus(task.statusCode)}
      />
    </div>
  )

  return(<ul>{TaskList}</ul>)
}

function nextStatus(currentStatus) {
  switch(currentStatus) {
    case 0:
      return '作業を始める'
    case 10:
      return '作業を完了する'
    case 99:
      return '一覧から削除する'
  }
}


