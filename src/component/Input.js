/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
export default class Input extends React.Component {
    render() {
        const inputStyle ={
          marginBottom: 20,
            padding:10,
            fontSize: 32,
            letterSpacing:5
        };
        return (
            <div><input style={inputStyle} onChange={(e) => this.props.onChange(e)} placeholder="click any button" value={this.props.value}/></div>)
    }
}



