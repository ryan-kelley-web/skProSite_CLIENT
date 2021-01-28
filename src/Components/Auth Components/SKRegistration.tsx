import React, { Component } from 'react';

interface SKReg_tsProps {
    updateToken: (token: string, profile: {} | null) => void;
}

interface SKReg_tsState {
    name: string; email: string; password: string; isAdmin: boolean;
}

class SKRegistration extends Component<SKReg_tsProps, SKReg_tsState> {
    constructor(props: SKReg_tsProps) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            isAdmin: false,
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(this.state)
        fetch('http://localhost:3000/user/register',
            {
                method: "POST",
                body: JSON.stringify({
                    user: {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        isAdmin: this.state.isAdmin
                    }
                }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => response.json())
            .then((data) => {
                this.props.updateToken(data.sessionToken, data.user.profile);
                console.log(data.sessionToken);
            })
            .catch((err) => { console.log("registration error", err) })
    }

    handleIsAdmin = (e: any) => {
        this.setState({ isAdmin: e.target.checked })
    }

    handleChange = (e: any) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })

    }

    render() {
        const { name, email, password, isAdmin } = this.state;

        return (
            <div>
                <h1>Your <i>best</i> self wants to meet you too. Start today.</h1>
                <h3>Welcome to Indy's Premier Online Fitness & Nutrition Community</h3>
                <ul>
                    <p>Registration is <strong>FREE</strong> and gives you access to...</p>
                    <li>An ever-expanding library of interdisciplinary workouts to keep you focused and having fun </li>
                    <li>Easy, convenient tools to monitor your results and catalog your experiences</li>
                    <li>Exclusive "Healthy Hoosier HotSpot" offers on wellness products & services, from the companies keeping Indiana strong (see blog for more)</li>
                    <li>A community of motivated practitioners willing to share what they've learned along the way</li>
                </ul>

                <h3>Registration</h3>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <input
                            type="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleChange}
                            required
                        /><br /><br/>
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        /><br /><br/>
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            required
                        /> <br /><br/>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="isAdmin"
                            placeholder="Are you an admin?"
                            checked={isAdmin}
                            // onChange={(e) => this.setState({ isAdmin: e.target.checked })}
                            onChange={this.handleIsAdmin}
                        />Check this box if you are an admin of this site. <br /><br/>
                    </div>

                    <div>
                        <button type="submit">Sign Up </button>
                    </div >

                </form><br/>
            </div >
        )
    }
}

export default SKRegistration;



