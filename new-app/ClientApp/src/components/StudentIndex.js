import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from 'jquery';

export class StudentIndex extends Component {
    static displayName = StudentIndex.name;

    state = {
        students: [],
        loading: true,
        modal: false,
        newStudent: null,
        muridBaru: {
            id : 0,
            name: "",
            address: ""
        },
        StudentName: "asd",
        StudentAddress : ""
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    modalAction = () => {
        console.log("called");
        console.log(this.state.muridBaru);
        console.log(this.state.students);
        this.setState({ ...this.state.muridBaru,id : this.state.students.length + 1 });
        this.setState({ students: [...this.state.students,this.state.muridBaru] });

        this.toggle();
    }

    fetchStudentState = () => {

        fetch('api/SampleData/GetStudents')
            .then(response => response.json())
            .then(data => {
                this.setState({ students: data, loading: false });
            });
    }

    renderTable = () => {
        if (this.state.loading) {
            this.fetchStudentState();
        }

        return (<table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {this.state.students.map(student =>
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.address}</td>
                        <td><button className="btn btn-danger btn-lg" onClick={()=>this.deleteStudent(student.id)}>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>);
    }

    handleNameChange = (event) => {
        console.log(event.target.value);
        const nS = { ...this.state.muridBaru, name: event.target.value }
        this.setState({ muridBaru: nS });
    }
    handleAddressChange = event => {
        console.log(event.target.value);
        const nS = { ...this.state.muridBaru, address: event.target.value }
        this.setState({ muridBaru: nS });

    }

    deleteStudent = (o) => {
        const filteredItems = this.state.students.filter(function (item) {
            return item.id !== o;
        })
        this.setState({ students : filteredItems });
    }

    

    render() {
        return (
            <div>
                <h1>Student List</h1>
                {this.renderTable()}
                <Button color="danger" onClick={this.toggle}>Add New</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Input type="text" placeholder="Nama" onChange={this.handleNameChange} value={this.state.muridBaru.name} />
                        <Input type="text" placeholder="Alamat" onChange={this.handleAddressChange} value={this.state.muridBaru.address} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalAction}>Save</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>);
    }
}