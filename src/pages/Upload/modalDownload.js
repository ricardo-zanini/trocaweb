
import {Button} from 'react-bootstrap';


export default function ModalDonwload(props) {
    switch (props.visibility){
        case true:
            return (
                <>
                <div class="telaEscurecida">
                    <div class="containerModal">
                        <div class="modalUploadSessao1">
                            <h5>Download de Arquivos</h5>
                        </div>
                        <div class="modalUploadSessao2">
                        <p>Deseja fazer Download dos arquivos selecionados?</p>
                        </div>
                        <div class="modalUploadSessao3">
                            <Button variant="success">Confirmar</Button>
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