import React from 'react';
import { Route } from 'react-router';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter } from 'react-router-dom';

//Importar as páginas
import Upload from './pages/Upload/';
import Login from './pages/Login/';

export default function Routes(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/Upload" exact component={Upload} />
                        <Route path="/Login" exact component={Login} />
                    </Switch>        
                </BrowserRouter>
            </div>
        </>
    );
};