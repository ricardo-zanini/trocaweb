import React,{useState} from 'react';
import "./login.scss"
import { Form, Button } from 'react-bootstrap';
import ModalSenha from './modalSenha'
import { login } from '../../api/login';

export default function Login() {
    
    const [modalSenha, setModalSenha] = useState(false);
    const logar = async e =>{
        e.preventDefault();
        login(e.target.email.value, e.target.senha.value);
        // e.target.reset();
    }

    return (<>
        <ModalSenha modalSenha={modalSenha} setModalSenha={setModalSenha}/>
        <div className="fundoPaginaLogin"></div>
        <div className="containerPaginaLogin">
            <div className="logotipo">HOS</div>
            <div className="container">
                <hr/>
                <Form onSubmit={logar}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="email" type="text" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control id="senha" type="password" placeholder="Senha" />
                    </Form.Group>
                    <Button className="mt-3" variant="login" type="submit">
                        Entrar
                    </Button>
                </Form>
            </div>
            <p onClick={()=>setModalSenha(!modalSenha)} href="#" className="link" >Esqueceu sua senha?</p>
        </div>
    </>);
}