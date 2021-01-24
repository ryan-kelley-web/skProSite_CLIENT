import React, { Component } from 'react'
import SKRegistration from './SKRegistration';
import SKLogin from './SKLogin';

interface SKAuth_tsProps {
    // getToken: (token: string) => ;
    updateToken: (token: string) => void; //takes token, return no value 

}

interface SKAuth_tsState {
    email: string; password: string; newToken: string;
}


class SKAuth extends Component<SKAuth_tsProps, SKAuth_tsState> {
    constructor(props: SKAuth_tsProps) {
        super(props)

        this.state = { //default state
            newToken: '',
            email: '',
            password: ''
        }
    }




    render() {
        return (
            <div>
                <SKRegistration
                    updateToken={this.props.updateToken} />

                <SKLogin
                    updateToken={this.props.updateToken} />

                {/* <button type="submit" onClick={this.handleSubmit}>SKAuth Button</button> */}
                {//demo purpose only
                }
            </div>
        )
    }
}

export default SKAuth
