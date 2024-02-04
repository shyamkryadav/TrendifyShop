const express = require('express')
router = express.Router()
const {registerNewUser,getAllUsers,loginUser}  = require('../controllers/user')

router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.get('/users',getAllUsers)
// router.post('/change-password/:id',changePassword)
module.exports = router