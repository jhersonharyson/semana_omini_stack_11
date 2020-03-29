import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'

import logoImage from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
         
                <img src={logoImage} alt="Be the hero"/>
                <span>Bem vinda, ADAP</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button><FiPower size={18} color="E02041"/> </button> 
                
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste teste</p>
                    <strong>VALOR</strong>
                    <p>Valor teste</p>

                    <button><FiTrash2 size={20} color="a8a8b3"/></button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste teste</p>
                    <strong>VALOR</strong>
                    <p>Valor teste</p>

                    <button><FiTrash2 size={20} color="a8a8b3"/></button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste teste</p>
                    <strong>VALOR</strong>
                    <p>Valor teste</p>

                    <button><FiTrash2 size={20} color="a8a8b3"/></button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste teste</p>
                    <strong>VALOR</strong>
                    <p>Valor teste</p>

                    <button><FiTrash2 size={20} color="a8a8b3"/></button>
                </li>
            </ul>
        </div>
    )
}
