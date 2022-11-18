import { Modal as ModalComponent, Button } from "antd"
import {useState} from 'react'
import { useModalContext } from "../../Context"
import  'antd/dist/antd.min.css'
import "./ModalCadastroNaoCof.css"
import { v4 as uuidv4 } from 'uuid';
import emailjs from "emailjs-com"



import { serialize } from 'object-to-formdata';

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

    function cadastrarNaoConformidadeButton(e){
        infoDaNaoConformidade["ID"]= uuidv4()
        cadastrarNaoConformidade(infoDaNaoConformidade)

        console.log(infoDaNaoConformidade)
        setInfoDaNaoConformidade({})

        sendEmail(e)

    }


    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs.sendForm('MessageGmail', 'template_3u2kesb', e.target , '6assPHIfU1bT_PH_X')
          .then((result) => {
              console.log("resultado",result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    
    return(
        <>
          
            <ModalComponent 
                onCancel={closeModalNaoConformidade} 
                cancelText={"Cancelar"} 
                onOk={cadastrarNaoConformidadeButton}  
                visible={modalVisibleNaoConformidade.visible}
                title={"Cadastro de não conformidade"}
                okText={"Cadastrar na agenda"}
                htmlType="submit"
            >


                    <form onSubmit={cadastrarNaoConformidadeButton}>

                        <div className="container">
                            <span>
                                TITULO
                            </span>
                            <input type="text:" name='title' id="titulo" onChange={cadastrarInfoDaNaoConformidade} value={infoDaNaoConformidade.title || '' }/>
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
                                CLASSIFICAÇÃO
                            </span>
                            <select className="select" name="classificacao" onChange={cadastrarInfoDaNaoConformidade} value={infoDaNaoConformidade.escalonada || '' }>
                                <option className='option' value="advertencia">ADVERTÊNCIA | 10 DIAS</option>
                                <option className='option' value="baixoimpacto">BAIXO IMPACTO | 7 DIAS</option>
                                <option className='option' value="medioimpacto">MÉDIO IMPACTO | 5 DIAS</option>
                                <option className='option' value="altomedio">ALTO IMPACTO | 3 DIAS</option>
                                <option className='option' value="critico">CRÍTICO | 1 DIAS</option>
                            </select>
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
                            <input type="date" name='dataEnvio' id="dataEnvio" onChange={cadastrarInfoDaNaoConformidade} value={infoDaNaoConformidade.dataEnvio || '' }/>
                        </div>
                        <div className="container">
                            <span>
                            ESCALONADA
                            </span>
                            <select className="select" name="escalonada" onChange={cadastrarInfoDaNaoConformidade} value={infoDaNaoConformidade.escalonada || '' }>
                                <option className='option' value=""></option>
                                <option className='option' value="sim"> SIM</option>
                                <option className='option' value="não">NÃO</option>
                            </select>
                        </div>
                        <div className="container">
                            <span>
                            SUPERIOR IMEDIATO:
                            </span>
                            <select className="select" name="superiorImediato" onChange={cadastrarInfoDaNaoConformidade} value={infoDaNaoConformidade.superiorImediato || '' }>
                                <option className='option' value=""></option>
                                <option className='option' value="Kelly Bettio">Kelly Bettio</option>
                            </select>
                        </div>
                        <div className="container">
                            <span>
                                Email do responsavel
                            </span>
                            <input type="text:" name='email' id="email" onChange={cadastrarInfoDaNaoConformidade} value={infoDaNaoConformidade.email || ''}/>
                        </div>
                        
                        <input type="submit" id="botaoEnviar" value='Enviar aviso por e-mail ' /><input></input>







                    </form>
                 
                    
                    
            </ModalComponent>
            
            

        </>
    )
}