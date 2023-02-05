import styles from './Task.module.css'

import trash from '../assets/trash.svg'

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

      <img src={trash} alt="" />
    </div>
  )
}
