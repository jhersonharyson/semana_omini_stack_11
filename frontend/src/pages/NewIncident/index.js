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
                    <h1>cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="link-redirect" to="/"><FiArrowLeft size={16} color="E02041"/>Voltar ao login</Link>
                  
                </section>
                <form>
                    <input placeholder="Nome da ONG" required />
                    <input placeholder="Email" type="email" required/>
                    <input placeholder="WhatsApp" required/>
                    <div className="input-group">
                        <input placeholder="Cidade" required/>
                        <input placeholder="UF" required style={{width: "30px"}}/>
                    </div>
                    <button className="button">Cadastrar</button> 
                </form>
            </div>
        </div>
    )
}
