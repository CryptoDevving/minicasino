import React from 'react';
import "./WheelApplet.css"
import Wheel from "./presentational components/Wheel";

export default class WheelApplet extends React.Component { // height, width, fields and padding should be props
    scheduler;

    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            rpm: 0,
            spinStart: undefined
        };
    }
    render(){
        return (
            <React.Fragment>
                <Wheel height={this.props.height}
                       width={this.props.width}
                       padding={this.props.padding}
                       fields={this.props.fields}
                       rpm={this.state.rpm}
                       spinning={this.state.spinning}
                />
                <button onClick={this.start.bind(this)}>Start!</button>
            </React.Fragment>

        )
    }
    start(){
        let now = new Date();
        this.setState({spinning: true, rpm: this.props.startSpeed, spinStart: now.getTime()});
        this.scheduler = setInterval(this.updateSpeed.bind(this), 0.01);
    }
    updateSpeed(){
        if (! this.state.spinning){
            return
        }
        let now = new Date();
        let elapsed = now.getTime() - this.state.spinStart;
        if (elapsed > this.props.spinDuration){
            this.setState({
                rpm: 0,
                spinning: false,
                spinStart: undefined
            });
            clearInterval(this.scheduler)
        }
        else {
            this.setState((state, props) => ({
                rpm: elapsed / props.spinDuration * props.startSpeed
            }))
        }

    }
}