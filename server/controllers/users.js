const User = require('../models/schemas/user');
const jwt = require('jwt-simple');
const config = require('../models/config');

exports.login = (req, res, next) => {
    if(typeof req.body.email !== 'string') 
        return res.status(400).send('Missing Email');
    if(typeof  req.body.password !=='string')
        return res.status(400).send('Missing password');
    
    User.findOne({ email:req.body.email }, (err,user) => {
        if(err) return next(err);
        if(!user) return res.status(400).send('No user with that email found');
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) return next(err);
            if(!isMatch) return res.status(400).send('Password is incorrect');
            let payload = {
                id: user._id,
                email: user.email
            }
            let token = jwt.encode(payload, config.secret);
            user.token = token;
            user.save((err)=>{
                if(err) {
                    res.sendStatus(500)
                    return next(err);
                }
                return res.json({ token: token });
            })
        })
    })
};

exports.register = (req, res, next) => {
    let userData = {};
    userData.email = req.body.email;
    userData.password = req.body.password;

    let newUser = new User(userData);
    newUser.save((err, user) =>{
        if(err) {
            if (err.code === 11000)
                return res.status(400).send('Email is already registered');
            return next(err);
        }
        return res.sendStatus(200);
    });
}