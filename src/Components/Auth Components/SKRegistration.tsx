import React, { Component } from 'react';

interface AcceptedProps {
    updateToken: (token: string) => void;
}

interface UserData {
    name: string; email: string; password: string; isAdmin: boolean;
}

class SKRegistration extends Component <AcceptedProps, UserData> {
    constructor(props: AcceptedProps) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            isAdmin: false,
        }
    }

    //EVENT HANDLERS
    handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(this.state)
        fetch('http://localhost:3000/user/register',
            {
                method: "POST",
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    isAdmin: this.state.isAdmin
                }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => response.json())
            .then((result) => { this.props.updateToken(result.sessionToken) })
            .catch((err) => { console.log("registration error", err) })
    }

    handleIsAdmin = (e: any) => {
        this.setState({ isAdmin: e.target.checked })
    }

    handleChange = (e: any) => {
        // this.setState({ [e.target.name]: e.target.value })
        this.setState({ ...this.state, [e.target.name]: e.target.value })

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

export default SKRegistration;



// import React, { Component } from "react";

// class SKRegistration extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: "",
//             email: "",
//             password: "",
//             isAdmin: false,
//         };

//         //class compon event handlers need to be "bound."
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log("form submitted");
//         const {
//             name,
//             email,
//             password,
//             isAdmin
//         } = this.state;

//         const userRegURL = 'http://localhost:3000/user/register';

//         handleSubmit = (e) => {
//             console.log(this.state.name, this.state.email, this.state.password, this.state.isAdmin);

//             e.preventDefault();

//             fetch(userRegURL,
//                 {
//                     method: "POST",
//                     body: JSON.stringify({
//                         name: this.state.name,
//                         email: this.state.email,
//                         password: this.state.password,
//                         isAdmin: this.state.isAdmin
//                     }),
//                     headers: { 'Content-Type': 'application/json' },
//                 }
//             ).then(res => res.json())
//                 .then(userPostRes => {
//                     this.setState({
//                         name: "",
//                         email: "",
//                         password: "",
//                         isAdmin: false
//                     })

//                 }).catch((err) => { console.log("registration error", err) })
//         }
//     }


//     componentDidMount() {
//         console.log("Did mount");
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={this.state.email}
//                         onChange={this.handleChange}
//                         required
//                     /><br />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={this.state.password}
//                         onChange={(e) => this.setState({ password: e.target.value })}
//                         required
//                     /> <br />

//                     <button type="submit">Register Today</button>
//                 </form>
//             </div>
//         );
//     }
// }






// export default SKRegistration;

