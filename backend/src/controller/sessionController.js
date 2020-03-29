const connection = require('../database/connection')

exports.create = async (req, res) => {
    const { id } = req.body
    const ong = await connection('ongs').where('id', id).select('name').first();

    if(!ong)
        return res.status(400).send({error: 'No ONG found with this id.'})
    return res.status(200).send({ong})
}