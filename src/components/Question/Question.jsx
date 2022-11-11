
import './Question.css'
export function Question({questionTitle,index}){
    return(
        <>
          <div className="container-question">
              <span className='id-Question'>id</span>
              <span className='Question-title'>{questionTitle}</span>
              <div class="form-group">
                  
                
                    
                <label required="" className="radio-inline" for="radios-0" >
                  <input name="resposta" id="resposta" value="sim" type="radio" required/>
                  Sim
                </label> 
                <label for="radios-1" className="radio-inline">
                  <input name="resposta" id="resposta" value="não" type="radio"/>
                  Não
                </label>
                <label for="radios-0" className="radio-inline">
                  <input name="resposta" id="resposta" value="não se aplica" type="radio"/>
                  Não se aplica
                </label>
                    
                 
              </div>  
          </div>
        </>
    )
}
                 