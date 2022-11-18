import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {List} from "./components/List/List"
import { ModalProvider } from "./Context";
import {ModalCadastroNaoCof} from './components/ModalCadastroNaoCof/ModalCadastroNaoCof.jsx'


import {Flex} from '@chakra-ui/react'
import SideBar from './components/SideBar/SideBar';

import './App.css'
import { Modal } from "./components/ModalNaoConformidade/Modal";
import { Calendario } from "./components/Calendario/Calendario";
import { Dashboard } from "./components/Dashboard/Dashboard";



function App() {

  
  return (
        <>

        <ModalProvider>
          <Flex >
          <Router>
            <SideBar Flex={1}/>
            <Flex  w={"100%"} flexDir="column">
              <Header/>
              <Modal/>
              <ModalCadastroNaoCof/>
                
                  <Routes>

                    <Route path="/Check-list" element={<List/>}/>
                    <Route path="/Calendario" element={<Calendario/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    
                    
                  </Routes>
               
               
                
                
              
            </Flex>
          </Router>
          </Flex>
        </ModalProvider>
        
        </>
  );
}

export default App;

