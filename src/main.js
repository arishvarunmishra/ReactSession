/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
import {render} from 'react-dom';
import State from './component/State.js';
import Calculator from './component/Calculator.js';
import ProgressBar from './component/ProgressBar.js';



render(<div>Exercise-1 <State/> Exercise-2 <Calculator/></div>, document.getElementById('app'));
/*
render(<ProgressBar  downloaded={50} user={{'id':10}}/>, document.getElementById('app'));
 /*/
