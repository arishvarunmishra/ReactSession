/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
import {render} from 'react-dom';
import User from './component/User.js';
import Calculator from './component/Calculator.js';
import ProgressBar from './component/ProgressBar.js';
import MyCard from './component/MyCard.js';

/*
 render(<div>Exercise-1 <User/> Exercise-2 <Calculator/></div>, document.getElementById('app'));
render(<ProgressBar  downloaded={50} user={{'id':10}}/>, document.getElementById('app'));
 /*/

render(<MyCard/>, document.getElementById('app'));

