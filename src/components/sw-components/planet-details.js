import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details'
import { SwapiConsumer } from '../swapi-context'

const PlanetDetails = ({itemId}) => {
    return(
        <SwapiConsumer>
        {
            ({ getPlanet, getPlanetImage }) => {
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
        }
        </SwapiConsumer>
    )
}

export default PlanetDetails