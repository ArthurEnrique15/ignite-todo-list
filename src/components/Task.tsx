import styles from './Task.module.css'

import { Trash } from 'phosphor-react'

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} />
      </div>
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>

      <button title="Deletar task">
        <Trash size={24} />
      </button>
    </div>
  )
}
