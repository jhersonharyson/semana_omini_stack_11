const crypto = require('crypto')
const connection = require('../database/connection')

exports.create = async (req, res) => {
    const {name, email, whatsapp, city, uf} = req.body    
    const id = crypto.randomBytes(4).toString('HEX')
    await connection('ongs').insert({id, name, email, whatsapp, city, uf})
    return res.send({ id })
}

exports.list = async (req, res) => {
    const ongs = await connection('ongs').select('*')
    return res.send({ongs})
}