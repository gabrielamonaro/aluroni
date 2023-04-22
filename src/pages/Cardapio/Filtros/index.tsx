import React from 'react'
import style from './filtros.module.css'
import filtros from './filtros.json'

type Iopcao = typeof filtros[0]

export default function Filtros() {
function selecionarFiltro(opcao: Iopcao)
{

}
  return (
    <div className={style.filtros}>
         
        {filtros.map((opcao) => (
            <button 
                key={opcao.id} 
                onClick={() => selecionarFiltro(opcao)}
                className={style['filtros__filtro']}
                >
                    {opcao.label}
            </button>
        ))}
    </div>
  )
}
