import { Modal as ModalComponent, Button } from "antd"
import  'antd/dist/antd.min.css'
import { useState } from "react"
import { useModalContext } from "../../Context"

export function Modal({id, titulo, mitigacao, classificacao, dataResolucao, dataEnvio, escalonada, superior, concluida, pegarNaoConformidade}){

    const {modalVisible, closeModal, openModal} = useModalContext()
    const [variavelId, setVariavelId] = useState("18")
    const abrirModal =(id, e)=>{ 
        console.log(e.target)
        pegarNaoConformidade(id)
        openModal()
        }

    return(
        <>
            <ModalComponent onCancel={closeModal} onOk={closeModal} visible={modalVisible.visible}>
             <h1>ID : {id}</h1>
             <p>Responsável: {titulo}</p>
             <p>Mitigação: {mitigacao}</p>
             <p>Classifição: {classificacao} </p>
             <p>Data para resolução: {dataResolucao} </p>
             <p>Data de envio: {dataEnvio} </p>
             <p>Escalonada: {escalonada}</p>
             <p>Superior Imediato: {superior} </p>
             <p>Concluída: {concluida} </p>
            </ModalComponent>
            
            <Button onClick={(e)=>{  abrirModal(variavelId, e)} } type="primary"> Fer Perfeição</Button>
        
        </>
    )
}