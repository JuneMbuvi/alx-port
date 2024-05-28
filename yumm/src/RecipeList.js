import React, { Component } from 'react';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';
import RecipeCard from './RecipeCard';

const styles = StyleSheet.create({
  container: {
    padding: '20px',
    display: 'grid',
    gridTemplateRows: 'repeat(autofill, minmax(300px, 1fr))',
    gap: '20px',
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
    axios.get('/recipes.json')
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
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
