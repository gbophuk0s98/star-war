import React from 'react'
import ItemList from '../item-list/item-list'
import { withData, withSwapi } from '../hoc-helpers'

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>

const mapPersonToProps = (swapi) => {
    return{
        getData: swapi.getAllPeople,

    }
}

const mapPlanetToProps = (swapi) => {
    return{
        getData: swapi.getAllPlanets,
        
    }
}

const mapStarshipToProps = (swapi) => {
    return{
        getData: swapi.getAllStarships,
        
    }
}
 
const PersonList = withSwapi(
    withData(withChildFunction(ItemList, renderName)),
    mapPersonToProps
    )

const PlanetList = withSwapi(
    withData(withChildFunction(ItemList, renderName)),
    mapPlanetToProps
    )

const StarshipList = withSwapi(
    withData(withChildFunction(ItemList, renderModelAndName)),
    mapStarshipToProps
    )

export {
    PersonList,
    PlanetList,
    StarshipList
}