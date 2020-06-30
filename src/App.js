import React, {Component} from 'react';
import './App.css';
import Pups from './Pups';
import PupCard from "./PupCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pups: [],
      pupInfo: {},
      filter: false
     }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pups")
    .then(r => r.json())
    .then(fetchedPups => {
      this.setState({
        pups: fetchedPups
      })
    })
  }

  returnPupArray = () => {
    let pupArray = this.state.pups
    if (this.state.filter){
      pupArray = this.state.pups.filter(pups => pups.isGoodDog === true)
    }
    return pupArray
  }

  handleClick = (event) => {
    console.log(event.target.innerText)
    let puppyInfo = this.state.pups.find(puppy => puppy.name === event.target.innerText)
    this.setState({
      pupInfo: puppyInfo
    })
  }

  changeDogStatus = (puppyID) => {
    let foundPup = this.state.pups.find( puppy => puppy.id === puppyID)
    foundPup.isGoodDog = !foundPup.isGoodDog
    let changedArray = this.state.pups.map((puppy) => {
      if(puppy.id !== puppyID){
        return puppy
      } else {
        return foundPup
      }
    })

    this.setState({
      pups: changedArray
    })
  }

  handleFilter = () => {
    this.setState({
      filter: !this.state.filter
    })
  }

  render() { 
    console.log(this.state.pups)
    return ( 
      <div className="App">
      <div id="filter-div">
    <button id="good-dog-filter" onClick={this.handleFilter}>Filter good dogs: {
      this.state.filter ? 
      "ON"
      :
      "OFF"
    }</button>
      </div>
      <div id="dog-bar">
        < Pups pups={this.returnPupArray()} handleClick={this.handleClick}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
         < PupCard puppy={this.state.pupInfo} changeDogStatus={this.changeDogStatus}/>
        </div>
      </div>
    </div>
     );
  }
}
 
export default App;