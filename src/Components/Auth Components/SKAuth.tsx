import React, { Component } from 'react'
import SKRegistration from './SKRegistration'; 
import SKLogin from './SKLogin';

interface AcceptedProps{ 
    updateToken: (token: string) => void; //takes token, return no value 
    //props interface
}

interface UserData {
    email: string; password: string; newToken: string;
    //state interface
}


class SKAuth extends Component < AcceptedProps, UserData > {
    constructor(props: AcceptedProps) {
        super(props)
    
        this.state = { //default state
         newToken: '', 
         email: '', 
         password: ''    
        }
    }
    

handleSubmit = (e: any) => {
    e.preventDefault()

    this.setState({ newToken: 'sessionToken'})
    this.props.updateToken(this.state.newToken)
}

    render() {
        return (
            <div>
                {/* <SKRegistration />
                <SKLogin /> */}
                <button type="submit" onClick={this.handleSubmit}>Button</button> 
                {//demo purpose only
                }
            </div>
        )
    }
}

export default SKAuth
