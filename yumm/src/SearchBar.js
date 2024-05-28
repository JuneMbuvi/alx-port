import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  searchContainer: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
});

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className={css(styles.searchContainer)}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className={css(styles.input)}
      />
    </div>
  );
}

export default SearchBar;
