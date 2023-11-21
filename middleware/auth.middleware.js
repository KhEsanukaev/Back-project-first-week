const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json("Нет доступа(no auth header)")
    }

    const [type, token] = authorization.split(" ")
    
    if(type !== "Bearer") {
        return res.status(401).json("неверный тип токена (Not Bearer)")
    }

    try {
        req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY)
        console.log(token);
        console.log(process.env.SECRET_JWT_KEY);
        console.log(req.user);
        next() 
    } catch (error) {
        return res.status(401).json("неверный тип токена")
    }
}