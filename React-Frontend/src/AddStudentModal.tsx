import axios from "axios";
import { Component } from "react";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

type MyProps = {
    isOpen: boolean
    toggle
}

export class AddStudentModal extends Component<MyProps>{

    handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const student = {
            id: data.get("id"),
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            age: data.get("age"),
            teacher: data.get("teacher"),
            mobile: data.get("mobile"),
            cls: data.get("cls"),
            gender: data.get("gender")
        }

        axios.post("http://localhost:7071/create", student)
        window.location.reload();
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle} className="text-dark">
                    Adding new wise student
                </ModalHeader>
                <ModalBody>
                    <form action="" onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <label htmlFor="id" className="text-dark">Roll No.</label>
                            </Col>
                            <Col>
                                <input type="text" id="id" name="id" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="firstName" className="text-dark">First Name</label>
                            </Col>
                            <Col>
                                <input type="text" id="firstName" name="firstName" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="lastName" className="text-dark">Last Name</label>
                            </Col>
                            <Col>
                                <input type="text" id="lastName" name="lastName" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="age" className="text-dark">Age</label>
                            </Col>
                            <Col>
                                <input type="number" id="age" name="age" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="teacher" className="text-dark">Teacher</label>
                            </Col>
                            <Col>
                                <input type="text" id="teacher" name="teacher" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="mobile" className="text-dark">Mobile No.</label>
                            </Col>
                            <Col>
                                <input type="text" id="mobile" name="mobile" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="cls" className="text-dark">Year</label>
                            </Col>
                            <Col>
                                <input type="text" id="cls" name="cls" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="gender" className="text-dark">Gender</label>
                            </Col>
                            <Col>
                                <input type="text" id="gender" name="gender" />
                            </Col>
                        </Row>
                        <Button color="primary" type="submit" id="submit">
                            Add new student
                        </Button>
                    </form>
                </ModalBody>
            </Modal>
        )
    }
}
