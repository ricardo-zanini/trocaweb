import {Button, Form} from 'react-bootstrap';


export default function ModalSenha(props) {
    switch (props.modalSenha){
        case true:
            return (
                <>
               <div class="telaEscurecida">
                    <div class="containerModal">
                        <div class="modalUploadSessao1">
                            <h5>Recuperar Senha</h5>
                        </div>
                        <div class="modalUploadSessao2">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelInputModal">Recuperar Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" />
                        </Form.Group>
                        </div>
                        <div class="modalUploadSessao3">
                            <Button variant="success">Confirmar</Button>
                            <Button onClick={()=>props.setModalSenha(!props.modalSenha)}variant="danger">Cancelar</Button>
                        </div>
                    </div>
                </div>
                </>
            );
        break;
        case false:
            return (
                <>
                
                </>
            );
    }
}