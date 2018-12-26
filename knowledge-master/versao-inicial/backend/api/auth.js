const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password) {
            return res.status(400).send('Email and Password must be informed')
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if(!user) return res.status(400).send('User not found')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if(!isMatch) return res.status(401).send('Email/password incorrect')

        const now = Math.floor(Date.now() /1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now, // issued at
            exp: now + (60 * 60 * 24 * 3) // 60 sec, 60 min, 1 day, 3 days   
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })


    }

    const validateToken = async (req, res) => {
        const userData = req.body || null

        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) { // * 1000 because this time is in milliseconds and the token date is in seconds
                    return res.send(true) // instead of true here, it could generate a new token
                }
            }
        } catch(err) {
            // proble with the token
        }

        res.send(false)
    }

    return { signin, validateToken }

}