import React, { Component } from 'react';


interface SKLog_tsProps {
    // getToken: (token: string) => ;
    updateToken: (token: string) => void; //takes token, return no value 

}

interface SKLog_tsState {
    email: string;
    password: string;
    newToken: string;
}
class SKLogin extends Component<SKLog_tsProps, SKLog_tsState> {
    constructor(props: SKLog_tsProps) {
        super(props);

        this.state = {
            email: '',
            password: '',
            newToken: ''
        }
    }

    handleChange = (e: any) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(this.state)
        fetch('http://localhost:3000/user/login',
            {
                method: "POST",
                body: JSON.stringify({
                    user: {

                        email: this.state.email,
                        password: this.state.password,

                    }
                }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => response.json())
            .then((data) => {
               
                this.props.updateToken(data.sessionToken);
                console.log(data.sessionToken);

                this.setState({ newToken: data.sessionToken })
                // this.props.updateToken(this.state.newToken);
                // console.log(this.state.newToken);
            })
            .catch((err) => { console.log("registration error", err) })
    }


    // handleSubmit = (e: any) => {
    //     e.preventDefault()
    //     this.setState({ newToken: 'sessionToken' })
    //     this.props.updateToken(this.state.newToken);
    //     console.log(this.state.newToken);
    // }

    // console.log(this.state)
 

    //ADMIN-ONLY
    // handleIsAdmin = (e: any) => {
    //     this.setState({ isAdmin: e.target.checked })
    // }

    render() {
        const { email, password } = this.state;
        // const adminEmail = 'testadmin@email.com';

        return (
            <div>

                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>

                    {/* <div>
                        <input
                            type="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleChange}
                            required
                        /><br />
                    </div> */}

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        /><br />
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            required
                        /> <br />
                    </div>

                    {/* <div>
                    <input
                        type="checkbox"
                        name="isAdmin"
                        placeholder="Are you an admin?"
                        checked={isAdmin}
                        // onChange={(e) => this.setState({ isAdmin: e.target.checked })}
                        onChange={this.handleIsAdmin}
                    />Check this box if you are an admin of this site. <br />
                </div> */}

                    <div>
                        <button type="submit">Log In</button>
                    </div >

                </form>
            </div >
        )
    }
}

export default SKLogin;




//OLD CODE
// import React from 'react'

// export default class SKLogin extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name:"",
//             email: "",
//             password: "",
//             isAdmin: false,
//         };
//     }
//     render(){
//         return(
//             <div>
//                 SKLogin goes here
//             </div>
//         )
//     }
// }