const auth = require("../middleware/auth")
const {getUser,postUser,putUser,deleteUser,loginUser} = require("../controller/userController")

const router = require("express").Router()

router.get('/',getUser)
router.post('/',auth,postUser)
router.put('/:id',auth,putUser)
router.delete('/:id',auth,deleteUser)
router.post('/login',loginUser)

module.exports = router

