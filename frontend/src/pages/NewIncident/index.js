import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

import logoImage from '../../assets/logo.svg'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be the hero"/>
                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="link-redirect" to="/profile"><FiArrowLeft size={16} color="E02041"/>Voltar para home</Link>
                  
                </section>
                <form>
                    <input placeholder="Título do caso" required />
                    <textarea placeholder="Descrição" type="email" required/>
                    <input placeholder="Valor (R$)" required/>
                    <button className="button">Cadastrar</button> 
                </form>
            </div>
        </div>
    )
}
