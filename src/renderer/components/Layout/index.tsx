import React from 'react'

import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'

import styles from './style.scss'

interface Props {
  children: React.ReactNode;
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
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
