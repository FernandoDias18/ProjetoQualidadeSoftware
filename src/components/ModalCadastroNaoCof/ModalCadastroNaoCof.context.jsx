import { createContext, useContext, useState} from "react"

const ModalContextNaoConformidade = createContext({})

const ModalProviderNaoConformidade = ({children}) =>{

    const [modalVisibleNaoConformidade, setModalVisibleNaoConformidade] = useState({visible:false})

    const openModal = (payload)=> setModalVisibleNaoConformidade({...payload, visible:true})
    const closeModal = ()=> setModalVisibleNaoConformidade({visible:false})

    


    return  <ModalContextNaoConformidade.Provider value={{modalVisibleNaoConformidade, openModal, closeModal}}>
                {children}
            </ModalContextNaoConformidade.Provider>
}

const useModalContextNaoConformidade= ()=>{
    const context = useContext(ModalContextNaoConformidade)
    return context
}

export {useModalContextNaoConformidade, ModalProviderNaoConformidade}