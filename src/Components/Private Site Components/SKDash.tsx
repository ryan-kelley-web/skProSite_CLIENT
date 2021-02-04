import React, { Component } from 'react'
import { Link } from 'react-router-dom';


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
        this.welcomeBack=this.welcomeBack.bind(this);


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
                this.welcomeBack();
            })
            .catch((err) => { console.log("display userprofile in skdash error", err) })
    }

    welcomeBack =()=>{
        alert('Way to be consistent' + ' ' + `${this.state.name}`+'!')
}



    //fetch for userprofile data
    componentDidMount = () => {
        this.displaySKDash();
}

render() {
    return (
        <div>

            <h1>DASHBOARD</h1>
        
            <p>{this.state.name}</p>
            <p>{this.state.cityState}</p>
            <p>{this.state.tagline}</p>
            <p>{this.state.why}</p>
            <p>{this.state.advantage}</p> <br/>

        <h5>Progress Starts Here</h5>
        <Link to='workout/allworkouts'>Display all workouts</Link><br />


        </div>

    )
}
}

export default SKDash;
