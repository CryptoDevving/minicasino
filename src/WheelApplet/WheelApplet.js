import React from 'react';
import "./WheelApplet.css"
import Wheel from "./presentational components/Wheel";

export default class WheelApplet extends React.Component { // height, width, fields and padding should be props
    constructor(props) {
        super(props);
        this.state = {
            spinStart: undefined,
            spinDegrees: 0,
            spinDuration: 0
        };
    }
    render(){
        return (
            <div>
                <Wheel height={this.props.height}
                       width={this.props.width}
                       padding={this.props.padding}
                       fields={this.props.fields}
                       spinDegrees={this.state.spinDegrees}
                       spinDuration={this.state.spinDuration}
                       onClick={this.start.bind(this)}
                />
                <button onClick={this.start.bind(this)}>Start!</button>
            </div>

        )
    }
    start(){
        this.setState({
            spinDegrees: 360 + Math.random() * 5000, // Degrees
            spinDuration: 5 + Math.random() * 20 // Seconds
        });
    }
}