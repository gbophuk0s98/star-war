import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator/error-indicator'
import Spinner from '../spinner/spinner'

const withData = (View) => {
    return class extends Component{

        state = {
            data : null,
            hasError: null,
        }
    
        componentDidMount(){
            this.props.getData().then((data) => {
                    this.setState({ data })
                }).catch(() => this.setState({ hasError: true }))
        }

        render(){
            const { data, hasError } = this.state
            if (!data) return <Spinner />
            if (hasError) return <ErrorIndicator />

            return <View {...this.props} data={data}/>
        }
    }
}

export default withData