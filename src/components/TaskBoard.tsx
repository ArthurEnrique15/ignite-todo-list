import styles from './TaskBoard.module.css'

export function TaskBoard() {
  return (
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
  )
}
