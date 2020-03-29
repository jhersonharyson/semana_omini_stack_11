const crypto = require('crypto')
const connection = require('../database/connection')

// exports.create = async (req, res) => {
//     const {title, description, value} = req.body    
//     const ong_id = req.headers.authorization
//     const [id]  = await connection('incidents').insert({ong_id, title, description, value})
//     return res.send({ id })
// }

exports.list = async (req, res) => {
    const ong_id = req.headers.authorization
    const incidents = await connection('incidents').where('ong_id', ong_id)
    return res.send({incidents})
}

// exports.delete = async (req, res) => {
//     const { id } = req.params
//     const ong_id = req.headers.authorization
//     const incidents = await connection('incidents').where({
//         id,
//         ong_id
//     }).del()

//     if(!incidents)
//         return res.status(401).send({incidents})
//     return res.status(204).send()
// }