import React from 'react';
import '../stylesheet.css'
import "./WheelApplet.css"
import Wheel from "./presentational components/Wheel";
import Button from "@material-ui/core/Button";

export default class WheelApplet extends React.Component { // height, width, fields and padding should be props
    constructor(props) {
        super(props);
        this.state = {
            spinDegrees: 0,
            spinDuration: 0,
            buttonDisabled: false
        };
    }
    render(){
        return (
            <div className="flex-container" id="wheelflex">
                <div>
                    <Wheel height={this.props.height}
                           width={this.props.width}
                           padding={this.props.padding}
                           fields={this.props.fields}
                           spinDegrees={this.state.spinDegrees}
                           spinDuration={this.state.spinDuration}
                           onClick={this.start.bind(this)}
                    />
                    <Button variant="contained"
                            color="primary"
                            onClick={this.start.bind(this)}
                            disabled={this.state.buttonDisabled}
                            style={{
                                display: "block",
                                width: "100%"
                            }}
                    >
                        Spin the wheel!
                    </Button>
                </div>

            </div>

        )
    }
    start(){
        let duration = 5 + Math.random() * 20; // Seconds
        setTimeout(() => this.setState({buttonDisabled: false, spinDuration: 0}), duration * 1000);
        this.setState({
            buttonDisabled: true,
            spinDegrees: 360 + Math.random() * 5000, // Degrees
            spinDuration: duration
        });
    }
}