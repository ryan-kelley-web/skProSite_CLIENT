import React, { Component } from 'react'

interface SKContact_tsProps {
    updateToken: (token: string) => void;
}

interface SKContact_tsState {
    name: string; email: string; password: string; isAdmin: boolean;
}

class SKContact extends Component <SKContact_tsProps, SKContact_tsState> {
    constructor(props: SKContact_tsProps) {
        super(props)
    
        this.state = {
            name: '', 
            email: '', 
            password: '',
            isAdmin: false
        }
    }


    render() {
        return (
            <div>
                <h1>***SKCONTACT-LEVEL***</h1>
            </div>
        )
    }
}

export default SKContact;
