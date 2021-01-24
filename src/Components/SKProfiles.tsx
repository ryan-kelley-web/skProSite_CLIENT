import React, { Component } from 'react';

interface SKProf_tsProps {
    // updateToken: (token: string) => void;
    showSKPriv: () => void;
    token: string;
}

interface SKProf_tsState {
    cityState: string; tagline: string; why: string; advantage: string;
}

class SKProfiles extends Component<SKProf_tsProps, SKProf_tsState> {
    constructor(props: SKProf_tsProps) {
        super(props);

        this.state = {
            cityState: '',
            tagline: '',
            why: '',
            advantage: ''
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(this.state)

        fetch('http://localhost:3000/profile/createprofile',
            {
                method: "POST",
                body: JSON.stringify({
                    profile: {
                        profileCityState: this.state.cityState,
                        profileTagline: this.state.tagline,
                        profileWhy: this.state.why,
                        profileAdvantage: this.state.advantage
                    }
                }),
                headers: { 'Content-Type': 'application/json', 'Authorization': this.props.token },
            })
            .then((response) => response.json())
            .then((data) => {
                this.props.showSKPriv();

            })
            .catch((err) => { console.log("registration error", err) })
    }

    // handleIsAdmin = (e: any) => {
    //     this.setState({ isAdmin: e.target.checked })
    // }

    handleChange = (e: any) => {
        this.setState({ ...this.state,[e.target.name]: e.target.value })
    }

    render() {
        const { cityState, tagline, why, advantage } = this.state;

        return (
            <div>
                <h1>***SKPROF-LEVEL***</h1>
                <h1>Congratulations on taking your first step towards a stronger, healthier you.</h1>
                <h3>You're nearly finished! Just a few more questions and your profile will be complete.</h3>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>
                            <p>What city & state do you live in?</p>
                            <input
                                type="cityState"
                                name="cityState"
                                placeholder="City, State (initials)"
                                value={this.state.cityState}
                                onChange={this.handleChange}
                            />
                        </label><br />
                    </div>

                    <div>
                        <label>
                            <p>Write a one-sentence tagline explaining who you are, what you love to do, and any other details you wish to add about what makes you unique.</p>
                            <input
                                type="tagline"
                                name="tagline"
                                placeholder="One sentence tagline"
                                value={this.state.tagline}
                                onChange={this.handleChange}
                                required
                            />
                        </label><br />
                    </div>

                    <div>
                        <label>
                            <p>Understanding 'the why' behind our behaviors (good and bad) is absolutely crucial to maintaining focus. Write one sentence describing <i>your</i> true 'why' for getting stronger and, more importantly, healthier.</p>
                            <input
                                type="why"
                                name="why"
                                placeholder="Your 'why'"
                                value={this.state.why}
                                onChange={(e) => this.setState({ why: e.target.value })}
                                required
                            />
                        </label><br />
                    </div>

                    <div>
                        <label>
                            <p>What is your biggest advantage? That is, what do you have going for you that will help you with your Fitness, Nutrition, Life, etc. goals?</p>
                            <input
                                type="advantage"
                                name="advantage"
                                placeholder="Your advantage"
                                value={this.state.advantage}
                                // onChange={(e) => this.setState({ isAdmin: e.target.checked })}
                                onChange={this.handleChange}
                            />
                        </label><br />
                    </div>

                    <div>
                        <button type="submit">Complete Profile </button>
                    </div >

                </form>
            </div >
        )
    }
}

export default SKProfiles;



