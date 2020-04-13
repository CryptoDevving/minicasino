import React from 'react';
import '../stylesheet.css'
import "./WheelApplet.css"
import Wheel from "./presentational components/Wheel";
import Button from "@material-ui/core/Button";


const buttonHeight = 40;

export default class WheelApplet extends React.Component { // height, width, fields and padding should be props
    constructor(props) {
        super(props);
        this.state = {
            spinDegrees: 0,
            spinDuration: 0,
            spinning: false,
            lastResult: null,
            prevNumbers: []
        };
    }
    render(){
        console.log(this.state.prevNumbers);
        return (
            <div className="flex-container" id="wheelFlex">
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
                <div style={{height: "auto"}}>
                    <p id="arrow">&larr;</p>
                    <div id="resultBox">{this.state.lastResult}</div>
                </div>
                <div id="resultList" style={{maxHeight: this.props.height}}>
                    { this.state.prevNumbers.map((num) => <div className="resultListItem">{num}</div>)}
                </div>


            </div>

        )
    }
    start(){
        if (this.state.spinning){
            return;
        }
        let duration = 5 + Math.random() * 15; // Seconds
        let degrees = 360 + Math.random() * 5000; // Degrees
        let angle = (degrees / 360 - Math.floor(degrees / 360)) * 360;
        let result = this.props.fields - Math.ceil(angle / (360 / this.props.fields)) + 1;
        setTimeout(() => this.setState({
            spinning: false,
            spinDuration: 0,
            lastResult: result
        }), duration * 1000);

        this.setState({
            spinning: true,
            spinDegrees: degrees,
            spinDuration: duration,
            lastResult: null,
            prevNumbers: !! this.state.lastResult ? [this.state.lastResult, ...this.state.prevNumbers] : [...this.state.prevNumbers]
        });
    }
}