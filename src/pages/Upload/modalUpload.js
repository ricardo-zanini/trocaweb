
import Dropzone from '../../components/Dropzone/dropzone/dropzone.js'
import {Button} from 'react-bootstrap';


export default function ModalUpload(props) {
    switch (props.visibility){
        case true:
            return (
                <>
                <div class="telaEscurecida">
                    <div class="containerModal">
                        <div class="modalUploadSessao1">
                            <h5>Upload de Arquivos</h5>
                        </div>
                        <div class="modalUploadSessao2">
                            <Dropzone/>
                        </div>
                        <div class="modalUploadSessao3">
                            <Button variant="success">Enviar</Button>
                            <Button onClick={()=>props.chanceVisibility(!props.visibility)}variant="danger">Cancelar</Button>
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