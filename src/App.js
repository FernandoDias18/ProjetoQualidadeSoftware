import { Header } from "./components/Header/Header";
// import {List} from "./components/List/List"
import { ModalProvider } from "./Context";
// import {ModalCadastroNaoCof} from './components/ModalCadastroNaoCof/ModalCadastroNaoCof.jsx'
import {MonitoramentoNaoConformidade} from './components/MonitoramentoNaoConformidade/MonitoramentoNaoConformidade'



import './App.css'
// import { Modal } from "./components/ModalNaoConformidade/Modal";
// import { Calendario } from "./components/Calendario/Calendario";



function App() {

  return (
        <>
        <ModalProvider>
          <Header/>
          
          <MonitoramentoNaoConformidade/>
        </ModalProvider>
        
        </>
  );
}

export default App;

