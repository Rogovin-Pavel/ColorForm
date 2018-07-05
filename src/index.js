import React from 'react';
import ReactDOM from 'react-dom';
import AddColorForm from './AddColorForm';
const logColor = (title, color) =>
    console.log(`New color: ${title} | ${color}`);

ReactDOM.render(<AddColorForm onNewColor={logColor}/>, document.getElementById('root'));
