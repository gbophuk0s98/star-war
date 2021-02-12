import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details'
import { SwapiConsumer } from '../swapi-context'

const PersonDetails = ({itemId}) => {
    return(
        <SwapiConsumer>
        {
            ({ getPerson, getPersonImage }) => {
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
        }
        </SwapiConsumer>
    )
}

export default PersonDetails