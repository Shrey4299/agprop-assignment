const express = require('express');
const router = express.Router();
const userController = require('./Controllers/userController'); 
const projectController = require('./Controllers/projectController'); 
const authenticate = require('./middlewares/authMiddleware'); 
const authController = require('./Controllers/authController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', authenticate, userController.updateUser); 
router.delete('/users/:userId',authenticate, userController.deleteUser); 

router.get('/projects', projectController.getAllProjects);
router.post('/projects', authenticate, projectController.createProject);
router.get('/projects/:projectId', projectController.getProjectById);
router.put('/projects/:projectId',authenticate, projectController.updateProject);
router.delete('/projects/:projectId',authenticate, projectController.deleteProject);
router.get('/projectswithtech', projectController.getProjectsByTechnicalStack);

router.post('/login', authController.login);

module.exports = router;
