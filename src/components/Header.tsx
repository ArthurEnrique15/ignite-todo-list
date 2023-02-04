import styles from './Header.module.css'

import rocketSvg from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={rocketSvg} alt="Rocket" />
        <p>
          <span>to</span>do
        </p>
      </div>
    </header>
  )
}
