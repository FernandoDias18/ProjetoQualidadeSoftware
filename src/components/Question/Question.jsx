import {useState} from 'react'
import './Question.css'
import { GiConfirmed } from 'react-icons/gi'


















export function Question({questionTitle,index,editandoQuestao ,editarQuestao, id,handleNewValueQuestion,editandoQuestaoValor, handleSaveNewQuestion}){

  const [resposta, setResposta] = useState('')

  const gaurdarRespota =(event) =>{
    setResposta(resposta => event.target.value)

  }


    return(
        <>
          <div className="container-question">
              <span className='id-Question'>id</span>
              { id === editandoQuestao?
                (
                  <div className='container-input-edition'>
                     <input 
                      type="text" 
                      className='Input-edition' 
                      placeholder={questionTitle} 
                      onChange={handleNewValueQuestion} value={editandoQuestaoValor}
                    />
                    <button className='Button-confirm-edition' onClick={handleSaveNewQuestion}>
                      <GiConfirmed size={"1.5em"}/>
                    </button>
                   
                  </div>
                ):
                (

                  <span className='Question-title'>{questionTitle}</span>
                )

              }
              <dir>
                <button onClick={()=>editarQuestao(id)}> Editar</button>
              </dir>
              
            <div className="Respostas">

              <select className={`Resposta${resposta}`} onChange={gaurdarRespota} value={resposta}>
              <option className='option' value=""> Escolha a opção</option>
                <option className='option' value="NaoSeAplica"> Não se aplica</option>
                <option className='option' value="NaoConforme">Não conforme</option>
                <option className='option' value="Ok">OK</option>
              </select>
                                                  
            </div> 
             
          </div>
        </>
    )
}
                 