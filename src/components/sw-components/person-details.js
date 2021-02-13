import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details'
import { withSwapi } from '../hoc-helpers'

const PersonDetails = (props) => {
    return(
        <ItemDetails {...props}>
                
            <Record field="name" label="Name"/>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye"/>

        </ItemDetails>
    )
}

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getPerson,
        getImageUrl: swapi.getPersonImage
    }
} 

export default withSwapi(PersonDetails, mapMethodsToProps)