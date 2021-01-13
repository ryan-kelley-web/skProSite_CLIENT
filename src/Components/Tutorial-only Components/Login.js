import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'state demo'
        }
    }

    logUserIn() {
        this.setState({
            message: 'Insert function that logs user in.'
        })
    }


    render() {
        return (
            <div>
                <h1>Login Demo, and... {this.state.message}</h1>
                <button onClick={() => this.logUserIn()}>Log In</button>




            </div>
        )
    }
}

export default Login;