const User = require("../models/User");

// UPDATE USER
exports.updateUser = async(request, response) => {
    try {
        const user = await User.findByIdAndUpdate(request.params.id, {
            $set: request.body,
        });
        return response.status(200).json("User updated");
    } catch(error) {
        return response.status(404).json(error)
    }
};

// DELETE USER
exports.deleteUser = async(request, response) => {
    try {
        await User.findByIdAndDelete(request.params.id);
        return response.status(200).json("User deleted");
    } catch(error) {
        return response.status(500).json(error);
    }
};

// GET USER
exports.getUser = async(request, response) => {
    try {
        const user = await User.findById(request.params.id);
        const {password, ... other} = user._doc;
        return response.status(200).json(other);
    } catch(error) {
        return response.status(500).json(error);
    }
};
