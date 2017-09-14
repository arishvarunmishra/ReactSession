/**
 * Created by varun on 13/9/17.
 */

import React from 'react'
export default class Button extends React.Component {

    render() {

        const styleButton = {
            display: 'inline-block',
            marginRight: 5,
            padding:10,
            width:'10%',
            fontSize: 24,
            verticalAlign: 'middle'

        };
        return (<button style={styleButton} onClick={() =>this.props.onClick(this.props.buttonName)}>{this.props.buttonName}</button>)
    }
}

