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

    let triangles=[];
    let i;
    for (i=0;i < fields;i++)
    {
        let angle = i * 360/fields;
        let angle2 = (i + 1) * 360/fields;
        let x1 = Math.cos(toRadians(angle)) * r + centerx;
        let y1 = Math.sin(toRadians(angle)) * r + centery;
        let x2 = Math.cos(toRadians(angle2)) * r + centerx;
        let y2 = Math.sin(toRadians(angle2)) * r + centery;
        triangles.push(
            <React.Fragment key={i}>
                <polygon
                    points={x1 + "," + y1 + " " + centerx + "," + centery + " " + x2 + "," + y2}
                    style={{
                        fill: "lime",
                        stroke: lineColor,
                        strokeWidth: 1
                    }}
                />
                <text x={Math.cos(toRadians(0)) * r * 5/6 + centerx}
                      y={Math.sin(toRadians(0)) * r * 5/6 + centery}
                      transform={`rotate(${(angle + angle2)/2} ${centerx} ${centery})`}
                >
                    {i+1}
                </text>
            </React.Fragment>
        );
    }

    return (
        <svg height={height} width={width} className={classes.animatedItem} {...rest}>
            {triangles}
            Sorry, your browser does not support inline SVG.

        </svg>
    )
}


function toRadians(degrees) {
    return degrees * Math.PI / 180
}