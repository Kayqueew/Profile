import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar hasBorder = {true} src="https://avatars.githubusercontent.com/u/92122337?v=4"/>

        <strong>Kayque Roger</strong>
        <span>web developer</span>
      </div>

      <footer>
        <a href="##">
          <PencilLine size={20}/>
          editar seu perfil
          </a>
      </footer>
    </aside>
  )
}