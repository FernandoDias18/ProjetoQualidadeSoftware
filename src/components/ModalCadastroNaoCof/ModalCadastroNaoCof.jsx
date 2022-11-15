import { Modal as ModalComponent, Button } from "antd"
import { useModalContext } from "../../Context"
import  'antd/dist/antd.min.css'
import "./ModalCadastroNaoCof.css"

export function ModalCadastroNaoCof(){

    const {
        modalVisibleNaoConformidade,  
        openModalNaoConformidade, 
        closeModalNaoConformidade,
        setNaoConformidade,
        setTodasNaoConformidades,
        naoConformidade,
        cadastrarNovaNaoConformidade} = useModalContext()

    const abrirModal =()=>{ 
        console.log(modalVisibleNaoConformidade)
        openModalNaoConformidade()
        
        }

    return(
        <>
          
            <ModalComponent onCancel={closeModalNaoConformidade} cancelText={"Cancelar"} onOk={closeModalNaoConformidade}  visible={modalVisibleNaoConformidade.visible}>

                    <div className="container">
                        <span>
                            TITULO
                        </span>
                        <input type="text:" id="titulo"/>
                    </div>

                    <div className="container">
                        <span>
                            RESPONSÁVEL
                        </span>
                        <input type="text:" id="responsavel"/>
                    </div>
                    <div className="container">
                        <span>
                            MITIGAÇÃO
                        </span>
                        <input type="text:" id="mitigacao"/>
                    </div>
                    <div className="container">
                        <span>
                        DATA DE RESOLUCAÇÃO
                        </span>
                        <input type="date" id="dataResolucao"/>
                    </div>
                    <div className="container">
                        <span>
                        DATA DE ENVIO
                        </span>
                        <input type="date" id="dataEnvio"/>
                    </div>
                    <div className="container">
                        <span>
                        ESCALONADA
                        </span>
                        <select className="select">
                        <option className='option' value=""></option>
                            <option className='option' value="sim"> SIM</option>
                            <option className='option' value="não">NÃO</option>
                        </select>
                    </div>
                    <div className="container">
                        <span>
                        SUPERIOR IMEDIATO:
                        </span>
                        <select className="select">
                        <option className='option' value=""></option>
                            <option className='option' value="superior">Kelly Bettio</option>
                        </select>
                    </div>
                    
                    
            </ModalComponent>
            
            <Button onClick={abrirModal} type="primary"> cadastro de não conformidade</Button>

        </>
    )
}