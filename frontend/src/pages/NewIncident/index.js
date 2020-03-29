import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api' 


import './style.css'

import logoImage from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const ongId = localStorage.getItem('ONG_ID')

    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await api.post('/incidents', { title, description, value }, {headers: {authorization: ongId}})
            if(!response.data)
                throw new Error('')
            history.push('/profile')
        } catch (error) {
            alert('Erro ao tentar cadastrar novo caso.')
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be the hero"/>
                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="link-redirect" to="/profile"><FiArrowLeft size={16} color="E02041"/>Voltar para home</Link>
                  
                </section>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Título do caso" 
                        required
                        value={title}
                        onChange={e=>setTitle(e.target.value)} 
                    />
                    <textarea 
                        placeholder="Descrição" 
                        type="email" 
                        required
                        value={description}
                        onChange={e=>setDescription(e.target.value)} 
                    />
                    <input 
                        placeholder="Valor (R$)" 
                        type="number"
                        required
                        value={value}
                        onChange={e=>setValue(e.target.value)} 
                    />
                    <button className="button">Cadastrar</button> 
                </form>
            </div>
        </div>
    )
}
