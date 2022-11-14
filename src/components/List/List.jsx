
import { Question } from '../Question/Question';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import "./List.css"

export function List(){



    const [question, setQuestion] = useState('')
    const[questions, setQuestions]=useState([])



    function handleNewQuestion(event){
        setQuestion(question => event.target.value)

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

    return(
        <div className='container-list'>
            <div className='inputs'>
                <input type="text" className='itens' placeholder="Descreva o item" onChange={handleNewQuestion} value={question}/>
                <button className='testeButton' onClick={handleCreateNewQuestions} >Adicionar</button>
            </div>
            
            <div className='Question-list'>
                {
                    questions.map((question, index)=>{
                        return <Question
                        key={question.id}
                        questionTitle={question.description}
                        index={index} />
                    })
                } 

            </div>
        </div>
    )
}