const aiService = require('../services/ai.services');

const getResponse = async (req, res) => {
    const prompt = req.query.prompt;

    if(!prompt) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(prompt);
    res.send(response);
}

const getReview = async (req, res) => {
    const code = req.body.code;

    if(!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);
    res.send(response);
}
module.exports = {
    getResponse,
    getReview
}