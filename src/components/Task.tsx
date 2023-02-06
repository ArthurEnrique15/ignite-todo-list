import styles from './Task.module.css'

import { Trash } from 'phosphor-react'

type TaskProps = {
  description: string
  isChecked: boolean
  updateTaskStatus: (description: string) => void
}

export function Task({ description, isChecked, updateTaskStatus }: TaskProps) {
  function handleTaskCheck() {
    updateTaskStatus(description)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleTaskCheck}
          className={styles.checkbox}
        />
      </div>

      <div className={styles.taskText}>
        {isChecked ? <s>{description}</s> : <span>{description}</span>}
      </div>

      <button title="Deletar task">
        <Trash size={24} />
      </button>
    </div>
  )
}
