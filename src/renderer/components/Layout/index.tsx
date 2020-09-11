import React from 'react'

import { ScrollView } from 'Components/index'

import styles from './index.module.scss'

interface Props {
  children: JSX.Element;
  footer: JSX.Element;
}

function Layout(props: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ScrollView className={styles.scrollView}>
          <div className={styles.mainContent}>{props.children}</div>
        </ScrollView>
      </main>

      <footer className={styles.footer}>
        {props.footer}
      </footer>
    </div>
  )
}

export default Layout
