import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';

import './styles.css';

import Navbar from '../Nav-bar';

export default function Noticias() {
    return(
        <Fragment>
            <Navbar />

            <div className="separacao">

            </div>

            <div className="exibir-noticia">
                <p>
                    Titulo
                    Descrição
                    Publicado em
                    Link
                </p>       
            </div>

            <div className="exibir-noticia">
                <p>
                    Titulo
                    Fonte
                    Texto
                    Link
                </p>       
            </div>

            <div className="exibir-noticia">
                <p>
                    Titulo
                    Fonte
                    Texto
                    Link
                </p>       
            </div>
        </Fragment>
    );
}