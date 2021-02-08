import React, { Component } from "react";
import { Row, Col, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import  './signup.css';
class Signup extends Component
{
    constructor()
    {
        super()
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            password:''
        }
    }    
    handlenameChange = (e) => 
    {
        const {name,value} = e.target
        this.setState({[name]:value})
    }
    handlesubmit = (event) =>
    {
        event.preventDefault()
        var a = [];
        a = JSON.parse(localStorage.getItem('document')) || [];
        a.push(this.state);
        localStorage.setItem('document', JSON.stringify(a));
        alert("successfully upload");
    }
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));
     
        if (localStorage.getItem('document')) {
                this.setState({
                    firstname: this.documentData.firstname,
                    lastname: this.documentData.lastname,
                    email: this.documentData.email,
                    phone: this.documentData.phone,
                    password: this.documentData.password,
            })
        } 
        else {
            this.setState({
                Name: '',
                Password: '',
            })
        }
    }
    render()
    {
        return(
            <>
            <Container className="signup">
                <Row>
                    <Col lg={7} className="Login-part">
                        <h1 className="Login-heading">Hey,Customer!</h1>
                        <div className="svg-block">
                        <img className="svgimage" src="../svg/login.svg"></img>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={4} className="Login-part1">
                            <h1 className="sublogin-heading">Sign-Up</h1>
                            <form onSubmit={this.handlesubmit}>
                                <Row>
                                    <Col lg={12} className="Loginform-text">
                                    FirstName:
                                    </Col>
                                    <Col lg={12}>
                                     <input type="text" name="firstname" value={this.state.firstname} onChange={this.handlenameChange} className="user-text" ></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} className="Loginform-text">
                                    LastName:
                                    </Col>
                                    <Col lg={12}>
                                     <input type="text" name="lastname" value={this.state.lastname} onChange={this.handlenameChange} className="user-text" ></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} className="Loginform-text">
                                    Email-id:
                                    </Col>
                                    <Col lg={12}>
                                     <input type="email" name="email" value={this.state.email} onChange={this.handlenameChange} className="user-text" ></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} className="Loginform-text">
                                    Phone-no:
                                    </Col>
                                    <Col lg={12}>
                                     <input type="text" name="phone" value={this.state.phone} onChange={this.handlenameChange} className="user-text" ></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} className="Loginform-text">
                                    Password:
                                    </Col>
                                    <Col lg={12}>
                                     <input type="password" name="password" value={this.state.password} onChange={this.handlenameChange} className="user-text" ></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col><button className="button">Submit</button></Col>
                                    <Col><button className="button"><Link to="/login"  className="button-text">Login</Link></button></Col>
                                </Row>
                            </form>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}
export default Signup;