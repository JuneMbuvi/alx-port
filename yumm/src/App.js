import React, { Component } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import CategoryFilter from './CategoryFilter';

class App extends Component {
  state = {
    recipes: [],
    selectedRecipe: null,
    selectedCategory: '',
    categories: [],
  };

  componentDidMount() {
  axios.get('alx-port/yumm/public/recipes.json')
      .then(response => {
        const categories = [...new Set(response.data.map(recipe => recipe.category))];
        this.setState({ recipes: response.data, categories });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    const { recipes, selectedRecipe, selectedCategory, categories } = this.state;
    const filteredRecipes = selectedCategory
      ? recipes.filter(recipe => recipe.category === selectedCategory)
      : recipes;

    return (
      <div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={this.handleCategoryChange}
        />
        <RecipeList
          recipes={filteredRecipes}
          onSelectRecipe={this.handleRecipeSelect}
        />
        <RecipeDetail recipe={selectedRecipe} />
      </div>
    );
  }
}

export default App;
