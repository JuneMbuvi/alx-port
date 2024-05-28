import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  card: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: 'black',
  },
});

function RecipeCard({ recipe }) {
  return (
    <div className={css(styles.card)}>
      <h2 className={css(styles.title)}>{recipe.title}</h2>
      <p className={css(styles.description)}>{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
