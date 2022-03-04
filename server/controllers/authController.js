const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// ADD USER
exports.register = async(request, response) => { 
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(request.body.password, salt);
        
        const user = new User({
            username: request.body.username,
            password: hashedPassword
        });

        const register = await user.save();
        return response.status(200).json(register);
    } catch(error) {
        return response.status(500).json(error);
    }
};

// LOG IN
exports.login = async(request, response) => {
    try {
        const user = await User.findOne({username: request.body.username});
        !user && response.status(404).json("user not found");

        const validPassword = await bcrypt.compare(request.body.password, user.password);
        !validPassword && response.status(400).json("wrong password");

        const token = jwt.sign(
            {
                userId: user._id
            },
            'secretfortoken',
            { expiresIn: '1h' }
        );
        return response.status(200).json({ token: token, userId: user._id });
    } catch(error) {
        return response.status(500).json(error);
    }
};

