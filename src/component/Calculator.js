/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
import Input from './Input.js'
import Button from "./Button.js";
export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }
    onChangeHandler= (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    clickHandler = (operation) => {
        let value=this.state.inputValue;
        if(operation=='clear'){
            value='';
        }else if(operation =='='){
            value =eval(this.state.inputValue);
        }else{
            value =this.state.inputValue+operation
        }
        this.setState({
            inputValue: value
        });
    };

    render() {
        return (<div >
            {<Input  value={this.state.inputValue}  onChange={(e) => this.onChangeHandler(e)} />
            }<Button buttonName="+" onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button buttonName="-"  onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button buttonName="*"  onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button buttonName="/" onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button buttonName="=" onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button buttonName="clear" onClick={(buttonName) => this.clickHandler(buttonName)}/>
        </div>)
    }
}



