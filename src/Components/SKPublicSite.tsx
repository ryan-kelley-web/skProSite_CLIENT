import React, { Component } from 'react'
import SKRegistration from './Auth Components/SKRegistration'

class SKPublicSite extends Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
}


    render() {
        return (
            <div>
                <h1>SKPublicSite goes here</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <SKRegistration/>
            </div>
        )
    }
}

export default SKPublicSite
