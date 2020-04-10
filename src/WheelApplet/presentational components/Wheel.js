import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    animatedItem: { //
        animation: `$spin ${3000 + Math.random() * 15000}ms ${theme.transitions.easing.easeOut}`
    },
    "@keyframes spin": {
        "0%": {
            transform: "rotate(0deg)"
        },
        "100%": {
            transform: "rotate(" + (180 + Math.random()*5000) + ")"
        }
    }
}));

export default function Wheel(props){
    const classes = useStyles();
    let {height, width, padding, fields, spinning, rpm} = props;
    console.log(props);
    let r=Math.min(height, width) / 2 - 2 * padding;
    let centerx = width / 2;
    let centery = height / 2;
    let lineColor="black";

    let lines=[];
    let i;
    for (i=0;i < fields;i++)
    {
        let angle = i * 360/fields;
        let x1 = Math.cos(toRadians(angle)) * r + centerx;
        let y1 = Math.sin(toRadians(angle)) * r + centery;
        lines.push(
            <React.Fragment key={i}>
                <line
                    x1={x1}
                    y1={y1}
                    x2={centerx}
                    y2={centery}
                    strokeWidth={1}
                    stroke={lineColor}
                />
                <text x={Math.cos(toRadians(angle + 360 / fields / 2)) * r * 5/6 + centerx - 5}
                      y={Math.sin(toRadians(angle + 360 / fields / 2)) * r * 5/6 + centery + 5}>
                    {i+1}
                </text>
            </React.Fragment>
        );
    }

    let spinStyle;
    if (spinning){
        spinStyle = {"animationDuration": rpmToSecs(rpm) + "s infinite linear"};
    } else {
        spinStyle = {};
    }

    return (
        <svg height={height} width={width} className={classes.animatedItem}>
            <circle cx={width/2} cy={height/2} r={r} stroke={lineColor} strokeWidth={1} fill="none"/>
            {lines}
            Sorry, your browser does not support inline SVG.

        </svg>
    )
}

function toRadians(degrees) {
    return degrees * Math.PI / 180
}

// This function calculates how many seconds for one round for a given number of RPM
// input: rpm for animation
// output: number of seconds per full rotation for animation
function rpmToSecs(rpm) {
    return 60 / rpm
}