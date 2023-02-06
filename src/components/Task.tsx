import styles from './Task.module.css'

import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function Task() {
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
      {isChecked ? (
        <s>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </s>
      ) : (
        <span>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      )}

      <button title="Deletar task">
        <Trash size={24} />
      </button>
    </div>
  )
}
