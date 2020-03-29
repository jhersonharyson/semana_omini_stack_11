import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'

import './style.css'

import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon() {
    
    const [id, setId] = useState('')

    const history = useHistory()

    const login = async (ong_id) =>{
        try{
            const response = await api.post('/session', { id })
            if(response.status == 204){
                localStorage.setItem('ONG_ID', id)
                localStorage.setItem('ONG_NAME', response.data.name)
                history.push('/profile')
            }
        }catch(e){
            alert('Erro ao tentar logar.')
        }
    }

    useEffect(()=>{
        const id = localStorage.getItem('ONG_ID')
        if(id)
           login(id)
    },[])

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(id)
    }

    

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be the hero"/>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Informe seu ID" 
                        required
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button">Entrar</button> 
                    <Link className="link-redirect" to="/register"><FiLogIn size={16} color="E02041"/>Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImage} alt="heros"/>
        </div>
    )
}
