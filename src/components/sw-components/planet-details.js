import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details'
import { withSwapi } from '../hoc-helpers'

const PlanetDetails = (props) => {
    return(
        <ItemDetails {...props}>
                
            <Record field="population" label="Population"/>
            <Record field="orbital_period" label="Rotation period"/>
            <Record field="diameter" label="Diameter"/>

        </ItemDetails>
    )
}

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getPlanet,
        getImageUrl: swapi.getPlanetImage
    }
}

export default withSwapi(PlanetDetails, mapMethodsToProps)