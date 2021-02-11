import React, { Component } from 'react'
import SwapiService from '../../services/service'
import ErrorIndicator from '../error-indicator/error-indicator'
import Spinner from '../spinner/spinner'

import './random-planet.css'

export default class RandomPlanet extends Component{
    
    swapi = new SwapiService()    
    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount(){
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false, error: false})
    }

    onError = (err) => {
        this.setState({ error: true, loading: false })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 2
        this.swapi.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    }

    

    render(){
        const { planet, loading, error } = this.state
        const hasData = !(loading || error)        
        const spinner = loading ? <Spinner /> : null
        const errorMessage = error ? <ErrorIndicator /> : null
        const content = hasData ? <PlanetView planet={planet}/> : null
        
        return(
            <div className="random-planet jumbotron rounded">
                {spinner}
                {errorMessage}
                {content}
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population, orbital_period, diameter } = planet

    return (
        <React.Fragment>
            <div className="item">
                <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            </div>
            <div className="item">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span> {population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span> {orbital_period}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diametr</span>
                        <span> {diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}