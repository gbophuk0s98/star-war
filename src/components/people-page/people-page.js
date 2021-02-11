import React, { Component } from 'react'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import ErrorIndicator from '../error-indicator/error-indicator'

import './people-page.css'

const Row = ({left, right}) => {
    return(
        <div className="row mb2 mb-5">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null,
        hasError: false,
    }

    componentDidCatch(){
        this.setState({ hasError: true })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }


    render(){

        if (this.state.hasError) return <ErrorIndicator/>

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.props.getData}
                renderItem={({name, gender, birthDay}) => `${name} (${gender}, ${birthDay})`}
            />        
        )

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )

        return(
            <Row left={itemList} right={personDetails}/>
        )
    }

}