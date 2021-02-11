import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import ErrorButton from '../error-button/error-button'
import PeoplePage from '../people-page/people-page'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/service'

import './app.css'

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

        return(
            <div>
                <div className="container">
                    <Header />
                    {planet}
                    
                    <button 
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.onToggleRandomPlanet}
                    >
                        Toggle random planet
                    </button>
                    <ErrorButton />

                    <PeoplePage 
                        getData={this.swapi.getAllPeople}
                    />

                    <div className="row mb2 mb-5">
                        <div className="col-md-6">
                            <ItemList
                                onItemSelected={this.onPersonSelected}
                                getData={this.swapi.getAllPlanets}
                                renderItem={(item) => (<span>{item.diameter}<button>!</button></span>)}
                            />
                        </div>
                        <div className="col-md-6">
                            <PersonDetails personId={this.state.selectedPerson}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}