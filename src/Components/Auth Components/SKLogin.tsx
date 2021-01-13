import React, { Component } from 'react';

interface AcceptedProps {
    updateToken: (token: string) => void;
}

interface UserData {
    name: string; email: string; password: string; isAdmin: boolean;
}

class SKLogin extends Component {
    constructor(props: AcceptedProps) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            isAdmin: false
        }
    }

    //EVENT HANDLERS
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state)
        fetch('http://localhost:3000/user/login',
            {
                method: "POST",
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    isAdmin: this.state.isAdmin
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        ).then(res => res.json())
            .then(userPostRes => { console.log(userPostRes) })
            .catch((err) => { console.log("registration error", err) })
    }

    handleIsAdmin = (e) => {
        this.setState({ isAdmin: e.target.checked })
    }


    render() {
        const { name, email, password, isAdmin } = this.state;
        // const adminEmail = 'testadmin@email.com';

        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <input
                            type="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleChange}
                            required
                        /><br />
                    </div>

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

                    <div>
                        <input
                            type="checkbox"
                            name="isAdmin"
                            placeholder="Are you an admin?"
                            checked={isAdmin}
                            // onChange={(e) => this.setState({ isAdmin: e.target.checked })}
                            onChange={this.handleIsAdmin}
                        />Check this box if you are an admin of this site. <br />
                    </div>

                    <div>
                        <button type="submit">Register Today</button>
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