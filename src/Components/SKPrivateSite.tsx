import React, { Component } from 'react'

class SKPrivateSite extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedInStatus: 'NOT_LOGGED_IN',
             user: {}
        }
    }


    render() {
        return (
            <div>
                <h1>SKPrivateSite goes here</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
            </div>
        )
    }
}

export default SKPrivateSite
