import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  recipeCard: {
    margin: '20px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  recipeTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  recipeDescription: {
    fontSize: '16px',
    color: '#666',
  },
});

function RecipeCard({ recipe }) {
  return (
    <div className={css(styles.recipeCard)}>
      <h2 className={css(styles.recipeTitle)}>{recipe.title}</h2>
      <p className={css(styles.recipeDescription)}>{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
