import { Header } from "./components/Header/Header";

import {List} from "./components/List/List"
// import { ModalProvider } from "./Context";
// import {ModalCadastroNaoCof} from './components/ModalCadastroNaoCof/ModalCadastroNaoCof.jsx'


import {Flex} from '@chakra-ui/react'
import SideBar from './components/SideBar/SideBar';

import './App.css'
// import { Modal } from "./components/ModalNaoConformidade/Modal";
// import { Calendario } from "./components/Calendario/Calendario";



function App() {

  return (
        <>
        
          <Flex >
            <SideBar Flex={1}/>
            <Flex  w={"100%"} flexDir="column">
              <Header/>
              <List/>
            </Flex>
          </Flex>
        
        </>
  );
}

export default App;

