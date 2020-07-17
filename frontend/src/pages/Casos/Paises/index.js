import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

//256/19=13,4736842
//Primeira linha de paises:
import Img001 from '../../../assets/Paises/048-abkhazia.png';
import Img002 from '../../../assets/Paises/111-afghanistan.png';
import Img003 from '../../../assets/Paises/200-south-africa.png';
import Img004 from '../../../assets/Paises/099-albania.png';
import Img005 from '../../../assets/Paises/162-germany.png';
import Img006 from '../../../assets/Paises/045-andorra.png';
import Img007 from '../../../assets/Paises/117-angola.png';
import Img008 from '../../../assets/Paises/075-antigua-and-barbuda.png';
import Img009 from '../../../assets/Paises/133-saudi-arabia.png';
import Img010 from '../../../assets/Paises/144-algeria.png';
import Img011 from '../../../assets/Paises/198-argentina.png';
import Img012 from '../../../assets/Paises/108-armenia.png';
import Img013 from '../../../assets/Paises/234-australia.png';
import Img014 from '../../../assets/Paises/003-austria.png';
import Img015 from '../../../assets/Paises/141-azerbaijan.png';
import Img016 from '../../../assets/Paises/120-bahamas.png';
import Img017 from '../../../assets/Paises/147-bangladesh.png';
import Img018 from '../../../assets/Paises/084-barbados.png';
import Img019 from '../../../assets/Paises/138-bahrain.png';

