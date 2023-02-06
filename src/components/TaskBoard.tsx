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

  const thereIsAtLeastOneTask = true

  return (
    <>
      <AddTask onAddTask={handleAddTask} />

      <div className={styles.header}>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <button>0</button>
        </div>

        <div className={styles.completedTasks}>
          <span>Concluídas</span>
          <button>2 de 5</button>
        </div>
      </div>

      <div className={styles.board}>
        {thereIsAtLeastOneTask ? (
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
