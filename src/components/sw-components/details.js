import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details'
import SwapiService from '../../services/service'

const swapi = new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapi

const PersonDetails = ({itemId}) => {
    return(
        <ItemDetails 
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
                
            <Record field="name" label="Name"/>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye"/>

        </ItemDetails>
    )
}

const PlanetDetails = ({itemId}) => {
    return(
        <ItemDetails 
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>
                
            <Record field="population" label="Population"/>
            <Record field="orbital_period" label="Rotation period"/>
            <Record field="diameter" label="Diameter"/>

        </ItemDetails>
    )
}

const StarshipDetails = ({itemId}) => {
    return(
        <ItemDetails 
            itemId={itemId} 
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="model" label="Model"/>
            <Record field="manufacturer" label="Manufacturer"/>
            <Record field="costInCredits" label="Cost id credits"/>

        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}