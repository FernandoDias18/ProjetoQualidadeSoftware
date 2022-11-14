
import { Question } from '../Question/Question';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import "./List.css"

export function List(){



    const [question, setQuestion] = useState('')
    const[questions, setQuestions]=useState([])
    const [editandoQuestao, setEditandoQuestao] = useState(null)
    const [editandoQuestaoValor, seteditandoQuestaoValor] = useState('')


    function handleNewQuestion(event){
        setQuestion(question => event.target.value)

    }
    function handleNewValueQuestion(event){
        seteditandoQuestaoValor(editandoQuestaoValor => event.target.value)

    }
    
    function handleSaveNewQuestion (){
        
        
        const questionNew = questions.find(q => q.id === editandoQuestao)
        if (!questionNew) {
            return
        }
        questionNew.description = editandoQuestaoValor
        setEditandoQuestao(null)
    }

    function handleCreateNewQuestions() {



        if (question.length === 0) {
          return
        }
    
        const newQuestion= {
          id: uuidv4(),
          description: question,
          yes: false,
          no:false,
          notAplicable:false
    
        }
    
        setQuestions([...questions, newQuestion])
        setQuestion('')
    
    
      }

    const handleEditingQuestion =(id)=>{
        setEditandoQuestao(id)
        
        

    }
    return(
        <div className='container-list'>
            <div className='inputs'>
                <input type="text" className='itens' placeholder="Descreva o item" onChange={handleNewQuestion} value={question}/>
                <button className='testeButton' onClick={handleCreateNewQuestions} >Adicionar</button>
            </div>
            
            <div className='Question-list'>
                {
                    questions.map((question, index)=>{
                        return (
                           <Question
                                key={question.id}
                                id={question.id}
                                questionTitle={question.description}
                                index={index}
                                editarQuestao={handleEditingQuestion}
                                editandoQuestao={editandoQuestao}
                                handleNewValueQuestion={handleNewValueQuestion}
                                editandoQuestaoValor={editandoQuestaoValor}
                                handleSaveNewQuestion={handleSaveNewQuestion}
                            
                            />
                
                        )
                    })
                } 

            </div>  
        </div>
    )
}