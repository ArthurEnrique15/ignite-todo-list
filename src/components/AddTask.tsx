import styles from './AddTask.module.css'

import plus from '../assets/plus.svg'

export function AddTask() {
  return (
    <div className={styles.addTask}>
      <input type="text" placeholder="Adiciona uma nova tarefa"></input>
      <button>
        Criar
        <img src={plus} alt="" />
      </button>
    </div>
  )
}
