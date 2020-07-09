import React, { Fragment }  from 'react';
//import { Link } from 'react-router-dom';

import './styles.css';

import Navbar from '../Nav-bar';

export default function Pets() {
    return(
        <Fragment>
            <Navbar />

            <div className="separacao">

            </div>

            <section className="caixa-de-texto">
                <p>O coronavírus é uma família de vírus que se divide em subgrupos, sendo eles um para animais e outro para humanos. De acordo com o Conselho Regional de Medicina Veterinária (CRMV), o tipo que acomete os animais é chamado de Alphacoronavirus, que não possui semelhança com o tipo responsável pela contaminação dos humanos, que se trata do Betacoronavirus.</p>
            </section>

            <section className="caixa-de-texto">
                <p>De acordo com a Organização Mundial da Saúde (OMS) não existe comprovação na transmissão ou contaminação dos animais de estimação pelo SARS-Cov-2. É importante salientar que, embora exista vacinação contra o corona vírus que acomete os pets, ela não apresenta eficiência na cura contra o novo corona vírus causador da pandemia, portanto, humanos não devem fazer uso.</p>
            </section>

            <section className="caixa-de-texto">
                <p>Ainda que não exista a comprovação da transmissão e contaminação dos pets, não se recomenda que pessoas contaminadas entrem em contato com eles, pois essas pessoas ao tossir ou espirrar próximo aos animais, pode espalhar gotículas contaminadas em sua pelagem. Assim, caso uma outra pessoa venha a ter contato com esse animal, pode correr o risco de uma contaminação.</p>
            </section>
            
        </Fragment>
    );
}