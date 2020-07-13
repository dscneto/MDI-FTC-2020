import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

//Primeira linha de paises:
import Img001 from '../../../assets/Paises/200-south-africa.png';
import Img002 from '../../../assets/Paises/099-albania.png';
/*
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';

//Segunda linha de paises:
import Img001 from '../../../assets/Paises/200-south-africa.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';

//Terceira linha de paises:
import Img001 from '../../../assets/Paises/200-south-africa.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';

//Quarta linha de paises:
import Img001 from '../../../assets/Paises/200-south-africa.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';

//Quinta linha de paises:
import Img001 from '../../../assets/Paises/200-south-africa.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';

//Sexta linha de paises:
import Img001 from '../../../assets/Paises/200-south-africa.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
import Img002 from '../../../assets/Paises/099-albania.png';
*/

export default function Navbar() {
    return(
        <section className="paises">

            <div className="linhaPaises">        
                <div className="pais"> 
                    <Link to='' >
                        <img src={Img001} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>
            </div>    

            <div className="linhaPaises">        
                <div className="pais"> 
                    <Link to='' >
                        <img src={Img001} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Africa do Sul" />
                    </Link>
                </div>
            </div>    

        </section>
    );
}

