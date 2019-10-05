import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;

    state = {
        students: [],
        loading: true
    }

    fetchStudentState = () => {

        fetch('api/SampleData/GetStudents')
            .then(response => response.json())
            .then(data => {
                console.log(data);
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
                        <td><Link to="/" className="btn btn-primary btn-lg">Klik disini</Link></td>
                    </tr>
                )}
            </tbody>
        </table>);
    }

    render() {

        return (
        <div>
            <div className="jumbotron bg-info">
                <h1 className="display-4"> .Net Conference Bogor
                </h1>
                <p className="lead">Welcome to .Net Core with React</p>
                </div>

            <h1>Yeay ! I can make Hello, world!</h1>

            <p>Welcome to your new single-page application, built with: <b>ASP.Net Core</b>&nbsp;<b>ReactJS</b></p>

                {this.renderTable()}
      </div>
    );
  }
}
