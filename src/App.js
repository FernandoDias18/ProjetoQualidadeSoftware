import { Header } from "./components/Header/Header";
import {List} from "./components/List/List"
import { ModalProvider } from "./Context";
import {ModalCadastroNaoCof} from './components/ModalCadastroNaoCof/ModalCadastroNaoCof.jsx'



import './App.css'
import { Modal } from "./components/ModalNaoConformidade/Modal";
import { Calendario } from "./components/Calendario/Calendario";



function App() {

  return (
        <>
        <ModalProvider>
          <Header/>
          <List/>
          
          <Modal/>

          <Calendario/>

          <ModalCadastroNaoCof/>
        </ModalProvider>
        
        </>
  );
}

export default App;

