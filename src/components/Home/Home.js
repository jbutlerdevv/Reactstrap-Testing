import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Users from '../Users/Users';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    id: 1,
                    name: "Josh Butler",
                    company: "Woz-U",
                    description: "Hopefully I get this job."
                },
                {
                    id: 2,
                    name: "John Spazz",
                    company: "Siesta Market",
                    description: "He's retiring today."
                },
                {
                    id: 3,
                    name: "Gary Wright",
                    company: "Siesta Market",
                    description: "This guy is the general manager."
                }
            ]
        }
    }

    removeUser(id) {
        this.setState({users: this.state.users.filter(user => user.id !== id)});
    }

    // "index" declared as a function parameter and including "key={index}" creates a unique ID
    render() {
        let allUsers = this.state.users.map(user => {
            return(
                <Col sm='4'>
                    <Users key={user.id} removeUser={this.removeUser.bind(this)} user={user} />
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