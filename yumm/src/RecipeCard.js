import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  card: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.05)',
      backgroundColor: '#f0f0f0',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    color: '#666',
  },
});

function RecipeCard({ recipe }) {
  return (
    <div className={css(styles.card)}>
      <img src={recipe.image} alt={recipe.title} className={css(styles.image)} />
      <h2 className={css(styles.title)}>{recipe.title}</h2>
      <p className={css(styles.description)}>{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
