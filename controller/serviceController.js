const Client       = require('../model/clientModel')
const axios        = require('axios');



exports.postClient    = async (req, res, next) => {
    const docu = await Client.create(req.body)
    
    try {
        await axios.post('http://localhost:3080/api/kpi', docu)

        return res.status(201).send({
            status: 'success',
            data: {
                data: docu
            }
        })
    } catch (error) {
        return res.status(400).send({
            status: error,
        })
        
    }
    
}

exports.getClient     = async (req, res, next) => {
    try {
        const docu = await Client.find()
        return res.status(200).send({
            status: 'success',
            data: {
                data: docu
            }
        })
    } catch (error) {
        return res.status(400).send({
            status: error,
        })
    }
}


