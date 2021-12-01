import React from 'react';
import ReactDOM from 'react-dom';
///import PrimeraApp from './PrimeraApp';
///import TareaCounterApp from './TareaCounterApp';
import HooksCounterApp from './HooksCounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

///ReactDOM.render(< PrimeraApp saludo='Yo soy inevitable'/>, divRoot);

ReactDOM.render(<HooksCounterApp value={10}/>, divRoot);
