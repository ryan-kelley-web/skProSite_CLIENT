import React, { Component } from 'react';


interface SKPub_tsProps {
    updateToken: (token: string, profile: {} | null) => void;
}

interface SKPub_tsState {
    name: string; email: string; password: string; isAdmin: boolean;
}

class SKPublicSite extends Component<SKPub_tsProps, SKPub_tsState> {
    constructor(props: SKPub_tsProps) {
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
                <h1>***SKPUB-LEVEL***</h1>
                <h1>Finding Strength with Strezo</h1>
                <h3>Move. Nourish. Flourish.</h3>
                <h3>Build Competence and Confidence with Evidence-based Fitness & Nutrition Coaching</h3>
                <h3>Conditioning for Your Life</h3>
                <h3>By <i>Showing Up</i>, You're Training Yourself to Show Up Even Better Next Time</h3>

                <ul>
                    <li><h3>1:1 Personal Training</h3></li>
                    <li><h3>Group Training</h3></li>
                    <li><h3>Workshops & Seminars</h3></li>

                </ul>

            </div>

        )
    }
}

export default SKPublicSite;
