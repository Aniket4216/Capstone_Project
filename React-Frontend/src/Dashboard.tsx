import { Component } from "react";
import { Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import { IoSchoolOutline,IoMan,IoSettings} from "react-icons/io5"
import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { AddStudentModal } from "./AddStudentModal";

interface MyState{
    students: [];
    isOpen: boolean;
}

export class Dashboard extends Component<{}, MyState>{

    state : MyState = {
        students: [],
        isOpen: false

    }

    componentDidMount() {
        axios.get("http://localhost:7071/list")
            .then(res => {
                const students = res.data
                this.setState({students})
            });
    }

    toggle = () => {
        this.setState((prevState) => ({isOpen : !prevState.isOpen}))
    }

    render() {
        return (
            <div>
                <Navbar color='dark' light mb-2>
                    <NavbarBrand className="text-white">
                        <IoSchoolOutline className="font-size-xxl"/>
                        <span className="font-size-l ml-3">
                            School Management Application
                        </span>
                    </NavbarBrand>
                </Navbar>
                <Container className="mt-3">
                    <Row>
                        <Col sm='4'>
                            <Card body>
                                <CardTitle tag="h5" className="text-dark">
                                    <IoMan className="font-size-xl text-dark"/> 86 Student
                                </CardTitle>
                                <CardText className="text-dark">
                                    Our card text, that should match the objectif of management
                                </CardText>
                                <Button className="btn btn-secondary ,text-dark">Manage Students</Button>
                            </Card>
                        </Col>
                        <Col sm='4'>
                            <Card body>
                                <CardTitle tag="h5" className="text-dark">
                                    <IoSchoolOutline className="font-size-xl ,text-dark"/> 22 Teacher
                                </CardTitle>
                                <CardText className="text-dark">
                                    Our card text, that should match the objectif of management
                                </CardText>
                                <Button className="btn btn-secondary ,text-dark">Manage Teachers</Button>
                            </Card>
                        </Col>
                        <Col sm='4'>
                            <Card body>
                                <CardTitle tag="h5" className="text-dark">
                                    <IoSettings className="font-size-xl text-dark"/> 30 Employees
                                </CardTitle>
                                <CardText className="text-dark">
                                    Our card text, that should match the objectif of management
                                </CardText>
                                <Button className="btn btn-secondary ">Manage Employees</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <AddStudentModal isOpen={this.state.isOpen} toggle={ this.toggle }/>

                <Container className="mt-4">
                    <Row>
                        <Col sm='12'className="text-center">
                            <Button className="btn btn-success block" id= "add" onClick={this.toggle}>
                                <span className="font-size-l">Add New Student</span> 
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-4">
                    {this.state.students.map(student => renderStudent(student))}
                </Container>
            </div>
        )
    }


}

function renderStudent(s: any){
        return (
            <Row>
                <Col sm="12">
                    <Card body>
                        <CardTitle tag="h5" className="text-dark">
                            <IoMan className="font-size-xl text-dark" /> {s.firstName+" "+s.lastName}
                        </CardTitle>
                        <CardBody>
                        <Row>
                            <Col sm="2" className="text-center">
                                    <span className="font-weight-bold text-dark"><b>Roll No.</b></span>
                                    <span className="text-dark">{" "+s.id }</span>
                                </Col>
                                <Col sm="2" className="text-center">
                                    <span className="font-weight-bold text-dark"><b>Class</b></span>
                                    <span className="text-dark">{" "+s.cls }</span>
                                </Col>
                                <Col sm="2" className="text-center">
                                    <span className="font-weight-bold text-dark"><b>Age</b></span>
                                    <span className="text-dark">{" "+s.age }</span>
                                </Col>
                                <Col sm="2" className="text-center">
                                    <span className="font-weight-bold text-dark"><b>Mobile No.</b></span>
                                    <span className="text-dark">{" "+s.mobile }</span>
                                </Col>
                                <Col sm="2" className="text-center">
                                    <span className="font-weight-bold text-dark"><b>Teacher</b></span>
                                    <span className="text-dark">{" "+s.teacher} </span>
                                </Col>
								<Col sm="2" className="text-center">
                                    <span className="font-weight-bold text-dark"><b>Gender</b></span>
                                    <span className="text-dark">{" "+s.gender} </span>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                        <Row>
                                <Col sm-6>
                                    <Button className="btn btn-outline-primary block" onClick={()=>updateStudent(s.id)}>
                                        Edit
                                    </Button>
                                </Col>
                                <Col sm-6>
                                    <Button className="btn btn-outline-danger block" onClick={()=>deleteStudent(s.id)} >
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        )
}
function deleteStudent(id: String): void {
    axios.post(`http://localhost:7071/delete/${id}`)
    window.location.reload();
}
function updateStudent(id: String): void {
    
    axios.post(`http://localhost:7071/updateStudent/${id}`)
    window.location.reload();
}

