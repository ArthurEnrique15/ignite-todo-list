import { Header } from './components/Header'
import { TaskBoard } from './components/TaskBoard'
import './global.css'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TaskBoard />
      </div>
    </>
  )
}
