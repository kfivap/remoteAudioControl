const Router = require('express')
const router = new Router()

const volumeRouter = require('./volumeRouter')


router.use('/volume', volumeRouter)
router.use('/volume1', (req, res)=>{
    return res.json('hello')
})




module.exports = router