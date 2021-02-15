import React, { Component, useEffect, useState} from 'react'
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/service'
import { SwapiProvider } from '../swapi-context'
import { PeoplePage, PlanetPage, StarshipsPage } from '../pages'

import './app.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StarshipDetails } from '../sw-components'

export default class App extends Component {

    swapi = new SwapiService()

    state = {
        hasError: false,
    }


    componentDidCatch(){
        this.setState({ hasError: true })
    }

    render(){

        if (this.state.hasError) return <ErrorIndicator/>

        return(
            <SwapiProvider value={this.swapi}>
                <Router>
                <div>
                    <div className="container">
                        <Header />
                        
                        <RandomPlanet />

                        <Route path="/" render={() => <h2>Welcome to star-db</h2>} exact/>
                        <Route path="/people" component={PeoplePage} />
                        <Route path="/planets" component={PlanetPage} />
                        <Route path="/starships" component={StarshipsPage} exact/>
                        <Route path="/starships/:id" 
                            render={
                                ({ match, location, history }) => {
                                    return <StarshipDetails itemId={match.params.id}/>
                                }
                            } />

                    </div>
                </div>
                </Router>
            </SwapiProvider>
        )
    }
}

// const App = () => {

//     const [id, setId] = useState(1)

//     const addHandler = () => {
//         setId((id) => {
//             return id + 1
//         })
//     } 

//     return(
//         <div className="container">
//             <button
//                 className="btn btn-primary"
//                 onClick={addHandler}>+</button>
//             <PlanetInfo id={id} />
//         </div>
//     )
// }

// const usePlanetInfo = (id) => {
    
//     const swapi = new SwapiService()
//     const [planetName, setPlanetName] = useState('')

//     useEffect(() => {
//         let cancelled = false
//         swapi.getPlanet(id).then((planet) => {
//             !cancelled && setPlanetName(planet.name)
//         })

//         return () => cancelled = true
//     }, [id])

//     return planetName
// }

// const getPlanet = (id) => {
//     return swapi.getPlanet(id).then((planet) => planet)
// }

// const PlanetInfo = ({id}) => {

//     const name = usePlanetInfo(id)

//     return(
//         <div className="container">{id} - {name}</div>
//     )
// }

// const Notification = () => {

//     const [isVisible, setIsVisible] = useState(true)
    
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setIsVisible(false)
//         }, 1500);

//         return () => clearTimeout(timeout)
//     }, [])



//     return(
//          <div className="container"> { isVisible && <span>Hello</span>} </div>
//     )
// }

// export default App