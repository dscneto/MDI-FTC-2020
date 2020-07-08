import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiPlusSquare, FiClipboard, FiCrosshair, FiCompass} from 'react-icons/fi';
import { FaPaw } from 'react-icons/fa';
import lockImg from '../../assets/Lockdown.png';
import './homeStyles.css';

export default function Home() {
    return(
    <section className="home-geral">
        <img src={lockImg} alt="Lockdown" />
        <section className="navegacao">
            <div>
                <Link to="/noticias">
                <FiFileText size={32} />
                Notícias
                </Link>
            </div>
            
            <div>
                <Link to="/prevencao">
                    <FiPlusSquare size={32} />
                    Prevenção
                </Link>
            </div>

            <div>
                <Link to="/pets">
                    <FaPaw size={32} />
                    Pets
                </Link>
            </div>
        
            <div>
                <Link to="/servicos">
                    <FiClipboard size={32} />
                    Serviços
                </Link>
            </div>
        
            <div>
                <Link to="/casos">
                    <FiCrosshair size={32} />
                    Casos
                </Link>
            </div>
        
            <div>
                <Link to="/sobre">
                    <FiCompass size={32} />
                    Sobre
                </Link>
            </div>
        </section>
    </section>
    );
}