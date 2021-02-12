import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import ErrorButton from '../error-button/error-button'
import PeoplePage from '../people-page/people-page'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/service'
import ItemDetails, { Record } from '../item-details/item-details'
import { SwapiProvider, SwapiConsumer } from '../swapi-context'
import { 
    PersonList, 
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
 } from '../sw-components/index'

import './app.css'
import Row from '../row/row'
import ItemList from '../item-list/item-list'

export default class App extends Component {

    swapi = new SwapiService()

    state = {
        showRandomPlanet: true,
        hasError: false,
    }

    onToggleRandomPlanet = () => {
        this.setState({
            showRandomPlanet: !this.state.showRandomPlanet
        })
    }

    componentDidCatch(){
        console.log('componentDidCatch()')
        this.setState({ hasError: true })
    }

    render(){

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null
        if (this.state.hasError) return <ErrorIndicator/>

        const personDetails = (
            <PersonDetails itemId={11}/>
        )

        const planetDetails = (
            <PlanetDetails itemId={11}/>
        )

        const peopleList = (
            <PersonList />
        )

        const planetList = (
            <PlanetList />
        )

        const starshipList = (
            <StarshipList />
        )

        return(
            <SwapiProvider value={this.swapi}>
                <div>
                    <div className="container">
                        <Header />
                        
                        {/* {planet}
                        
                        <button 
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.onToggleRandomPlanet}
                        >
                        Toggle random planet
                        </button>
                        <ErrorButton />
                        
                        <PeoplePage 
                        getData={this.swapi.getAllPeople}
                        /> */}
                        <Row left={peopleList} right={starshipList} />
                        <Row left={personDetails} right={planetDetails} />

                    </div>
                </div>
            </SwapiProvider>
        )
    }
}