import React from 'react'
import ItemList from '../item-list/item-list'
import { withData } from '../hoc-helper/with-data'
import SwapiService from '../../services/service'

const swapi = new SwapiService()

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapi

const PersonList = withData(ItemList, getAllPeople)

const PlanetList = withData(ItemList, getAllPlanets)

const StarshipList = withData(ItemList, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}