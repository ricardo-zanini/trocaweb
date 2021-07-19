
import {useState} from "react";


export default function ArquivoUpload() {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div className="containerArquivo">
              <div className="iconeArquivo">
                  <img alt="arquivo" src="../../imgs/arquivo.png"/>
              </div>
              <div class="nomeArquivo">
                Exemplo 1
              </div>
              <div className="excluirArquivo">
                Excluir
              </div>
              <div className="containerCheckboxMaior">
                    <label class="containerRadio">
                    <input type="radio" checked={checked} onClick={() => setChecked(!checked)} name="radio"/>
                    <span class="checkmark"></span>
                    </label>
                </div>  
            </div>
            
        </>
    );
}