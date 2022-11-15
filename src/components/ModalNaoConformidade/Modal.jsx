import { Modal as ModalComponent, Button } from "antd"
import  'antd/dist/antd.min.css'
import { useState } from "react"
import { useModalContext } from "../../Context"
import "./Modal.css"

export function Modal({id, titulo,responsavel, mitigacao, classificacao, dataResolucao, dataEnvio, escalonada, superior, concluida, pegarNaoConformidade}){

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
             <div  className="divCard">
                <span  className="tituloCard">
                        ID:
                </span>
                <span>
                        {id}
                </span>
            </div>
            <div className="divCard">
                <span  className="tituloCard">
                        TITULO:
                </span>
                <span>
                        {titulo}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard"> 
                        RESPONSÁVEL:
                </span>
                <span>
                        {responsavel}
                </span>
            </div >
            <div className="divCard">
                <span   className="tituloCard">
                        MITIGAÇÃO:
                </span>
                <span>
                        {mitigacao}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        CLASSIFICAÇÃO:
                </span>
                <span>
                        {classificacao}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        DATA PARA RESOLUÇÃO:
                </span>
                <span>
                        {dataResolucao}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        DATA PARA ENVIO:
                </span>
                <span>
                        {dataEnvio}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        ESCALONADA:
                </span>
                <span>
                        {escalonada}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        SUPERIOR:
                </span>
                <span>
                        {superior}
                </span>
            </div>
            <div className="divCard">
                <span  className="tituloCard">
                        CONCLUÍDA:
                </span>
                <span>
                        {concluida}
                </span>
            </div>
           
            </ModalComponent>
            
            <Button onClick={(e)=>{  abrirModal(variavelId, e)} } type="primary"> Fer Perfeição</Button>
        
        </>
    )
}