const User = require("../models/User.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Basket = require("../models/Basket.model");

module.exports.userController = {

    registerUser: async(req,res) => {
        console.log(req.files);
        const {login,password} = req.body;
        const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))
        const user = await User.create({login, avatar:req.file.path, password:hash})

        const basket = await Basket.create({user: user._id})
        console.log(basket);
        return res.json(user)
    },

    loginUser: async(req,res) => {
        const {login,password} = req.body

        const candidate = await User.findOne({login})

        if(!candidate) {
            return res.status(401).json({error: "Неверный логин"})
        }
        
        const valid = await bcrypt.compare(password, candidate.password)

        if(!valid) {
            return res.status(401).json({error: "неверный пароль"})
        }

        const payload = {
            id: candidate._id,
            login: candidate.login
        }
        
        const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
            expiresIn: "24h",
        })
        res.json(token)
    },

    deleteUser: async(req,res) => {
        try {
            const data = await User.findByIdAndRemove(req.params.id)
            return res.json(`удален ${data._id}`)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    },
    deleteAll: async(req,res) => {
        try {
            await User.deleteMany()
           return res.json("Удалены")
        } catch (error) {
            return res.status(401).json(error.message)
        }
    },

    getAllUsers: async(req,res) => {
        try { 
            const data = await User.find()
            return res.json(data)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    },
    getUserById: async (req,res) => {
        try {
            const data = await User.findById(req.user.id)
            return res.json(data)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }
}