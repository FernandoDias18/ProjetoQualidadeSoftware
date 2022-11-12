import { Modal as ModalComponent, Button } from "antd"
import  'antd/dist/antd.min.css'
import { useModalContext } from "./modal.context"

export function Modal(){

    const {modalVisible, closeModal, openModal} = useModalContext()

    const abrirModal =()=>{ 
        console.log(modalVisible)
        openModal()
        }

    return(
        <>
            <ModalComponent onCancel={closeModal} onOk={closeModal} visible={modalVisible.visible}>
             <h1>ID : TITULO</h1>
             <p>Responsável: </p>
             <p>Mitigação: </p>
             <p>Classifição: </p>
             <p>Data para resolução: </p>
             <p>Data de envio: </p>
             <p>Escalonada: </p>
             <p>Superior Imediato: </p>
             <p>Concluída: </p>
            </ModalComponent>
            
            <Button onClick={abrirModal} type="primary"> Não conformidade cadastrada </Button>
        </>
    )
}