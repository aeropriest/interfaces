import styles from './styles.module.scss'

import React from 'react';

const Flex = () => {
  return (
    <body className={styles.body}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
          <nav className={styles.menu}>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact</li>
              </ul>
          </nav>
          <div className={styles.userIcon}>User Icon</div>
      </header>

      <main className={styles.main}>
        <h2>Main heading</h2>
        <p>Main content</p>
      </main>
      <aside className={styles.aside}>
        <p>Aside content</p>
      </aside>
      <footer className={styles.footer}>
        <p>footer content</p>
      </footer>
    </body>

  );
};

export default Flex;