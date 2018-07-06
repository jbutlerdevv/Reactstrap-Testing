import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Users extends Component {

    render() {
        let { id, name, company, description } = this.props.user;
        return (
            <div>
        <Card>
            <CardImg top width="20%" src="https://cdn.pixabay.com/photo/2016/04/02/04/14/bell-pepper-1302126_960_720.jpg" alt="Card image cap" />
            <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button onClick={() => this.props.removeUser(id)}>Delete</Button>
            </CardBody>
        </Card>
    </div>
        )
    }
} 
export default Users;