/*
//Segunda linha:
import Img020 from '../../../assets/Paises/';
import Img021 from '../../../assets/Paises/';
import Img022 from '../../../assets/Paises/';
import Img023 from '../../../assets/Paises/';
import Img024 from '../../../assets/Paises/';
import Img025 from '../../../assets/Paises/';
import Img026 from '../../../assets/Paises/';
import Img027 from '../../../assets/Paises/';
import Img028 from '../../../assets/Paises/';
import Img029 from '../../../assets/Paises/255-brazil.png';
import Img030 from '../../../assets/Paises/';
import Img031 from '../../../assets/Paises/';
import Img032 from '../../../assets/Paises/';
import Img033 from '../../../assets/Paises/';
import Img034 from '../../../assets/Paises/';
import Img035 from '../../../assets/Paises/';
import Img036 from '../../../assets/Paises/';
import Img037 from '../../../assets/Paises/';
import Img038 from '../../../assets/Paises/';


//Terceira linha de paises:
import Img039 from '../../../assets/Paises/';
import Img040 from '../../../assets/Paises/';
import Img041 from '../../../assets/Paises/';
import Img042 from '../../../assets/Paises/';
import Img043 from '../../../assets/Paises/';
import Img044 from '../../../assets/Paises/';
import Img045 from '../../../assets/Paises/';
import Img046 from '../../../assets/Paises/';
import Img047 from '../../../assets/Paises/';
import Img048 from '../../../assets/Paises/';
import Img049 from '../../../assets/Paises/';
import Img050 from '../../../assets/Paises/';
import Img051 from '../../../assets/Paises/';
import Img052 from '../../../assets/Paises/';
import Img053 from '../../../assets/Paises/';
import Img054 from '../../../assets/Paises/';
import Img055 from '../../../assets/Paises/';
import Img056 from '../../../assets/Paises/';
import Img057 from '../../../assets/Paises/';

//Quarta linha de paises:
import Img058 from '../../../assets/Paises/';
import Img059 from '../../../assets/Paises/';
import Img060 from '../../../assets/Paises/';
import Img061 from '../../../assets/Paises/';
import Img062 from '../../../assets/Paises/';
import Img063 from '../../../assets/Paises/';
import Img064 from '../../../assets/Paises/';
import Img065 from '../../../assets/Paises/';
import Img066 from '../../../assets/Paises/';
import Img067 from '../../../assets/Paises/';
import Img068 from '../../../assets/Paises/';
import Img069 from '../../../assets/Paises/';
import Img070 from '../../../assets/Paises/';
import Img071 from '../../../assets/Paises/';
import Img072 from '../../../assets/Paises/';
import Img073 from '../../../assets/Paises/';
import Img074 from '../../../assets/Paises/';
import Img075 from '../../../assets/Paises/';
import Img076 from '../../../assets/Paises/';

//Quinta linha de paises:
import Img077 from '../../../assets/Paises/';
import Img078 from '../../../assets/Paises/';
import Img079 from '../../../assets/Paises/';
import Img080 from '../../../assets/Paises/';
import Img081 from '../../../assets/Paises/';
import Img082 from '../../../assets/Paises/';
import Img083 from '../../../assets/Paises/';
import Img084 from '../../../assets/Paises/';
import Img085 from '../../../assets/Paises/';
import Img086 from '../../../assets/Paises/';
import Img087 from '../../../assets/Paises/';
import Img088 from '../../../assets/Paises/';
import Img089 from '../../../assets/Paises/';
import Img090 from '../../../assets/Paises/';
import Img091 from '../../../assets/Paises/';
import Img092 from '../../../assets/Paises/';
import Img093 from '../../../assets/Paises/';
import Img094 from '../../../assets/Paises/';
import Img095 from '../../../assets/Paises/';

//Sexta linha de paises:
import Img096 from '../../../assets/Paises/';
import Img097 from '../../../assets/Paises/';
import Img098 from '../../../assets/Paises/';
import Img099 from '../../../assets/Paises/';
import Img100 from '../../../assets/Paises/';
import Img101 from '../../../assets/Paises/';
import Img102 from '../../../assets/Paises/';
import Img103 from '../../../assets/Paises/';
import Img104 from '../../../assets/Paises/';
import Img105 from '../../../assets/Paises/';
import Img106 from '../../../assets/Paises/';
import Img107 from '../../../assets/Paises/';
import Img108 from '../../../assets/Paises/';
import Img109 from '../../../assets/Paises/';
import Img110 from '../../../assets/Paises/';
import Img111 from '../../../assets/Paises/';
import Img112 from '../../../assets/Paises/';
import Img113 from '../../../assets/Paises/';
import Img114 from '../../../assets/Paises/';

//Setima linha de paises:
import Img115 from '../../../assets/Paises/';
import Img116 from '../../../assets/Paises/';
import Img117 from '../../../assets/Paises/';
import Img118 from '../../../assets/Paises/';
import Img119 from '../../../assets/Paises/';
import Img120 from '../../../assets/Paises/';
import Img121 from '../../../assets/Paises/';
import Img122 from '../../../assets/Paises/';
import Img123 from '../../../assets/Paises/';
import Img124 from '../../../assets/Paises/';
import Img125 from '../../../assets/Paises/';
import Img126 from '../../../assets/Paises/';
import Img127 from '../../../assets/Paises/';
import Img128 from '../../../assets/Paises/';
import Img129 from '../../../assets/Paises/';
import Img130 from '../../../assets/Paises/';
import Img131 from '../../../assets/Paises/';
import Img132 from '../../../assets/Paises/';
import Img133 from '../../../assets/Paises/';

//Oitava linha de paises:
import Img134 from '../../../assets/Paises/';
import Img135 from '../../../assets/Paises/';
import Img136 from '../../../assets/Paises/';
import Img137 from '../../../assets/Paises/';
import Img138 from '../../../assets/Paises/';
import Img139 from '../../../assets/Paises/';
import Img140 from '../../../assets/Paises/';
import Img141 from '../../../assets/Paises/';
import Img142 from '../../../assets/Paises/';
import Img143 from '../../../assets/Paises/';
import Img144 from '../../../assets/Paises/';
import Img145 from '../../../assets/Paises/';
import Img146 from '../../../assets/Paises/';
import Img147 from '../../../assets/Paises/';
import Img148 from '../../../assets/Paises/';
import Img149 from '../../../assets/Paises/';
import Img150 from '../../../assets/Paises/';
import Img151 from '../../../assets/Paises/';
import Img152 from '../../../assets/Paises/';

//Nona linha dos paises:
import Img153 from '../../../assets/Paises/';
import Img154 from '../../../assets/Paises/';
import Img155 from '../../../assets/Paises/';
import Img156 from '../../../assets/Paises/';
import Img157 from '../../../assets/Paises/';
import Img158 from '../../../assets/Paises/';
import Img159 from '../../../assets/Paises/';
import Img160 from '../../../assets/Paises/';
import Img161 from '../../../assets/Paises/';
import Img162 from '../../../assets/Paises/';
import Img163 from '../../../assets/Paises/016-nepal.png';
import Img164 from '../../../assets/Paises/';
import Img165 from '../../../assets/Paises/';
import Img166 from '../../../assets/Paises/';
import Img167 from '../../../assets/Paises/';
import Img168 from '../../../assets/Paises/';
import Img169 from '../../../assets/Paises/';
import Img170 from '../../../assets/Paises/';
import Img171 from '../../../assets/Paises/';

//Decima linha de paises:
import Img172 from '../../../assets/Paises/';
import Img173 from '../../../assets/Paises/';
import Img174 from '../../../assets/Paises/';
import Img175 from '../../../assets/Paises/';
import Img176 from '../../../assets/Paises/';
import Img177 from '../../../assets/Paises/';
import Img178 from '../../../assets/Paises/';
import Img179 from '../../../assets/Paises/';
import Img180 from '../../../assets/Paises/';
import Img181 from '../../../assets/Paises/';
import Img182 from '../../../assets/Paises/';
import Img183 from '../../../assets/Paises/';
import Img184 from '../../../assets/Paises/';
import Img185 from '../../../assets/Paises/';
import Img186 from '../../../assets/Paises/';
import Img187 from '../../../assets/Paises/';
import Img188 from '../../../assets/Paises/';
import Img189 from '../../../assets/Paises/';
import Img190 from '../../../assets/Paises/';

//Decima primeira
import Img191 from '../../../assets/Paises/';
import Img192 from '../../../assets/Paises/';
import Img193 from '../../../assets/Paises/';
import Img194 from '../../../assets/Paises/';
import Img195 from '../../../assets/Paises/';
import Img196 from '../../../assets/Paises/';
import Img197 from '../../../assets/Paises/';
import Img198 from '../../../assets/Paises/';
import Img199 from '../../../assets/Paises/';
import Img200 from '../../../assets/Paises/';
import Img201 from '../../../assets/Paises/';
import Img202 from '../../../assets/Paises/';
import Img203 from '../../../assets/Paises/';
import Img204 from '../../../assets/Paises/';
import Img205 from '../../../assets/Paises/';
import Img206 from '../../../assets/Paises/';
import Img207 from '../../../assets/Paises/';
import Img208 from '../../../assets/Paises/';
import Img209 from '../../../assets/Paises/';

//Decima segunda
import Img210 from '../../../assets/Paises/';
import Img211 from '../../../assets/Paises/';
import Img212 from '../../../assets/Paises/';
import Img213 from '../../../assets/Paises/';
import Img214 from '../../../assets/Paises/';
import Img215 from '../../../assets/Paises/';
import Img216 from '../../../assets/Paises/';
import Img217 from '../../../assets/Paises/';
import Img218 from '../../../assets/Paises/';
import Img219 from '../../../assets/Paises/';
import Img220 from '../../../assets/Paises/';
import Img221 from '../../../assets/Paises/';
import Img222 from '../../../assets/Paises/';
import Img223 from '../../../assets/Paises/';
import Img224 from '../../../assets/Paises/';
import Img225 from '../../../assets/Paises/';
import Img226 from '../../../assets/Paises/';
import Img227 from '../../../assets/Paises/';
import Img228 from '../../../assets/Paises/';

//Decima terceira
import Img229 from '../../../assets/Paises/';
import Img230 from '../../../assets/Paises/';
import Img231 from '../../../assets/Paises/';
import Img232 from '../../../assets/Paises/';
import Img233 from '../../../assets/Paises/';
import Img234 from '../../../assets/Paises/';
import Img235 from '../../../assets/Paises/';
import Img236 from '../../../assets/Paises/';
import Img237 from '../../../assets/Paises/';
import Img238 from '../../../assets/Paises/';
import Img239 from '../../../assets/Paises/';
import Img240 from '../../../assets/Paises/';
import Img241 from '../../../assets/Paises/';
import Img242 from '../../../assets/Paises/';
import Img243 from '../../../assets/Paises/';
import Img244 from '../../../assets/Paises/';
import Img245 from '../../../assets/Paises/';
import Img246 from '../../../assets/Paises/';
import Img247 from '../../../assets/Paises/';

//Decima quarta
import Img248 from '../../../assets/Paises/';
import Img249 from '../../../assets/Paises/';
import Img250 from '../../../assets/Paises/';
import Img251 from '../../../assets/Paises/';
import Img252 from '../../../assets/Paises/';
import Img253 from '../../../assets/Paises/';
import Img254 from '../../../assets/Paises/';
import Img255 from '../../../assets/Paises/';

  <div className="linhaPaises">        
                <div className="pais"> 
                    <Link to='' >
                        <img src={Img020} alt="Bielorrússia" title="Bielorrússia" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img021} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img022} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img023} alt="" title=""  />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img024} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img025} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img026} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img027} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img028} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img029} alt="Brasil" title="Brasil" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img030} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img031} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img032} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img033} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img034} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img035} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img036} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img037} alt="" title="" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img038} alt="" title="" />
                    </Link>
                </div>
            </div>

*/


