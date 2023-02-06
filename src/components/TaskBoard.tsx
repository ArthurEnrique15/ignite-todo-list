import styles from './TaskBoard.module.css'

import clipboard from '../assets/clipboard.svg'
import { Task } from './Task'
import { AddTask } from './AddTask'
import { useState } from 'react'
import { ITask } from '../interfaces/Task'

export function TaskBoard() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleAddTask(description: string) {
    setTasks([...tasks, { description, isChecked: false }])
  }

  function updateTaskStatus(description: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.description === description) {
        task.isChecked = !task.isChecked
      }

      return task
    })

    setTasks(updatedTasks)
  }

  const tasksAmount = tasks.length

  const completedTasks = tasks.filter((task) => task.isChecked).length

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
          <button>
            {completedTasks} de {tasksAmount}
          </button>
        </div>
      </div>

      <div className={styles.board}>
        {tasksAmount ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.description}
                description={task.description}
                isChecked={task.isChecked}
                updateTaskStatus={updateTaskStatus}
              />
            )
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
