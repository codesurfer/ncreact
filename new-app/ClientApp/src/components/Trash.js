import React, { Component } from 'react';

export class Trash extends Component {
    render() {
        return (
            <div>
                Trash loaded ...
                <label>{this.props.header}</label>
            </div>);
    }
}
export default Trash;