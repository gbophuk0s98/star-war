import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details'
import { withSwapi } from '../hoc-helpers'

const StarshipDetails = (props) => {
    return(
        <ItemDetails {...props}>

            <Record field="model" label="Model"/>
            <Record field="manufacturer" label="Manufacturer"/>
            <Record field="costInCredits" label="Cost id credits"/>

        </ItemDetails>
    )
}

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getStarship,
        getImageUrl: swapi.getStarshipImage
    }
}

export default withSwapi(StarshipDetails, mapMethodsToProps)