import { Modal as ModalComponent, Button } from "antd"
import  'antd/dist/antd.min.css'
import { useState } from "react"
import { useModalContext } from "../../Context"
import "./Modal.css"

export function Modal(){

    const {modalVisible, closeModal, openModal, naoConformidade, pegarNaoConformidade} = useModalContext()
    const [variavelId, setVariavelId] = useState("15")
    
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
                        {naoConformidade.id}
                </span>
            </div>
            <div className="divCard">
                <span  className="tituloCard">
                        TITULO:
                </span>
                <span>
                        {naoConformidade.titulo}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard"> 
                        RESPONSÁVEL:
                </span>
                <span>
                        {naoConformidade.responsavel}
                </span>
            </div >
            <div className="divCard">
                <span   className="tituloCard">
                        MITIGAÇÃO:
                </span>
                <span>
                        {naoConformidade.mitigacao}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        CLASSIFICAÇÃO:
                </span>
                <span>
                        {naoConformidade.classificacao}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        DATA PARA RESOLUÇÃO:
                </span>
                <span>
                        {naoConformidade.dataResolucao}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        DATA PARA ENVIO:
                </span>
                <span>
                        {naoConformidade.dataEnvio}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        ESCALONADA:
                </span>
                <span>
                        {naoConformidade.escalonada}
                </span>
            </div>
            <div className="divCard">
                <span   className="tituloCard">
                        SUPERIOR:
                </span>
                <span>
                        {naoConformidade.superior}
                </span>
            </div>
            <div className="divCard">
                <span  className="tituloCard">
                        CONCLUÍDA:
                </span>
                <span>
                        {naoConformidade.concluida}
                </span>
            </div>
           
            </ModalComponent>
            
            <Button onClick={(e)=>{  abrirModal(variavelId, e)} } type="primary"> Fer Perfeição</Button>
        
        </>
    )
}