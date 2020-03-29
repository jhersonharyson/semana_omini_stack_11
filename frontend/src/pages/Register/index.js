import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './style.css'

import logoImage from '../../assets/logo.svg'

export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = { name, email, whatsapp, city, uf }
        try{
            const response = await api.post('/ongs', data)
            if(!response.data.id) throw new Error('')
            alert(`Seu ID de acesso é ${response.data.id}`)
            localStorage.setItem('ONG_ID', response.data.id)
            history.push('/')
        }catch(e){
            alert('Erro ao tentar cadastrar.')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be the hero"/>
                    <h1>cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="link-redirect" to="/"><FiArrowLeft size={16} color="E02041"/>Voltar ao login</Link>
                  
                </section>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Nome da ONG" 
                        required 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Email" 
                        type="email" 
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp" 
                        required
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            required
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            required 
                            style={{width: "30px"}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button">Cadastrar</button> 
                </form>
            </div>
        </div>
    )
}
