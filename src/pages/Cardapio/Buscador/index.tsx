import React from 'react'
import style from './buscador.module.css'
import {CgSearch} from 'react-icons/cg'

interface Props{
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: Props) {
  return (
    <div className={style.buscador}>
      
      <input
        value={busca}
        onChange={evento => setBusca(evento.target.value)}
        >
      </input>
      <CgSearch
        size={20}
        color="#4C4D5F"  
      />
    </div>
  )
}
