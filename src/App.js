import React from 'react';
import './App.css';
import DogContainer from './DogContainer'
import DogCard from './DogCard'

class App extends React.Component {
  state = {
    dogList: [],
    dogToBeRendered: "",
    filterTerm: ""
  };

  componentDidMount(){
    fetch("http://localhost:3000/pups")
    .then(r => r.json())
    .then((dogs) => {
      this.setState({
        dogList: dogs
      })
    })
  };

  dogToRender = (dogNameFromChild) => {
    this.setState({
      dogToBeRendered: dogNameFromChild
    })
  };

  handleFilter = (event) => {
    this.setState((prevState) => ({
      filterTerm: !prevState.filterTerm
    }))
  };

  render(){ 
    let {dogList, dogToBeRendered} = this.state
    return (
      <div className="App">
        <div id="filter-div">
          <button 
            id="good-dog-filter" 
            value={this.state.filterTerm} 
            onClick={this.handleFilter}
          >
            Filter good dogs: { this.state.filterTerm === "OFF" ? "OFF" : "ON"}
          </button>
        </div>
        <div id="dog-bar">
          <DogContainer
            dogs={dogList}
            dogToRender={this.dogToRender}
          />
        </div>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">
            <DogCard
              dogs={dogList}
              dog={dogToBeRendered}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
