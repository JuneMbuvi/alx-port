import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  recipeDetail: {
    margin: '20px 0',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '10px',
  },
  ingredients: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  instructions: {
    fontSize: '16px',
    whiteSpace: 'pre-wrap',
  },
});

function RecipeDetail({ recipe }) {
  if (!recipe) {
    return <div>Select a recipe to see details</div>;
  }

  return (
    <div className={css(styles.recipeDetail)}>
      <h2 className={css(styles.title)}>{recipe.title}</h2>
      <p className={css(styles.description)}>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul className={css(styles.ingredients)}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p className={css(styles.instructions)}>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
