const express = require('express');
const {getResponse, getReview }= require('../controllers/ai.controller');

const router = express.Router();


router.get('/get-response', getResponse);
router.post('/get-review', getReview);


module.exports = router;