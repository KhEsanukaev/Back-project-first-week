const People = require("../models/PeopleC.model")

module.exports.peopleController = {
    createPeople: async (req,res) => {
        const {count} = req.body
        try {
            const data = await People.create({
                count
            })
            return res.json(data)
        } catch (error) {
            return req.status(401).json(error.message)
        }
    },
    getAllPeople: async (req,res) => { 
        try {
           const data = await People.find()
           return res.json(data)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    },
    deletePeople: async (req,res) => {
        try {
            await People.findByIdAndDelete(req.params.id)
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