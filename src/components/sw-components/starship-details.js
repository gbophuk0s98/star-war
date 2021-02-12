import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details'
import { SwapiConsumer } from '../swapi-context'

const StarshipDetails = ({itemId}) => {
    return(
        <SwapiConsumer>
        {
            ({ getStarship, getStarshipImage }) => {
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
        }
        </SwapiConsumer>
    )
}

export default StarshipDetails