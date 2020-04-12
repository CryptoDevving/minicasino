import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

export default function Wheel(props){
    let {height, width, padding, fields, spinDegrees, spinDuration, ...rest} = props;
    const classes = makeStyles(theme => ({
        animatedItem: { //
            animation: `$spin ${spinDuration}s ${theme.transitions.easing.easeOut} forwards`
        },
        "@keyframes spin": {
            "0%": {
                transform: "rotate(0deg)"
            },
            "100%": {
                transform: "rotate(" + spinDegrees + "deg)"
            }
        }
    }))();

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

    return (
        <svg height={height} width={width} className={classes.animatedItem} {...rest}>
            <circle cx={width/2} cy={height/2} r={r} stroke={lineColor} strokeWidth={1} fill="none"/>
            {lines}
            Sorry, your browser does not support inline SVG.

        </svg>
    )
}


function toRadians(degrees) {
    return degrees * Math.PI / 180
}