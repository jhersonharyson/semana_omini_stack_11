import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api' 


import './style.css'

import logoImage from '../../assets/logo.svg'

export default function Profile() {

    const [incidents, setIncidents] = useState([])
    const ongName = localStorage.getItem('ONG_NAME')
    const ongId = localStorage.getItem('ONG_ID')
    
    const history = useHistory()

    const logout = () =>{
        localStorage.clear()
        history.push('/')
    }

    useEffect(()=>{
        const logout = () =>{
            localStorage.clear()
            history.push('/')
        }
        const fetch = async () => {
        if(ongId)
            try {
                const response = await api.get('/profile', {headers:{ authorization: ongId}})
                if(response.data){
                    const { incidents } = response.data
                    console.log(incidents)
                    setIncidents(incidents)
                }
            } catch (error) {
                
            }
        else
            logout()
        }
        fetch()
    }, [ongId, history])

    

    const deleteIncident = async (id) => {
        try {
            await api.delete(`/incidents/${id}`, {headers:{authorization: ongId}})
            setIncidents(incidents.filter(incident=> incident.id !== id))
        } catch (error) {
            
        }
    }
    return (
        <div className="profile-container">
            <header>
         
                <img src={logoImage} alt="Be the hero"/>
                <span>Olá, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={logout} ><FiPower size={18} color="E02041"/> </button> 
                
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {
                    incidents.map( incident => {
                        return (
                            <li key={incident.id}>
                                <strong>CASO</strong>
                                <p>{incident.title}</p>
                                <strong>DESCRIÇÃO</strong>
                                <p>{incident.description}</p>
                                <strong>VALOR</strong>
                                <p>{Intl.NumberFormat('pt-br', {currency: 'BRL', style: 'currency'}).format(incident.value)}</p>
                                <button onClick={()=> deleteIncident(incident.id)}><FiTrash2 size={20} color="a8a8b3"/></button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
