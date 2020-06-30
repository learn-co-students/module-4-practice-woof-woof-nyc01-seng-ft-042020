import React, { Component} from 'react';

class PupCard extends Component {

    handleClick = (event) => {
        let puppyID = this.props.puppy.id
        console.log(puppyID)
        this.props.changeDogStatus(puppyID)
    }

    render() { 
        let { name, image, isGoodDog } = this.props.puppy
        return (
            <div>
            <img src = {image} alt={name}></img>
            <h2>{name}</h2>
        <button onClick={this.handleClick}>{isGoodDog ? 
        "Good Dog!"
        :
        "Bad Dog!"
        }</button>
           </div>
           )

    }
}
 
export default PupCard;