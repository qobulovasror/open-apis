const router = require('express').Router()

router.get("/", (req, res)=>{
    // res.render("index")
    res.send("Home page")
})

module.exports = router;