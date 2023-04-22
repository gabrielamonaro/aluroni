import React, { useState } from 'react'
import Style from './Cardapio.module.css'
import {ReactComponent as Logo} from 'assets/images/logo.svg'
import Buscador from './Buscador'
import Filtros from './Filtros';


export default function Cardapio() {

  const [busca, setBusca] = useState("");

  return (
    <main>
        <nav className={Style.menu}>
          <Logo/>
        </nav>
        <header className={Style.header}>
          <div className={Style["header__text"]}>
            A casa do código e da massa
          </div>
        </header>
        <section className={Style.cardapio}>
          <h3 className={Style["cardapio__titulo"]}>Cardápio</h3>
          <Buscador busca={busca} setBusca={setBusca}></Buscador>
          <div className={Style['cardapio__filtros']}>
            <Filtros></Filtros>
          </div>
        </section>

    </main>
  )
}
