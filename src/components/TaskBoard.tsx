import styles from './TaskBoard.module.css'

import clipboard from '../assets/clipboard.svg'
import { Task } from './Task'
import { AddTask } from './AddTask'
import { useState } from 'react'

export function TaskBoard() {
  const [tasks, setTasks] = useState<string[]>([])

  function handleAddTask(description: string) {
    setTasks([...tasks, description])
  }

  const tasksAmount = tasks.length

  return (
    <>
      <AddTask onAddTask={handleAddTask} />

      <div className={styles.header}>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <button>{tasksAmount}</button>
        </div>

        <div className={styles.completedTasks}>
          <span>Concluídas</span>
          <button>0 de {tasksAmount}</button>
        </div>
      </div>

      <div className={styles.board}>
        {tasksAmount ? (
          tasks.map((task) => {
            return <Task key={task} description={task} />
          })
        ) : (
          <div className={styles.noTasks}>
            <img src={clipboard} alt="" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </>
  )
}
