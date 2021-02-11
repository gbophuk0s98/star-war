import React, { Component } from 'react'
import SwapiService from '../../services/service'
import Spinner from '../spinner/spinner'
import ErrorButton from '../error-button/error-button'

import './person-details.css'

export default class PersonDetails extends Component {

    swapi = new SwapiService()

    state = {
        person: null,
        loading: true
    }

    componentDidMount(){
        this.updatePerson()
    }

    componentDidUpdate(prevProps){
        if (this.props.personId != prevProps.personId) this.updatePerson()
    }

    updatePerson() {
        const { personId } = this.props
        if (!personId)  return
        
        this.swapi.getPerson(personId)
            .then((person) => {
                this.setState({ person: person, loading: false})
            })
    }

    render(){

        if (!this.state.person) return <span>Select a person from a list</span>
        if (this.state.loading) return <Spinner />

        const { person: { id, name, gender, birthDay, eyeColor } } = this.state
        return(
            <div className="card d-flex flex-row">
                <div className="person-image-container">
                    <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="character" />
                </div>
                <div className="card-body">
                    <ul className="item-list list-group-flush m-0">
                        <li className="list-group-item">
                            <span className="term">Name: </span>
                            <span> {name}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Gender: </span>
                            <span> {gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth day: </span>
                            <span> {birthDay}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color: </span>
                            <span> {eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }

}