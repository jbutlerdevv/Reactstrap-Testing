import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Users from '../Users/Users';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    name: "Josh Butler",
                    company: "Woz-U",
                    description: "Hopefully I get this job."
                },
                {
                    name: "John Spazz",
                    company: "Siesta Market",
                    description: "He's retiring today."
                },
                {
                    name: "Gary Wright",
                    company: "Siesta Market",
                    description: "This guy is the general manager."
                }
            ]
        }
    }

    // "index" declared as a function parameter and including "key={index}" creates a unique ID
    render() {
        let allUsers = this.state.users.map((user, index) => {
            return(
                <Col key={index} sm='4'>
                    <Users user={user} />
                </Col>
            )
        })
        return (
            <Container fluid>
                <Row>
                    {allUsers}
                </Row>
            </Container>
        )
    }
}

export default Home;