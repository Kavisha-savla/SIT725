const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Routes
router.post('/', projectController.createProject); // Create project
router.get('/', projectController.getAllProjects); // Get all projects

module.exports = router;
