import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }

  handlerSearch = (e) => {
    this.setState({ searchString: e.target.value });
  }

  filter = (searchString) => {
    return this.recipes.filter(
      ({ title, ingredients }) =>
        title.toLowerCase().includes(searchString.toLowerCase()) ||
        ingredients.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  render() {
    const { searchString } = this.state;
    const filteredRecipes = this.filter(searchString);

    const recipes = filteredRecipes.map((recipe, index) => (
      <RecipeItem
        key={index}
        recipe={recipe}
        searchString={this.state.searchString}
      />
    ));

    return (
      <div className="App">
        <Navbar searchString={this.state.searchString} handlerChange={this.handlerSearch} />
        <div className="container mt-10">
          {
            recipes.length ?
              (<div className="row">{recipes}</div>) :
              (
                <div className="d-flex justify-content-center pt-5">
                  <h5 className="card-title">No Results to show</h5>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
