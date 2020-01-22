import React from 'react';

function LgIcon(props) {

    if(props.selected) return (
        <a href={props.address}>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className={"fa fa-" + props.icon + " fa-stack-1x fa-inverse"}></i>
            </span>
        </a>);
    else return (
        <a href={props.address} target={props.target || "_self"}>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                <i className={"fa fa-" + props.icon + " fa-stack-1x"}></i>
            </span>
        </a>);

}

export default LgIcon;