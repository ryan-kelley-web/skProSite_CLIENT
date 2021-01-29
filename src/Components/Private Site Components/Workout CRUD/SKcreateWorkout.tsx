import React, { Component } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


interface SKWktC_tsProps {
    token: string | null;
}

interface SKWktC_tsState {
    workoutIntention: string;
    workoutTitle: string;
    workoutItself: string;
    workoutGuidance: string;
    workoutPublishDate: string;
    workoutAuthor: string;
    dropdownOpen: boolean
}

class SKcreateWorkout extends Component<SKWktC_tsProps, SKWktC_tsState>{
    constructor(props: SKWktC_tsProps) {
        super(props)

        this.toggle = this.toggle.bind(this);

        this.state = {
            workoutIntention: '',
            workoutTitle: '',
            workoutItself: '',
            workoutGuidance: '',
            workoutPublishDate: '',
            workoutAuthor: '',
            dropdownOpen: false
        }
    }



    toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen })

    // setDropdownOpen(prevState => !prevState);



    render() {
        return (
            <div>
                <h1>Create New Workout</h1>

                <label>
                    Workout Intention
                </label>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Select one
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>
                            Workout Intention Categories
                            </DropdownItem>

                        <DropdownItem>
                            Strength
                        </DropdownItem>
                        <DropdownItem divider />

                        <DropdownItem>
                            Mobility
                        </DropdownItem>
                        <DropdownItem divider />

                        <DropdownItem>
                            Cardio & HIIT
                        </DropdownItem>
                        <DropdownItem divider />

                    </DropdownMenu>
                </Dropdown>


                <label>
                    Workout Title
                    </label> <br />

                <textarea 
                name="workoutTitle" 
                id="workoutTitle"
                value={this.state.workoutTitle} 
                cols={100}
                rows={1}
                ></textarea> <br/>

                <label >
                    Workout Itself
                </label> <br/>

                <textarea 
                name="workoutItself"
                id="workoutItself"
                value={this.state.workoutItself} 
                cols={100} 
                rows={20}>
                </textarea> <br/>

                <label>
                    Workout Guidance
                </label> <br/>

                <textarea 
                name="workoutGuidance" id="workoutGuidance" 
                value={this.state.workoutGuidance}
                cols={100} 
                rows={10}>
                </textarea> <br/>

                <label>
                    Workout Publish Date
                </label> <br/>
                 
                 <input 
                 type="workoutPublishDate"
                 name="workoutPublishDate"
                 placeholder="MM/DD/YYYY"
                 value={this.state.workoutPublishDate}
                /> <br/>

                <label >
                    Workout Author
                </label> <br/>

                <input 
                type="workoutAuthor"
                name="workoutAuthor"
                value={this.state.workoutAuthor}
                />

            </div>
        )
    }
}

export default SKcreateWorkout
