import React from 'react'
import propTypes from "prop-types";

export default function Button(props) {
    const className = [props.className];
    if(props.isTip) className.push("btn--tip")
    if(props.isReset) className.push("btn--reset");
    if(props.hasShadow) className.push("btn-shadow");

    const onClick = () => {
        if(props.onClick) props.onClick()
    }


    return (
        <button
            className={`btn ${className.join(" ")}`}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    className: propTypes.string,
    onClick: propTypes.func,
    isTip: propTypes.bool,
    isReset: propTypes.bool,
    hasShadow: propTypes.bool,
}