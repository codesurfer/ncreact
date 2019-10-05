import React, { Component } from 'react';


class Edit extends Component {

    render() {
        return (
            <div>
                <div className="formGroupform-group">
                    <label for="Name">Email address</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Enter Name" />
                </div>
            </div>);
    }
}