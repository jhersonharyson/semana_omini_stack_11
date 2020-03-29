import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import './style.css'

import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be the hero"/>
                <form>
                    <input placeholder="Informe seu ID"></input>
                    <button className="button">Entrar</button> 
                    <a hrf=""><FiLogIn size={16} color="E02041"/>Não tenho cadastro</a>
                </form>
            </section>
            <img src={heroesImage} alt="heros"/>
        </div>
    )
}
