import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Users extends Component {

    render() {
        return (
            <div>
        <Card>
            <CardImg top width="20%" src="https://cdn.pixabay.com/photo/2016/04/02/04/14/bell-pepper-1302126_960_720.jpg" alt="Card image cap" />
            <CardBody>
            <CardTitle>{this.props.user.name}</CardTitle>
            <CardSubtitle>{this.props.user.company}</CardSubtitle>
            <CardText>{this.props.user.description}</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
    </div>
        )
    }
} 
export default Users;