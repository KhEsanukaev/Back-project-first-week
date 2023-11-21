const User = require("../models/User.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
    createUser: async(req,res) => {
        try {
            const data = await User.create({
                login: req.body.login,
                password: req.body.password,
                avatar: req.file.path
            })
            
            return res.json(data)
        } catch (error) {
            return res.status(401).json(`Уже есть картинка ${error.message}`)
        }
    },
    
    registerUser: async(req,res) => {
        console.log(req.files);
        const {login,password} = req.body;
        const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))
        const users = await User.create({login, avatar:req.file.path, password:hash})
        return res.json(users)
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