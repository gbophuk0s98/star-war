import React, { Component } from 'react'
import SwapiService from '../../services/service'
import Spinner from '../spinner/spinner'
import ErrorButton from '../error-button/error-button'

import './item-details.css'

const  Record = ({ item, field, label }) => {
    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span> {item[field]}</span>
        </li>
    )
}

export {
    Record
}

export default class ItemDetails extends Component {

    swapi = new SwapiService()

    state = {
        item: null,
        loading: true,
        image: null,
    }

    componentDidMount(){
        this.updatePerson()
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId != prevProps.itemId) this.updatePerson()
    }

    updatePerson() {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId)  return
        getData(itemId)
            .then((item) => {
                this.setState({ item: item, loading: false, image: getImageUrl(item)})
            })
    }

    render(){

        if (this.state.loading) return <Spinner />
        if (!this.state.item) return <span>Select something from a list</span>

        const { item, image } = this.state

        return(
            <div className="card d-flex flex-row">
                <div className="person-image-container">
                    <img className="person-image" src={image} alt="item" />
                </div>

                <div className="card-body">
                    <ul className="item-list list-group-flush m-0">
                        { 
                            React.Children.map(this.props.children, (child, index) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }

}