import React, { Component } from 'react';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    padding: '20px',
  },
  recipe: {
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
    color: '#666',
  },
});

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    axios.get('path/to/your/recipes.json')
      .then(response => this.setState({ recipes: response.data }))
      .catch(error => console.error('Error fetching data:', error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipes !== this.state.recipes) {
      console.log('Recipes state has changed');
    }
  }

  componentWillUnmount() {
  }

  render() {
    const { recipes } = this.state;

    return (
      <div className={css(styles.container)}>
        {recipes.map(recipe => (
          <div key={recipe.id} className={css(styles.recipe)}>
            <h2 className={css(styles.title)}>{recipe.title}</h2>
            <p className={css(styles.description)}>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default RecipeList;
