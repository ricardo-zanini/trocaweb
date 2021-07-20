
import React,{useState} from 'react';
import "./Upload.scss"
import ArquivoUpload from './arquivoUpload'
import ModalUpload from './modalUpload'
import ModalDownload from './modalDownload'



export default function Upload() {
  const [modalUpload, setModalUpload] = useState(false);
  const [modalDownload, setModalDownload] = useState(false);

  return (
  <>
  <ModalUpload visibility={modalUpload} chanceVisibility={setModalUpload}/>
  <ModalDownload visibility={modalDownload} chanceVisibility={setModalDownload}/>
    <div className="containerGrid">
        <header className="headerUpload">
            <div className="logotipoHeader notranslate">
                <div className="logotipoHeaderTexto">Troca<b >Web</b></div>
            </div>
            <div className="buscar">
              <img src="https://image.flaticon.com/icons/png/512/14/14073.png"/>
            </div>
        </header>
        <nav className="navUpload">
            <div className="esconderNav">&gt;</div>
        </nav>
        <main className="mainUpload">
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