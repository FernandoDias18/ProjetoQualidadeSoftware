

export function Question(){
    return(
        <>
          <div className="container-question">
              <span>id</span>
              <span>Titulo da pergunda</span>
              <div class="form-group"></div>
                  <label  for="radios">resposta <h11>*</h11>
                    <div> 
                    
                      <label required="" class="radio-inline" for="radios-0" >
                        <input name="resposta" id="resposta" value="sim" type="radio" required/>
                        sim
                      </label> 
                      <label for="radios-1">
                        <input name="resposta" id="resposta" value="não" type="radio"/>
                        não
                      </label>
                      <label for="radios-0">
                        <input name="resposta" id="resposta" value="não se aplica" type="radio"/>
                        não se aplica
                      </label>

                    </div>
                  </label>
                    
              </div>
        </>
    )
}
                 