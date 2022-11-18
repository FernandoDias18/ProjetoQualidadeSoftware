import {useEffect, useState} from 'react'
import './Question.css'
import { GiConfirmed } from 'react-icons/gi'
import { useModalContext } from "../../Context";


















export function Question({questionTitle,editandoQuestao, index,editarQuestao, id,handleNewValueQuestion,editandoQuestaoValor, handleSaveNewQuestion}){


  const [respostaCheckList, setRespostaCheckList]= useState('')
  const{openModalNaoConformidade, handleCreateNewResponseQuestion, questions}= useModalContext()


  // useEffect(()=>{
  //   test()
  // }, [respostaCheckList])

  function handleRespostaCheckList(event){


    
    setRespostaCheckList(event.target.value)
    
    handleCreateNewResponseQuestion(index,event.target.value)

    
    
    

      if (event.target.value=== "NaoConforme"){
        openModalNaoConformidade()
        
      }
  }







    return(
        <>
          <div className="container-question">
              <span className='id-Question'>{index+1}</span>
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

              <select className={`Resposta${respostaCheckList}`} onChange={(e)=>handleRespostaCheckList(e)} >
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
                 