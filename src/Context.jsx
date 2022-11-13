import { createContext, useContext, useState} from "react"

const ModalContext = createContext({})

export const ModalProvider = ({children}) =>{

    const [modalVisible, setModalVisible] = useState({visible: false})
    const [modalVisibleNaoConformidade, setModalVisibleNaoConformidade] = useState({visible:false})

    //Essas são as funcões para abrir e fechar o modal de não conformidade do calendario
    const openModal = (payload)=> setModalVisible({...payload, visible:true})
    const closeModal = ()=> setModalVisible({visible:false})

    //Essas são as funcões para abrir e fechar o modal de não conformidade para a criação da tabela de não conformidades
    const openModalNaoConformidade = (payload)=> setModalVisibleNaoConformidade({...payload, visible:true})
    const closeModalNaoConformidade = ()=> setModalVisibleNaoConformidade({visible:false})

    


    return  <ModalContext.Provider value=
                {
                    {
                        modalVisible,
                        modalVisibleNaoConformidade,
                        openModal, 
                        closeModal, 
                        openModalNaoConformidade,   
                        closeModalNaoConformidade
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