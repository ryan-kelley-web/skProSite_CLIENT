import React, { Component } from 'react'

interface SKPriv_tsProps {
    updateToken: (token: string) => void;
}

interface SKPriv_tsState {
    name: string; email: string; password: string; isAdmin: boolean;
}

class SKPrivateSite extends Component <SKPriv_tsProps, SKPriv_tsState> {
    constructor(props: SKPriv_tsProps) {
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
                <h1>***SKPRIV-LEVEL***</h1>
            </div>
        )
    }
}

export default SKPrivateSite;
