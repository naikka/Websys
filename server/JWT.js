const {sign, verify} = require("jsonwebtoken");

const createToken = (user) => {
    const accessToken = sign(
        {username: user.username, id: user.id}, "jwtsecretplchange", 
    );

    return accessToken
}

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]
    if (!accessToken) 
        return res.status(400).json({error: "User Not Authentciated"})

        try {
            const validateToken = verify(accessToken,"jwtsecretplchange") 
                if (validateToken) {
                    req.authenticated = true
                    return next()
                }
        } catch(err)  {
            return res.status(400).json({error: err});
        }
    };
module.exports = {createToken, validateToken};