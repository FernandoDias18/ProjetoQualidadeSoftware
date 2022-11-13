import { ListaNaoConformidade } from '../ListaNaoConformidade/ListaNaoConformidade'
import './MonitoramentoNaoConformidade.css'


function MonitoramentoNaoConformidade(){
    return (
        <>
            <div className='Conteiner-Tabela-Monitoramento'>

                <div className="Conteiner-cabecalho">
                    <div className="Titulo"> 
                        <span>Titulo da pergunta</span>
                    </div>
                    <div className="Classificacao"> 
                        <span>Classificação</span>
                    </div>
                    <div className="Data-De-Envio"> 
                        <span>DATA DO ENVIO DA NÃO CONFORMIDADE</span>
                    </div>
                    <div className="Data-De-Resolucao"> 
                        <span>PRAZO PARA CORREÇÃO</span>
                    </div>
                
                </div>
                <ListaNaoConformidade/>
                <ListaNaoConformidade/>
                <ListaNaoConformidade/>

            </div>
        </>
    )
}

export{MonitoramentoNaoConformidade}