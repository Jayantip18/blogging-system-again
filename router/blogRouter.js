const auth = require("../middleware/auth")
const {getBlog,postBlog,putBlog,deleteBlog} = require("../controller/blogController")

const router = require("express").Router()

router.get('/',getBlog)
router.post('/',auth,postBlog)
router.put('/:id',auth,putBlog)
router.delete('/:id',auth,deleteBlog)

module.exports = router