import React from 'react';
import  "./Button.scss"
export default class Button extends React.Component {
    render() {
        const {optionalСlassName, backgroundColor, text, onClick } = this.props;

        return (
        <button
            className={"btn " + optionalСlassName}
            style={{ backgroundColor }}
            onClick={onClick}
        >
            {text}
        </button>
        );
    }
}