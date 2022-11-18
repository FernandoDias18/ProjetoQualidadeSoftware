import { createContext, useContext, useState, useEffect} from "react"





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

    // { ID: "18",
    //   titulo:"REQ",
    // responsavel:"FER O MAIS LINDO",
    // mitigacao:"MELHORAR NÉ", 
    // classificacao:"DIFICIL PORÉM DEPENDE",
    // dataParaResolucao: "AMANHÃ",
    // dataDeEnvio: "HOJE", 
    // escalonada:"SIM, PARA O INFERNO", 
    // superiorImediato: "DEMONIO", 
    // concluida:"NEM PERTO DE ACABAR",
    // },
    // { ID:"15", 
    // titulo:"Conformidade",
    // responsavel:"A gatinha da giulia",
    // mitigacao:"Ferias", 
    // classificacao:"top",
    // dataParaResolucao: "21/11/2022",
    // dataDeEnvio: "15/11/2022", 
    // escalonada:"nao", 
    // superiorImediato: "keliBrito", 
    // concluida:"nao ne mo",
    // },
    // { 
    // ID:"457484",
    // titulo:"NãoConformidade3",
    // responsavel:"André Delfino",
    // mitigacao:"Testar func", 
    // classificacao:"media",
    // dataParaResolucao: "12/12/2022",
    // dataDeEnvio: "15/11/2022", 
    // escalonada:"não", 
    // superiorImediato: "Fer", 
    // concluida:"não",
    // },
    
  
  ]


const ModalContext = createContext({})

export const ModalProvider = ({children}) =>{


    
    
    const[conforme, setConforme]= useState(0)
    const[naoSeAplica, setNaoSeAplica]= useState(0)
    const[naoConforme, setNaoConforme]= useState(0)
    const[aderencia, setAderencia] = useState(0) 
    
    
    
    useEffect(() => {
        handleCreateNewQuestions()
      },[conforme,naoSeAplica,naoConforme])

    function socorroDeus(questions){

        
        
        // questions.forEach(data =>{

        //     if(data.Resposta === "Ok"){
        //       setConforme(conforme+1)
        //     }
        //     if (data.Resposta === "NaoSeAplica"){
              
        //         setNaoSeAplica(naoSeAplica+1)
        //     }
        //     if(data.Resposta === "NaoConforme"){
        //         setNaoConforme(naoConforme+1)
        //     }
            
        //   })

        const conformeTeste = questions.reduce((total, element) => element.Resposta === "Ok" ? total + 1 : total + 0, 0)

        const naoSeAplicaTeste = questions.reduce((total, element) => element.Resposta === "NaoSeAplica" ? total + 1 : total + 0, 0)
          
        const naoConformeTeste = questions.reduce((total, element) => element.Resposta === "NaoConforme" ? total + 1 : total + 0, 0)
      
        setConforme(conformeTeste)
        setNaoSeAplica(naoSeAplicaTeste)
        setNaoConforme(naoConformeTeste)
        setAderencia(parseFloat((conformeTeste * 100) / (questions.length - naoSeAplicaTeste)).toFixed(2))

    }

    


    //Dashboard
    
    const [question, setQuestion] = useState('')
    const [id, setIdQuestion] = useState('')
    const[questions, setQuestions]=useState([])
    const [editandoQuestao, setEditandoQuestao] = useState(null)
    const [editandoQuestaoValor, seteditandoQuestaoValor] = useState('')



   


    function handleNewQuestion(event){
        setQuestion(question => event.target.value)

    }
    function handleNewValueQuestion(event){
        seteditandoQuestaoValor(editandoQuestaoValor => event.target.value)

    }
    
    function handleSaveNewQuestion (){
        
        
        const questionNew = questions.find(q => q.id === editandoQuestao)
        if (!questionNew) {
            return
        }
        questionNew.description = editandoQuestaoValor
        setEditandoQuestao(null)
    }

    function handleCreateNewQuestions() {



        if (question.length === 0) {
          return
        }
    
        const newQuestion= {
          description: question,
          Resposta:''
    
        }

        
    
        setQuestions([...questions, newQuestion])
        setQuestion('')
    
    
      }
      function handleCreateNewResponseQuestion(index, resposta) {



        

        const question = questions[index]
    
        question["Resposta"]= resposta


        
    
        questions[index] = question

        socorroDeus(questions)
        
    
    
      }

    const handleEditingQuestion =(id)=>{
        setEditandoQuestao(id)
        
        

    }




//======================================================== 

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
                        arrayNaoConformidade,
                        pegarNaoConformidade,

                        cadastrarNaoConformidade,

                        question,
                        setQuestion,
                        questions,
                        setQuestions,
                        editandoQuestao, 
                        setEditandoQuestao,
                        editandoQuestaoValor, 
                        seteditandoQuestaoValor,

                        handleNewQuestion,
                        handleNewValueQuestion,
                        handleSaveNewQuestion,
                        handleEditingQuestion,
                        handleCreateNewQuestions,
                        handleCreateNewResponseQuestion,


                         conforme,
                         naoSeAplica,
                         naoConforme,
                         aderencia
                         
                        
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