import React, { Fragment } from 'react';
import {FiArrowRight} from 'react-icons/fi';
//import { Link } from 'react-router-dom';

import './styles.css';

import Navbar from '../Nav-bar';

export default function Noticias() {
    return(
        <Fragment>
            <Navbar />

            <div className="separacao"></div>

            <div className="exibir-noticia">
                <h1 className="titulo">Titulo</h1>
                <h3 className="descricao">Descrição</h3>
                <h4 className="fonte">Fonte</h4>
                <a href="" className="link">
                    Leia mais 
                    <FiArrowRight size={16} />
                    </a>    
            </div>

        </Fragment>
    );
}