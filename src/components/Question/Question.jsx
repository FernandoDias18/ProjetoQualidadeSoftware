import {useState} from 'react'
import './Question.css'
export function Question({questionTitle,index}){

  const [resposta, setResposta] = useState('')

  const gaurdarRespota =(event) =>{
    setResposta(resposta => event.target.value)
    console.log(resposta)

  }


    return(
        <>
          <div className="container-question">
              <span className='id-Question'>id</span>
              <span className='Question-title'>{questionTitle}</span>
              
            <div className="Respostas">

              



              <select className={`Resposta${resposta}`} onChange={gaurdarRespota} value={resposta}>
                <option className='option' value="NaoSeAplica"> Não se aplica</option>
                <option className='option' value="NaoConforme">Não conforme</option>
                <option className='option' value="Ok">OK</option>
              </select>
                                                  
            </div> 
             
          </div>
        </>
    )
}
                 