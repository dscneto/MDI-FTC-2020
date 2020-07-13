import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';

import './styles.css';

import Navbar from '../Nav-bar';
import Paises from './Paises';

export default function Casos() {
    return(
        <Fragment>
            <Navbar />
            <div className="separacao" ></div> 
            <Paises />
        </Fragment>
    );
}