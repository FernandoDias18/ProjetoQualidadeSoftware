import { Header } from "./components/Header/Header";
import {useState,useEffect} from 'react'

import {List} from "./components/List/List"
import { ModalProvider } from "./Context";
import {ModalCadastroNaoCof} from './components/ModalCadastroNaoCof/ModalCadastroNaoCof.jsx'


import {Flex} from '@chakra-ui/react'
import SideBar from './components/SideBar/SideBar';

import './App.css'
import { Modal } from "./components/ModalNaoConformidade/Modal";
import { Calendario } from "./components/Calendario/Calendario";
import { Dashboard } from "./components/Dashboard/Dashboard";

const array =[

  { ID: "18",
    titulo:"REQ",
  responsavel:"FER O MAIS LINDO",
  mitigacao:"MELHORAR NÉ", 
  classificacao:"DIFICIL PORÉM DEPENDE",
  dataParaResolucao: "AMANHÃ",
  dataDeEnvio: "HOJE", 
  escalonada:"SIM, PARA O INFERNO", 
  superiorImediato: "DEMONIO", 
  concluida:"NEM PERTO DE ACABAR",
  },
  { ID:"15", 
  titulo:"Conformidade",
  responsavel:"A gatinha da giulia",
  mitigacao:"Ferias", 
  classificacao:"top",
  dataParaResolucao: "21/11/2022",
  dataDeEnvio: "15/11/2022", 
  escalonada:"nao", 
  superiorImediato: "keliBrito", 
  concluida:"nao ne mo",
  },
  { 
  ID:"457484",
  titulo:"NãoConformidade3",
  responsavel:"André Delfino",
  mitigacao:"Testar func", 
  classificacao:"media",
  dataParaResolucao: "12/12/2022",
  dataDeEnvio: "15/11/2022", 
  escalonada:"não", 
  superiorImediato: "Fer", 
  concluida:"não",
  },
  

]

function App() {


  const [naoConformidade, setNaoConformidade]= useState({})
 
  // useEffect(()=>{
    
  // },{naoConformidade})


  function pegarNaoConformidade(id){
    const [nConformdiade] = array.filter( item => item.ID === id)
    console.log(nConformdiade)
    
    setNaoConformidade(nConformdiade)

    
  }
  return (
        <>

        <ModalProvider>
          <Flex >
            <SideBar Flex={1}/>
            <Flex  w={"100%"} flexDir="column">
              {/* /<Header/>
              <ModalCadastroNaoCof/>
              <Modal
              //  id={"4"} 
                titulo={naoConformidade.titulo} 
                mitigacao={naoConformidade.mitigacao} 
                classificacao={naoConformidade.classificacao} 
                dataResolucao={naoConformidade.dataParaResolucao} 
                dataEnvio={naoConformidade.dataDeEnvio} 
                escalonada={naoConformidade.escalonada}
               // superior={naoConformidade.superiorImediato}
              //  concluida={naoConformidade.concluida}
               // pegarNaoConformidade={pegarNaoConformidade}
              
              /> */}
              <Calendario
              openModal = {}>
                

              </Calendario>
            </Flex>
         
          </Flex>
        </ModalProvider>
        
        </>
  );
}

export default App;

