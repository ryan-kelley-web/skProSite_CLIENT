import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import SKreadOneWorkout from './SKreadOneWorkout';


interface SKWktR_tsProps {
    token: string | null;
    showSKWktR_ONE: (e: boolean) => void;
    viewWorkout: (e: any) => void;
    singleWkt: any;

}

interface SKWktR_tsState {
    wkt: any;
    showSingle: boolean;
}

class SKreadAllWorkouts extends Component<SKWktR_tsProps, SKWktR_tsState>{
    constructor(props: SKWktR_tsProps) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getAllWorkouts = this.getAllWorkouts.bind(this);

        this.state = {
            wkt: [],
            showSingle: true
            // workoutIntention: '',
            // workoutTitle: '',
            // workoutItself: '',
            // workoutGuidance: '',
            // workoutPubDate: '',
            // workoutAuthor: '',
        }
    }

    getAllWorkouts = () => {
        // e.preventDefault();

        fetch('http://localhost:3000/workout/allworkouts',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token || ''
                },
            })
            .then((response) => response.json())
            .then((wkt) => {
                console.log(wkt);
                // console.log(this.props.token)
                this.setState({
                    wkt: wkt
                });

            })
            .catch((err) => {
                console.log("SKreadAllWorkouts error", err)
            })
    }


    componentDidMount = () => {
        this.getAllWorkouts();
    }


    render() {
        return (
            <div>
                <h1>fSwS Workout Collection</h1> <br />

                <Container>

                    <Row>
                        {this.state.wkt.map(
                            (current: any, index: any) => (
                                <Col key={index}>
                                    {console.log(current)}
                                    <Card>
                                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                        <CardBody>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">{current.workoutIntention}</CardSubtitle>
                                            <CardTitle tag="h5">{current.workoutTitle}</CardTitle>
                                            <CardText>{current.workoutPubDate}</CardText>
                                            <CardText>Brief description of workout.</CardText>

                                            {/* <Button
                                                onClick={() => this.props.showSKWktR_ONE(this.state.showSingle)}
                                            >
                                                View workout
                                                </Button> */}


                                            <Link to='/workout/viewworkout'
                                                // onChange={() => this.props.viewWorkout}
                                                onClick={()=>this.props.viewWorkout(current.id)}>
                                                    View Workout
                                                    </Link>

                                        </CardBody>
                                    </Card><br />
                                </Col>
                            )
                        )}

                    </Row>

                </Container>

            </div>
        )
    }
}


export default SKreadAllWorkouts;
