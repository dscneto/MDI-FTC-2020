import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiPlusSquare, FiClipboard, FiCrosshair, FiCompass} from 'react-icons/fi';
import { FaPaw } from 'react-icons/fa';

import lockImg from '../../assets/Lockdown.png';

import './noticiasStyles.css';

export default function Noticias() {
    return(
    <section className="barra-navegacao">
        <Link to="/">
            <img className="logo" src={lockImg} alt="Lockdown" />
        </Link>
        <section className="navegacao">
            <div>
                <a href="/noticias">
                <FiFileText size={32} />
                Notícias
                </a>
            </div>
            
            <div>
                <a href="/prevencao">
                    <FiPlusSquare size={32} />
                    Prevenção
                </a>
            </div>

            <div>
                <a href="/pets">
                    <FaPaw size={32} />
                    Pets
                </a>
            </div>
        
            <div>
                <a href="/servicos">
                    <FiClipboard size={32} />
                    Serviços
                </a>
            </div>
        
            <div>
                <a href="/casos">
                    <FiCrosshair size={32} />
                    Casos
                </a>
            </div>
        
            <div>
                <a href="/sobre">
                    <FiCompass size={32} />
                    Sobre
                </a>
            </div>
        </section>
    </section>
    );
}