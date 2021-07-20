
import React,{useState} from "react";


export default function ArquivoUpload() {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div className="containerArquivo">
              <div className="iconeArquivo">
                  <img alt="arquivo" src="../../imgs/arquivo.png"/>
              </div>
              <div className="nomeArquivo">
                Exemplo 1
              </div>
              <div className="excluirArquivo">
                Excluir
              </div>
              <div className="containerCheckboxMaior">
                    <label className="containerRadio">
                    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} name="radio"/>
                    <span className="checkmark"></span>
                    </label>
                </div>  
            </div>
            
        </>
    );
}