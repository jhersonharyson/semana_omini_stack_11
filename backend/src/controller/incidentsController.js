const connection = require('../database/connection')

exports.create = async (req, res) => {
    const {title, description, value} = req.body    
    const ong_id = req.headers.authorization
    const [id]  = await connection('incidents').insert({ong_id, title, description, value})
    return res.send({ id })
}

exports.list = async (req, res) => {
    const {page = 1, limit = 5} = req.query
    
    const [{ 'count(*)': count}] = await connection('incidents').count();

    const totalPages = Math.ceil(count / limit)

    const incidents = await connection('incidents')
                                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                                .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])
                                .limit(limit)
                                .offset((page - 1) * limit)

    res.header({'X-Total-Count': count, 'X-Total-Pages': totalPages})

    return res.send({incidents})
}

exports.delete = async (req, res) => {
    const { id } = req.params
    const ong_id = req.headers.authorization
    const incidents = await connection('incidents').where({
        id,
        ong_id
    }).del()

    if(!incidents)
        return res.status(401).send({incidents})
    return res.status(204).send()
}