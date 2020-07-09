import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';

import './styles.css';

import Navbar from '../Nav-bar';
import Handstop from '../../assets/gifhand.gif'

export default function Prevencao() {
    return(
        <Fragment>
            <Navbar />

            <section className="separacao">

            </section>

            <section className="box-dicas">
                <img src={ Handstop } alt="Hand"/>
                <div>
                    <h1>SIGA AS 5 DICAS</h1>
                    <p>Ajude a combater o coronavírus</p>
                    <p>1 <b>MÃOS</b> Lavar frequentemente</p>
                    <p>2 <b>COTOVELO</b> Usar para cobrir a tosse</p>
                    <p>3 <b>ROSTO</b> Não tocar</p>
                    <p>4 <b>ESPAÇO</b> Manter a distância segura</p>
                    <p>5 <b>CASA</b> Não sair, se possível</p>
                </div>
            </section>

            <div>

            </div>

        </Fragment>
    );
}
