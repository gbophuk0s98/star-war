import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import ErrorButton from '../error-button/error-button'
import PeoplePage from '../people-page/people-page'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/service'

import './app.css'
import Row from '../row/row'
import ItemDetails from '../item-details/item-details'

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
            <ItemDetails 
                itemId={11}
                getData={this.swapi.getPerson}
                getImageUrl={this.swapi.getPersonImage}/>
        )

        const starshipDetails = (
            <ItemDetails 
                itemId={5} 
                getData={this.swapi.getStarship}
                getImageUrl={this.swapi.getStarshipImage}/>
        )

        return(
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

                    <Row left={personDetails} right={starshipDetails} />

                </div>
            </div>
        )
    }
}