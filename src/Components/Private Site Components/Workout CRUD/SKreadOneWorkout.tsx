import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';


interface SKWktR_ONE_tsProps {
    token: string | null;
    // showSKWktR_ONE: boolean;
    viewWorkout: (e: any) => void;
    singleWkt: any;

}

interface SKWktR_ONE_tsState {
}

class SKreadOneWorkout extends Component<SKWktR_ONE_tsProps, SKWktR_ONE_tsState>{
    constructor(props: SKWktR_ONE_tsProps) {
        super(props)
        // this.viewWorkout=this.viewWorkout.bind(this);

        this.state = {
        }
    }


    componentDidMount() {
        // this.props.viewWorkout();
    }


    render() {
        return (
            <div>
                
                <Jumbotron>
                    <p className="lead">{this.props.singleWkt.workoutIntention}</p>

                    <h1 className="display-3">{this.props.singleWkt.workoutTitle}</h1>
                    <hr className="my-2" />
                    <p>{this.props.singleWkt.workoutPubDate}</p>
                    <p>{this.props.singleWkt.workoutAuthor}</p>
                    <p>{this.props.singleWkt.workoutItself}</p>
                    <p>{this.props.singleWkt.workoutGuidance}</p>


                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>


            </div>
        )
    }
}

export default SKreadOneWorkout;
