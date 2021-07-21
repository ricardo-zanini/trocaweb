
import {Button} from 'react-bootstrap';


export default function ModalDonwload(props) {
    switch (props.visibility){
        case true:
            return (
                <>
                <div className="telaEscurecida">
                    <div className="containerModal">
                        <div className="modalUploadSessao1">
                            <h5>Download de Arquivos</h5>
                        </div>
                        <div className="modalUploadSessao2">
                        <p>Deseja fazer Download dos arquivos selecionados?</p>
                        </div>
                        <div className="modalUploadSessao3">
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