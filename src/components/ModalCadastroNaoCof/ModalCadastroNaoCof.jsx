import { Modal as ModalComponent, Button } from "antd"
import {useState} from 'react'
import { useModalContext } from "../../Context"
import  'antd/dist/antd.min.css'
import "./ModalCadastroNaoCof.css"

export function ModalCadastroNaoCof(){


    const [infoDaNaoConformidade, setInfoDaNaoConformidade] = useState({})

    const {
        modalVisibleNaoConformidade,  
        openModalNaoConformidade, 
        closeModalNaoConformidade,
        setNaoConformidade,
        setTodasNaoConformidades,
        naoConformidade,
        cadastrarNovaNaoConformidade,
        cadastrarNaoConformidade
    } = useModalContext()

    const abrirModal =()=>{ 
        console.log(modalVisibleNaoConformidade)
        openModalNaoConformidade()
        
    }

    const cadastrarInfoDaNaoConformidade = (e) => {
        const { name, value, type, checked } = e.target;
        const isCheckbox = type === 'checkbox';
    
        const data = infoDaNaoConformidade[name] || {};
        if (isCheckbox) {
          data[value] = checked;
        }
        const newValue = isCheckbox ? data : value;
        setInfoDaNaoConformidade({ ...infoDaNaoConformidade, [name]: newValue });
      };

    function testando(){
        cadastrarNaoConformidade(infoDaNaoConformidade)

        console.log(infoDaNaoConformidade)

    }

    return(
        <>
          
            <ModalComponent onCancel={closeModalNaoConformidade} cancelText={"Cancelar"} onOk={closeModalNaoConformidade}  visible={modalVisibleNaoConformidade.visible}>

                    <div className="container">
                        <span>
                            TITULO
                        </span>
                        <input type="text:" name='titulo' id="titulo" onChange={cadastrarInfoDaNaoConformidade} value={infoDaNaoConformidade.titulo || '' }/>
                    </div>

                    <div className="container">
                        <span>
                            RESPONSÁVEL
                        </span>
                        <input type="text:" name='responsavel' id="responsavel" onChange={cadastrarInfoDaNaoConformidade} value={infoDaNaoConformidade.responsavel || ''}/>
                    </div>
                    <div className="container">
                        <span>
                            MITIGAÇÃO
                        </span>
                        <input type="text:" name='mitigacao' id="mitigacao" value={infoDaNaoConformidade.mitigacao || ''} onChange={cadastrarInfoDaNaoConformidade}/>
                    </div>
                    <div className="container">
                        <span>
                        DATA DE RESOLUCAÇÃO
                        </span>
                        <input type="date" name='dataResolucao' id="dataResolucao" value={infoDaNaoConformidade.dataResolucao || ''} onChange={cadastrarInfoDaNaoConformidade}/>
                    </div>
                    <div className="container">
                        <span>
                        DATA DE ENVIO
                        </span>
                        <input type="date" name='dataEnvio' id="dataEnvio" onChange={cadastrarInfoDaNaoConformidade}/>
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
                    <dir>
                        <button onClick={testando}> ok</button>
                    </dir>
                    
                    
            </ModalComponent>
            
            <Button onClick={abrirModal} type="primary"> Cadastrar não conformidade</Button>

        </>
    )
}