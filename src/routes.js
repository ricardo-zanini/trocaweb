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
                <Route path="/Upload" component={Upload} />
                <Route path="/" component={Login} />
          </BrowserRouter>
        </>
    );
};