import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Noticias from './pages/Noticias';
import Prevencao from './pages/Prevencao';
import Pets from './pages/Pets';
import Servicos from './pages/Servicos';
import Casos from './pages/Casos';
import Sobre from './pages/Sobre';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/noticias" component={Noticias} />
                <Route path="/prevencao" component={Prevencao} />
                <Route path="/pets" component={Pets} />
                <Route path="/servicos" component={Servicos} />
                <Route path="/casos" component={Casos} />
                <Route path="/sobre" component={Sobre} />           
            </Switch>
        </BrowserRouter>
    );
}