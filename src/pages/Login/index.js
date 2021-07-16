import "./login.scss"
import { Form, Button } from 'react-bootstrap';


export default function Login() {
    return (
      <>
        <div className="fundoPaginaLogin"></div>
        <div className="containerPaginaLogin">
        <div className="logotipo">HOS</div>
          <div class="container">
          <hr/>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuário</Form.Label>
              <Form.Control type="text" placeholder="Usuário" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Button className="mt-3" variant="login" type="submit">
              Entrar
            </Button>
          </Form>
          </div>
          <a href="#" className="link" >Esqueceu sua senha?</a>
        </div>
      </>
    );
  }