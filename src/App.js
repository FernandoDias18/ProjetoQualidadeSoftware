import { Header } from "./components/Header/Header";
import {List} from "./components/List/List"
import {ModalProvider, } from './components/ModalNaoConformidade/modal.context'
import {ModalCadastroNaoCof} from './components/ModalCadastroNaoCof/ModalCadastroNaoCof.jsx'
import{ModalProviderNaoConformidade} from './components/ModalCadastroNaoCof/ModalCadastroNaoCof.context'


import './App.css'
import { Modal } from "./components/ModalNaoConformidade/Modal";
import { Calendario } from "./components/Calendario/Calendario";



function App() {

  return (
        <>
        <ModalProviderNaoConformidade>
        <ModalProvider>
          <Header/>
          <List/>
          
          <Modal/>

          <Calendario/>

          <ModalCadastroNaoCof/>
        </ModalProvider>
        </ModalProviderNaoConformidade>
        </>
  );
}

export default App;

