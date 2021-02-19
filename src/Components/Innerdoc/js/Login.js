import React, { Component } from "react";
import { Row, Col, Container} from "react-bootstrap";
import '../css/login.css';
class Login extends Component
{
    constructor()
    {
        super()
        this.state={
            Name:'',
            Password:'',
        }
    }    
    handlenameChange = (e) => 
    {
        const {name,value} = e.target
        this.setState({[name]:value})
    }
    handlesubmit = (event) =>
    {
        alert(`${this.state.Name} ${this.state.Password}`)
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
                    Name: this.documentData.Name,
                    Password: this.documentData.Password,
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
            <section class="Login">
            <Container>
                <Row>
                    <Col lg={6} className="Login-part">
                        <h1 className="Login-heading">Welcome,Customer!</h1>
                        <img className="svgimage" src="../svg/login.svg"></img>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={5} className="Login-part1">
                            <h1 className="sublogin-heading">LOGIN!</h1>
                            <form onSubmit={this.handlesubmit}>
                                <Row>
                                    <Col lg={12} className="Loginform-text">
                                    UserName:
                                    </Col>
                                    <Col lg={12}>
                                     <input type="text" name="Name" value={this.state.Name} onChange={this.handlenameChange} className="user-text" ></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} className="Loginform-text">
                                    Password:
                                    </Col>
                                    <Col lg={12}>
                                     <input type="text" name="Password" value={this.state.Password} onChange={this.handlenameChange} className="user-text" ></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col><button className="login-button">Submit</button></Col>
                                </Row>
                            </form>
                    </Col>
                </Row>
            </Container>
            </section>
        );
    }
}
export default Login;