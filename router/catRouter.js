const auth = require("../middleware/auth")
const {getCategory,postCategory,putCategory,deleteCategory} = require("../controller/catController")

const router = require("express").Router()

router.get('/',getCategory)
router.post('/',auth,postCategory)
router.put('/:id',auth,putCategory)
router.delete('/:id',auth,deleteCategory)

module.exports = router

