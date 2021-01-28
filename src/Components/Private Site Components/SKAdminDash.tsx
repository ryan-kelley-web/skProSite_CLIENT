import React, { Component } from 'react'
import { Link } from 'react-router-dom';

interface SKAdm_tsProps {
    token: string | null;
}

interface SKAdm_tsState {
    name: string;
    // email: string;
    cityState: string;
    tagline: string;
    why: string;
    advantage: string;
}

class SKAdminDash extends Component<SKAdm_tsProps, SKAdm_tsState> {
    constructor(props: SKAdm_tsProps) {
        super(props)
        this.componentDidMount = this.componentDidMount?.bind(this);
        this.displaySKDash = this.displaySKDash.bind(this);

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
            .catch((err) => { console.log("display userprofile in skadm error", err) })
    }




    //fetch for userprofile data
    componentDidMount = () => {
        this.displaySKDash();
    }



    render() {
        return (
            <div>
                <h1>***SKADM-LEVEL***</h1>
                <h3>Admin Dashboard</h3>
                <ul>
                    <p>USER-PROFILE MGMT</p>
                    <Link to='/allusers'>Display all user-profiles</Link><br />
                    <Link to='/edituser/:userId'>Edit user-profiles</Link><br />
                    <Link to='/deleteuser/:userId'>Delete user-profiles</Link><br />
                </ul>

                <ul>
                    <p>WORKOUT MGMT</p>
                    <Link to='/allworkouts'>Display all workouts</Link><br />
                    <Link to='/newworkout'>Create new workout</Link><br />
                    <Link to='/editworkout/:workoutId'>Edit workout</Link><br />
                    <Link to='deleteworkout/:workoutId'>Delete workout</Link><br />
                </ul>

                <ul>
                    <p>BLOG MGMT</p>
                    <Link to='allblogs'>Display all blogs</Link><br />
                    <Link to='/newblog'>Create new blog</Link><br />
                    <Link to='editblog/:blogId'>Edit blog</Link><br />
                    <Link to='deleteblog/:blogId'>Delete blog</Link><br />

                </ul>
            </div>
        )
    }
}

export default SKAdminDash
