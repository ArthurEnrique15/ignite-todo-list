import styles from './AddTask.module.css'

import plus from '../assets/plus.svg'
import { ChangeEvent, useState } from 'react'

type AddTaskProps = {
  onAddTask: (description: string) => void
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleAddTask() {
    const description = newTaskText
    setNewTaskText('')
    onAddTask(description)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    const newTaskText = event.target.value
    console.log(newTaskText)
    setNewTaskText(newTaskText)
  }

  return (
    <div className={styles.addTask}>
      <input
        type="text"
        value={newTaskText}
        onChange={handleNewTaskChange}
        placeholder="Adiciona uma nova tarefa"
      ></input>
      <button onClick={handleAddTask}>
        Criar
        <img src={plus} alt="" />
      </button>
    </div>
  )
}