export default function Navbar() {
    return(
        <section className="paises">

            <div className="linhaPaises">        
                <div className="pais"> 
                    <Link to='' >
                        <img src={Img001} alt="Abecásia" title="Abecásia" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img002} alt="Afeganistão" title="Afeganistão" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img003} alt="África do Sul" title="África do Sul" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img004} alt="Albânia" title="Albânia" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img005} alt="Alemanha" title=" Alemanha" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img006} alt="Andorra" title="Andorra" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img007} alt="Angola" title="Angola" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img008} alt="Antígua e Barbuda" title="Antígua e Barbuda" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img009} alt="Arábia Saudita" title="Arábia Saudita" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img010} alt="Argélia" title="Argélia" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img011} alt="Argentina" title="Argentina" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img012} alt="Armênia" title="Armênia" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img013} alt="Austrália" title="Austrália" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img014} alt="Áustria" title="Áustria" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img015} alt="Azerbaijão" title="Azerbaijão" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img016} alt="Bahamas" title="Bahamas" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img017} alt="Bangladesh" title="Bangladesh" />
                    </Link>
                </div>

                <div className="pais">
                    <Link to='' >
                        <img src={Img018} alt="Barbados" title="Barbados" />
                    </Link>
                </div>

                <div className="pais"> 
                    <Link to='' >
                        <img src={Img019} alt="Bahrein" title="Bahrein" />
                    </Link>
                </div>
            </div>    

        </section>
    );
}

