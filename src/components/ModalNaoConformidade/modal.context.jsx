import { createContext, useContext, useState} from "react"

const ModalContext = createContext({})

export const ModalProvider = ({children}) =>{

    const [modalVisible, setModalVisible] = useState({visible: false})

    const openModal = (payload)=> setModalVisible({...payload, visible:true})
    const closeModal = ()=> setModalVisible({visible:false})

    


    return  <ModalContext.Provider value={{modalVisible, openModal, closeModal}}> {children}</ModalContext.Provider>
}

export const useModalContext= ()=>{
    const context = useContext(ModalContext)
    return context
}