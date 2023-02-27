const User = require('./../Models/userModle')
exports.SignIn = async (req, res) => {
    const user = await User.create(req.body)
    res.status(201).json({
        msg: 'sucess',
        user
    })



}