const Transport = require("../models/transport.model")

module.exports.transportController = {
    createTransport: async (req,res) => {
        const {name} = req.body
        try {
            const data = await Transport.create({
                name
            })
            return res.json(data)
        } catch (error) {
            return req.status(401).json(error.message)
        }
    },
    getAllTransport: async (req,res) => { 
        try {
           const data = await Transport.find()
           return res.json(data)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    },
    deleteTransport: async (req,res) => {
        try {
            await Transport.findByIdAndDelete(req.params.id)
            return res.json("кол-во удалено")
        } catch (error) {
            return req.status(401).json(error.message)
        }
    },
    // deleteAll: async(req,res) => {
    //     try {
    //         await People.deleteMany()
    //        return res.json("Удалены")
    //     } catch (error) {
    //         return res.status(401).json(error.message)
    //     }
    // },
}