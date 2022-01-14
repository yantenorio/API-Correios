const Correios = require('node-correios')
const correios = new Correios()

module.exports = {
    
    async getCep(req, res) {
        try {
            const { cep } = req.body
            const result = correios.consultaCEP({ cep })

            return res.json(result)
            
        }catch(error) {
            return res.json(error)
        }
    }
}