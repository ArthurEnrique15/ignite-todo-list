import styles from './Task.module.css'

import { Trash } from 'phosphor-react'
import { useState } from 'react'

type TaskProps = {
  description: string
}

export function Task({ description }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleTaskCheck() {
    setIsChecked(!isChecked)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          onChange={handleTaskCheck}
          className={styles.checkbox}
        />
      </div>
      {isChecked ? <s>{description}</s> : <span>{description}</span>}

      <button title="Deletar task">
        <Trash size={24} />
      </button>
    </div>
  )
}
