import React, { Component } from 'react';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  container: {
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
});

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTerm: '',
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

  handleSearchChange = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    const { recipes, searchTerm } = this.state;
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className={css(styles.container)}>
        <SearchBar searchTerm={searchTerm} onSearchChange={this.handleSearchChange} />
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
