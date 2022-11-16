import { createContext, useContext, useState} from "react"





const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 10),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 23),
        end: new Date(2021, 6, 23),
    },
];

const arrayNaoConformidade =[

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


const ModalContext = createContext({})

export const ModalProvider = ({children}) =>{

    const [modalVisible, setModalVisible] = useState({visible: false})

     //Não conformidades exibir as cadastradas
     const [naoConformidade, setNaoConformidade]= useState({})

    function pegarNaoConformidade(id){
        const [nConformdiade] =  arrayNaoConformidade.filter( item => item.ID === id)
        console.log(nConformdiade)
        
        setNaoConformidade(nConformdiade)

        
    }


    //  Cadastro de não conformidade
    const [modalVisibleNaoConformidade, setModalVisibleNaoConformidade] = useState({visible:false})
     //Essas são as funcões para abrir e fechar o modal de não conformidade para a criação da tabela de não conformidades
     const openModalNaoConformidade = (payload)=> setModalVisibleNaoConformidade({...payload, visible:true})
     const closeModalNaoConformidade = ()=> setModalVisibleNaoConformidade({visible:false})

   

    //Eventos do Calendario

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

   

    //Essas são as funcões para abrir e fechar o modal de não conformidade do calendario
    const openModal = (payload)=> setModalVisible({...payload, visible:true})
    const closeModal = ()=> setModalVisible({visible:false})

   



    //Função para o Calendario:
    // const handleSelectedEvent = (event) => {
    //     setSelectedEmployee(
    //       myEmployees.items.filter((item) => item.id === event.resource.userId)[0]
    //     );
    //     setSelectedEvent(event);
    //     $("#calendar-event-modal").modal("show");
    //   };



    function cadastrarNaoConformidade(naoConformidade){

        arrayNaoConformidade.push(naoConformidade)

        console.log(arrayNaoConformidade)
    }
 
    return  <ModalContext.Provider value=
                {
                    {
                        modalVisible,
                        modalVisibleNaoConformidade,
                        openModal, 
                        closeModal, 
                        openModalNaoConformidade,   
                        closeModalNaoConformidade,
                        newEvent,
                        allEvents,

                        naoConformidade,
                        pegarNaoConformidade,

                        cadastrarNaoConformidade
                        
                        
                    }
                }
            > 
                {children}

            </ModalContext.Provider>
}

export const useModalContext= ()=>{
    const context = useContext(ModalContext)
    return context
}