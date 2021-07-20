
import React,{useState} from 'react';
import "./Upload.scss"
import ArquivoUpload from './arquivoUpload'
import ModalUpload from './modalUpload'
import ModalDownload from './modalDownload'
import Buscar from './buscar'


export default function Upload() {
  const [modalUpload, setModalUpload] = useState(false);
  const [modalDownload, setModalDownload] = useState(false);
  const [buscar, setBuscar] = useState(false);
  const [navMostrar, setNavMostrar] = useState(true);

    function clickEvent (){
        setNavMostrar(!navMostrar)
        console.log(navMostrar)

    }
    
  return (
  <>
  <ModalUpload visibility={modalUpload} chanceVisibility={setModalUpload}/>
  <ModalDownload visibility={modalDownload} chanceVisibility={setModalDownload}/>
    <div className="containerGrid">
        <header className="headerUpload">
            <div className="headerEsquerda">
                <div className="logotipoHeader notranslate">
                    <div className="logotipoHeaderTexto">Troca<b >Web</b></div>
                </div>
                <div className="headerUsuarios">
                    <div className="logotipoHeaderTexto">Usuários</div>
                </div>
            </div>
            <div className="buscar">
              <img onClick={() => setBuscar(!buscar)}src="https://image.flaticon.com/icons/png/512/14/14073.png"/>
              <Buscar buscar={buscar} setbuscar={setBuscar}/>
            </div>
        </header>
        <nav className={"navUpload "+ (navMostrar ? 'showNav' : 'hiddenNav')} >
            <div onClick={() => clickEvent()} className="esconderNav">></div>
        </nav>
        <main className={"mainUpload" + (navMostrar ? 'mainCompleto' : 'mainMetade')}>
        <ArquivoUpload></ArquivoUpload>
            <div className="containerArquivo"></div>
            <div className="containerArquivo"></div>
            <div className="containerArquivo"></div>
            <div className="containerArquivo"></div>
            <div className="containerArquivo"></div>
            <div className="containerArquivo"></div>
            <div className="containerArquivo"></div>
            <div className="containerArquivo"></div>
        </main>
        <footer className="footerUpload">
            <div className="iconesFooter">
                <img onClick={()=> setModalDownload(!modalDownload)}src="https://image.flaticon.com/icons/png/512/3143/3143061.png"/>
            </div>
            <div className="iconesFooter">
                <img onClick={()=> setModalUpload(!modalUpload)}src="https://image.flaticon.com/icons/png/512/3143/3143050.png"/>
            </div>
        </footer>
    </div>
    </>
  );
}