import React from 'react'

let DogContainer = (props) => {

    function handleClick(evt){
        props.dogToRender(evt.target.textContent)
    }

    return(
        props.dogs.map((dogPOJO => {
            return <span key={dogPOJO.id} onClick={handleClick}>
                {dogPOJO.name}
            </span>
        }))
    )
}

export default DogContainer