const { validationResult } = require('express-validator');
const Section = require('../models/Section');

exports.fetchForUser = async(request, response) => {
    try {
        const sections = await Section.find({userId: request.params.userId})
        return response.status(200).json(sections);
    } catch(error) {
        return response.status(500).json(error);
    }
}

exports.createSection = async(request, response) => {

    const errors = validationResult(request);
    if(!errors.isEmpty()) return;

    const title = request.body.title;
    const information = request.body.information;
    const userId = request.body.userId;

    try {
        const newSection = {
            title: title,
            information: information,
            userId: userId,
        };
        const section = await newPost.save(newSection);
        return response.status(200).json(section);
    } catch(error) {
        return response.status(500).json(error);
    }
}