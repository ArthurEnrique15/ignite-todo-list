import styles from './TaskBoard.module.css'

import clipboard from '../assets/clipboard.svg'

export function TaskBoard() {
  return (
    <>
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
        <img src={clipboard} alt="" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </>
  )
}
