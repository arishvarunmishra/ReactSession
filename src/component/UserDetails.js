/**
 * Created by varun on 13/9/17.
 */
import React from 'react';

export default class UserDetails extends React.Component {
    constructor() {
        super();
    }

    render() {

        const styleImage = {
            height:200,
            width:200
        };
        const styleName = {
            color: '#000000',
            fontSize:20
        };
        const styleAge = {
            color: '#443183',
            fontSize:15,
            float:'right'
        };
        const styleDiv = {
            width:170,
            background:'#dee1de',
            padding:15,
        };
        const styleLi = {
            listStyle: 'none'
        };


        return (<li style={styleLi}>
            <img style={styleImage} src={this.props.user.avatar} alt={this.props.user.avatar}/>
            <div style={styleDiv} >
                <div style={styleName} >{this.props.user.name} <span style={styleAge}> {this.props.user.age} </span> </div>
            </div>
        </li>)
    }
}
