import React, { Component } from 'react'

interface SKDash_tsProps {
    token: string | null;
    // name: string;
    // email: string;
    // cityState: string;
    // tagline: string;
    // why: string;
    // advantage: string;
}

interface SKDash_tsState {
    name: string;
    // email: string;
    cityState: string;
    tagline: string;
    why: string;
    advantage: string;
}



class SKDash extends Component<SKDash_tsProps, SKDash_tsState> {
    constructor(props: SKDash_tsProps) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this);
        this.displaySKDash=this.displaySKDash.bind(this);

        this.state = {
            name: '',
            // email: '',
            cityState: '',
            tagline: '',
            why: '',
            advantage: ''
        }
    }

    displaySKDash = () => {
        fetch('http://localhost:3000/user/singleuser',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token || ''
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    name: data.name,
                    // email: data.email,
                    cityState: data.profile.profileCityState,
                    tagline: data.profile.profileTagline,
                    why: data.profile.profileWhy,
                    advantage: data.profile.profileAdvantage

                });
            })
            .catch((err) => { console.log("display userprofile in skdash error", err) })
    }




    //fetch for userprofile data
    componentDidMount = () => {
        this.displaySKDash();
}

render() {
    return (
        <div>
            <h1>***SKDASH-LEVEL***</h1>
            <h3>Dashboard</h3>
        
            <p>{this.state.name}</p>
            {/* <p>{this.state.email}</p> */}
            <p>{this.state.cityState}</p>
            <p>{this.state.tagline}</p>
            <p>{this.state.why}</p>
            <p>{this.state.advantage}</p>
        </div>
    )
}
}

export default SKDash;
