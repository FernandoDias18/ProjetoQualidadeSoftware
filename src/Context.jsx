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

const naoConformidades=[

]



const ModalContext = createContext({})

export const ModalProvider = ({children}) =>{

    const [modalVisible, setModalVisible] = useState({visible: false})
    const [modalVisibleNaoConformidade, setModalVisibleNaoConformidade] = useState({visible:false})

    //Eventos do Calendario

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    //Não conformiades:
    const [naoConformidade, setNaoConformidade]= useState({ titulo:"",
    responsavel:"",
    mitigacao:"", 
    classificacao:"",
    dataParaResolucao: "",
    dataDeEnvio: "", 
    escalonada:"", 
    superiorImediato: "", 
    concluida:"",
    },)
    const [todasNaoConformidades, setTodasNaoConformidades] = useState(naoConformidades)

    //Essas são as funcões para abrir e fechar o modal de não conformidade do calendario
    const openModal = (payload)=> setModalVisible({...payload, visible:true})
    const closeModal = ()=> setModalVisible({visible:false})

    //Essas são as funcões para abrir e fechar o modal de não conformidade para a criação da tabela de não conformidades
    const openModalNaoConformidade = (payload)=> setModalVisibleNaoConformidade({...payload, visible:true})
    const closeModalNaoConformidade = ()=> setModalVisibleNaoConformidade({visible:false})



    //Função para o Calendario:
    // const handleSelectedEvent = (event) => {
    //     setSelectedEmployee(
    //       myEmployees.items.filter((item) => item.id === event.resource.userId)[0]
    //     );
    //     setSelectedEvent(event);
    //     $("#calendar-event-modal").modal("show");
    //   };

    
    //função cadastrar não conformidade
    function cadastrarNovaNaoConformidade(objeto){
        setNaoConformidade(objeto)

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
                        
                        setNaoConformidade,
                        setTodasNaoConformidades,
                        naoConformidade,
                        cadastrarNovaNaoConformidade
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