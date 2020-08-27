import React from 'react';

class DogCard extends React.Component {
    state = {
        isGoodDog: ""
    };

    toggleButton = (evt) => {
        // this.setState((prevState) => {
        //     isGoodDog: !this.state.isGoodDog
        // })
    };

    render(){
        let dogToRender = this.props.dog
        let dog = this.props.dogs.map((dogPOJO) => {
            if (dogPOJO.name === dogToRender){
                return (
                    <>
                        <img src={dogPOJO.image} />
                        <h2>{dogPOJO.name}</h2>
                        <button onClick={this.toggleButton}>
                            {dogPOJO.isGoodDog
                            ? 
                            "Good Dog!"
                            : 
                            "Bad Dog!"
                            }
                        </button>
                    </>
                ) 
            }
        })
        
        return(    
            dog
        )
    };
};

export default DogCard;