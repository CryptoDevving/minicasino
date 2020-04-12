import React from 'react';
import '../stylesheet.css'
import "./WheelApplet.css"
import Wheel from "./presentational components/Wheel";
import Button from "@material-ui/core/Button";

const arrowStyle = {
    position: "absolute",
    top: -181,
    left: -50,
    fontSize: 100,
    color: "red"
};
const resultBoxStyle = {
    position: "absolute",
    top: -62.5,
    left: 50,
    padding: "30px",
    height: 85,
    width: 85,
    border: "solid black 3px",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "cornflowerblue"
};
const buttonHeight = 40;

export default class WheelApplet extends React.Component { // height, width, fields and padding should be props
    constructor(props) {
        super(props);
        this.state = {
            spinDegrees: 0,
            spinDuration: 0,
            spinning: false,
            lastResult: null
        };
    }
    render(){
        return (
            <div className="flex-container" id="wheelflex">
                <div>
                    <Wheel height={this.props.height-buttonHeight}
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
                            disabled={this.state.spinning}
                            style={{
                                display: "block",
                                width: "100%"
                            }}
                    >
                        Spin the wheel!
                    </Button>


                </div>
                <div style={{position: "relative", height: "100%"}}>
                    <p style={arrowStyle}>&larr;</p>
                    <div style={resultBoxStyle}>{this.state.lastResult}</div>
                </div>


            </div>

        )
    }
    start(){
        let duration = 5 + Math.random() * 20; // Seconds
        setTimeout(() => this.setState({
            spinning: false,
            spinDuration: 0,
            lastResult: 9
        }), duration * 1000);
        this.setState({
            spinning: true,
            spinDegrees: 360 + Math.random() * 5000, // Degrees
            spinDuration: duration
        });
    }
}