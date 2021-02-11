import React, { Component } from 'react'
import ItemList from '../item-list/item-list'
import ItemDetails from '../item-details/item-details'
import ErrorBoundry from '../error-boundry/error-boundry'
import Row from '../row/row'

import './people-page.css'

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null,
    }


    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }


    render(){

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.props.getData}
            >
                {
                (item) => (
                    `${item.name} (${item.birthDay})`
                )
                }
            </ItemList>        
        )

        const personDetails = (
            <ItemDetails itemId={this.state.selectedPerson}/>
        )

        return(
            <ErrorBoundry>
            <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }

}