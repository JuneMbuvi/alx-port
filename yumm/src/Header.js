import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f8f8f8',
  },
  input: {
    padding: '5px',
    fontSize: '16px',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <h1>Yumm</h1>
      <input type="text" className={css(styles.input)} placeholder="Search recipes..." />
    </header>
  );
}

export default Header;

