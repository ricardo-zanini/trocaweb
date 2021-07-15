import "./login.scss"
import { Form, Button } from 'react-bootstrap';


export default function Login() {
    return (
      <>
        <div className="fundoPaginaLogin"></div>
        <div className="containerPaginaLogin">
        <div className="logotipo">HOS</div>
          <div class="containerLogin">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuário</Form.Label>
              <Form.Control type="text" placeholder="Digite seu Login de Usuário" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
          </div>
        </div>
      </>
    );
  }