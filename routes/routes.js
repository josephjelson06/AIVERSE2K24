const express = require('express');
const router = express.Router();


// Import your controller functions
const {
    index,
    explore,
    team,
    about,
    emperor_conquest,
    giga_gen,
    beatbots,
    OptiML,
    uxplore,
    reg,
    registerUser,
    payment
} = require('../controllers/views')

// Define routes for general pages
router.get('/', index);
router.get('/explore', explore);
router.get('/team', team);
router.get('/about_dept', about);

// Route for registration
router.get('/reg', reg);


// Define routes for event pages
router.get('/templates/emperor_conquest', emperor_conquest);
router.get('/templates/giga_gen', giga_gen);
router.get('/templates/beat_bots', beatbots);
router.get('/templates/opti_ml', OptiML);
router.get('/templates/uxplore', uxplore);

router.post('/payment', payment);

// Export the router
module.exports = router;


router.post('/submit', registerUser);
