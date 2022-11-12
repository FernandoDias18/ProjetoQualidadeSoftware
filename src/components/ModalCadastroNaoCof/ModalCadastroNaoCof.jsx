import { Modal as ModalComponent, Button } from "antd"
import  'antd/dist/antd.min.css'
import { useModalContextNaoConformidade } from "./ModalCadastroNaoCof.context"

export function ModalCadastroNaoCof(){

    const {modalVisibleNaoConformidade, openModal, closeModal} = useModalContextNaoConformidade()

    const abrirModal =()=>{ 
        console.log(modalVisibleNaoConformidade)
        openModal()
        
        }

    return(
        <>
          
            <ModalComponent onCancel={closeModal} onOk={closeModal}  visible={modalVisibleNaoConformidade.visible}>
                <form>
                    <input type="TITULO:"/>
                    <input type="email" name="Responsável:"/>
                    <input type="text" name="Mitigação:"/>
                    <input type="text" name="Classifição:"/>
                    <input type="data" name="Data para resolução:"/>
                    <input type="date" name="Data de envio:"/>
                    <p>"Escalonada:"</p>
                    <input type="radio" name="sim"/>
                    <input type="radio" name="nao" />
                    <input type="text" name="Superior Imediato:"/>
                </form>    
            </ModalComponent>
            
            <Button onClick={abrirModal} type="primary"> cadastro de não conformidade</Button>

        </>
    )
}