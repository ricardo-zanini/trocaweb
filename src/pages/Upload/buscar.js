import { Form, Button } from 'react-bootstrap';

export default function Buscar(props) {
    switch (props.buscar){
        case true:
            return (
                <>
                <Form.Control className="inputBuscar" size="sm" type="text" placeholder="Procure um arquivo..." />
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