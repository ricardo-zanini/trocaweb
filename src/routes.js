import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


//Importar as páginas
import Upload from './pages/Upload/';
import Login from './pages/Login/';

export default function Routes(){
    return(
        <>
         <BrowserRouter>
                <Route exact path="/Upload" component={Upload} />
                <Route exact path="/" component={Login} />
          </BrowserRouter>
        </>
    );
};