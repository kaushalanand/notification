var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');


// Adding user.
router.post('/add', userController.addUser);

// Adding user.
router.get('/list', userController.listUser);

// Adding user.
router.get('/get', userController.getUser);

// Adding user.
router.put('/update', userController.updateUser);

// Adding user.
router.delete('/remove', userController.deleteUser);

module.exports = router;
