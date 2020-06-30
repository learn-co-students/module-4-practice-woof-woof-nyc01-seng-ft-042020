import React from 'react';

const Pups = (props) => {

    return ( 
        props.pups.map(puppy => {
        return < span onClick = {props.handleClick}> {puppy.name} </span>
    }) 
    )
}
 
export default Pups;