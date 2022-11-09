import './Header.css'
export function Header(){
    return(
    <>
        <div className="header">
        <h2 className='titulo'> CheckList</h2>
        <div className='inputs'>
            <input type="text" className='itens' placeholder="Descreva o item"/>
            <button>Adicionar</button>
        </div>
        </div>

            

        </>

    );
}
