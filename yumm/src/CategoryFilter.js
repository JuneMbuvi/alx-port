import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  filterContainer: {
    margin: '20px 0',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  select: {
    padding: '5px',
    fontSize: '16px',
  },
});

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className={css(styles.filterContainer)}>
      <label className={css(styles.label)} htmlFor="category-select">
        Filter by Category:
      </label>
      <select
        id="category-select"
        className={css(styles.select)}
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
      >
        <option value="">All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
