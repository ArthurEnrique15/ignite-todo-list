import styles from './AddTask.module.css'

import plus from '../assets/plus.svg'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

type AddTaskProps = {
  onAddTask: (description: string) => void
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleAddTask(event: FormEvent) {
    // * impede que a página seja atualizada no submit do form
    event.preventDefault()

    const description = newTaskText
    setNewTaskText('')
    onAddTask(description)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    // * Limpa a mensagem de erro
    event.target.setCustomValidity('')

    const newTaskText = event.target.value
    setNewTaskText(newTaskText)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const newTaskIsEmpty = newTaskText === ''

  return (
    <form onSubmit={handleAddTask} className={styles.addTask}>
      <input
        type="text"
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        placeholder="Adiciona uma nova tarefa"
        required
      ></input>
      <button type="submit" disabled={newTaskIsEmpty}>
        Criar
        <img src={plus} alt="" />
      </button>
    </form>
  )
}
