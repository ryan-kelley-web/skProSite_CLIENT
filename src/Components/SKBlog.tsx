import React, { Component } from 'react'

interface SKBlog_tsProps {
    updateToken: (token: string) => void;
}

interface SKBlog_tsState {
    name: string; email: string; password: string; isAdmin: boolean;
}

class SKBlog extends Component <SKBlog_tsProps, SKBlog_tsState> {
    constructor(props: SKBlog_tsProps) {
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
                <h1>***SKBLOG-LEVEL***</h1>
            </div>
        )
    }
}

export default SKBlog;
