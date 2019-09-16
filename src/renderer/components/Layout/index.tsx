import React from 'react'

import Header from './Header'
import Aside from './Aside'

import styles from './style.scss'

interface Props {
  children: JSX.Element;
  footer: JSX.Element;
}

function Layout(props: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        <aside className={styles.aside}>
          <Aside />
        </aside>

        <div className={styles.mainContent}>{props.children}</div>
      </main>

      <footer className={styles.footer}>
        {props.footer}
      </footer>
    </div>
  )
}

export default Layout
