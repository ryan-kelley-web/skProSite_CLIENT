import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import {
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from 'reactstrap';


interface SKWktC_tsProps {
    token: string | null;
}

interface SKWktC_tsState {
    workoutIntention: string;
    workoutTitle: string;
    workoutItself: string;
    workoutGuidance: string;
    workoutPubDate: string;
    workoutAuthor: string;
    dropdownOpen: boolean
    // dropdownValue: string;
}

class SKcreateWorkout extends Component<SKWktC_tsProps, SKWktC_tsState>{
    constructor(props: SKWktC_tsProps) {
        super(props)
        //binding area
        this.toggle = this.toggle.bind(this);
        this.postNewWorkout = this.postNewWorkout.bind(this);

        this.state = {
            workoutIntention: '',
            workoutTitle: '',
            workoutItself: '',
            workoutGuidance: '',
            workoutPubDate: '',
            workoutAuthor: '',
            dropdownOpen: false,
            // dropdownValue: ''
        }
    }



    toggle = () => this.setState({
        dropdownOpen: !this.state.dropdownOpen
    })

    postNewWorkout = (e: any) => {
        e.preventDefault();

        console.log(this.state)

        fetch('http://localhost:3000/workout/newworkout', {
            method: "POST",
            body: JSON.stringify({
                workout: {
                    workoutIntention: this.state.workoutIntention,
                    workoutTitle: this.state.workoutTitle,
                    workoutItself: this.state.workoutItself,
                    workoutGuidance: this.state.workoutGuidance,
                    workoutPubDate: this.state.workoutPubDate,
                    workoutAuthor: this.state.workoutAuthor  
                }
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token || ''
            },
        })
            .then((response) => response.json())
            .then((wkt) => {
                console.log(wkt);
                console.log(this.props.token)
                this.setState({
                    workoutIntention: wkt.workoutIntention,
                    workoutTitle: wkt.workoutTitle,
                    workoutItself: wkt.workoutItself,
                    workoutGuidance: wkt.workoutGuidance,
                    workoutPubDate: wkt.workoutPubDate,
                    workoutAuthor: wkt.workoutAuthor
                });
            })
            .catch((err) => {
                console.log("display newworkout in skcreateWkt error", err)
            })
    }

    // setDropdownOpen(prevState => !prevState);

    handleChange = (e: any) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div>

                <form
                    onSubmit={this.postNewWorkout}>

                    <h1>Create New Workout</h1>

                    <label>
                        Workout Intention
                </label> <br />

                    <select
                        name="workoutIntention"
                        id="workoutIntention"
                        value={this.state.workoutIntention}
                        onChange={this.handleChange} >

                        <option disabled>Workout Intention Categories</option>

                        <option
                            value="strength" >
                            Strength
                        </option>

                        <option
                            value="mobility">
                            Mobility
                            </option>

                        <option
                            value="cardio&hiit">
                            Cardio & HIIT
                                </option>
                    </select> <br />

                    


                    <label>
                        Workout Title
                    </label> <br />

                    <textarea
                        name="workoutTitle"
                        id="workoutTitle"
                        onChange={this.handleChange}
                        value={this.state.workoutTitle}
                        cols={100}
                        rows={1}
                    ></textarea> <br />

                    <label >
                        Workout Itself
                </label> <br />

                    <textarea
                        name="workoutItself"
                        id="workoutItself"
                        onChange={this.handleChange}
                        value={this.state.workoutItself}
                        cols={100}
                        rows={20}>
                    </textarea> <br />

                    <label>
                        Workout Guidance
                </label> <br />

                    <textarea
                        name="workoutGuidance" id="workoutGuidance"
                        onChange={this.handleChange}
                        value={this.state.workoutGuidance}
                        cols={100}
                        rows={10}>
                    </textarea> <br />

                    <label>
                        Workout Publish Date
                </label> <br />


                    <input
                        type="workoutPubDate"
                        name="workoutPubDate"
                        placeholder="MM/DD/YYYY"
                        onChange={this.handleChange}
                        value={this.state.workoutPubDate}
                    /> <br />


                    <label >
                        Workout Author
                </label> <br />

                    <input
                        type="workoutAuthor"
                        name="workoutAuthor"
                        onChange={this.handleChange}
                        value={this.state.workoutAuthor}
                    /> <br/> <br/>

                    <button
                    type="submit"
                    >Post Workout
                    </button>

                </form>
            </div>
        )
    }
}

export default SKcreateWorkout
