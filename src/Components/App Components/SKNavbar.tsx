import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';



export class SKNavbar extends Component {
    render() {
        return (



            <div className="Navbar">
                <Container>
                    <Row>

                        <Col>

                            <Link
                                className='logo'
                                to="/"><span className='eff'>finding</span>Strength<span className='dubbleyooh'>with</span>Strezo</Link>
                        </Col>

                        {/* </Row>

                    <Row> */}
                        <Col>
                            <Link
                                className='navlinks'
                                to="/about">About</Link>

                        </Col>

                        <Col>
                            <Link
                                className='navlinks'
                                to="/contact">Contact</Link>

                        </Col>

                        <Col>
                            <Link
                                className='navlinks'
                                to="/LTTSblog">Blog</Link>
                        </Col>


                        <Col>
                            <Link
                                className='navlinks'
                                to="/login">fSwS Portal</Link>

                        </Col>
                    </Row>



                </Container>

            </div>







        )
    }
}

export default SKNavbar;
