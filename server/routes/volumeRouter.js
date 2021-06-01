const Router = require('express')
const router = new Router()
const VolumeController = require('../controllers/VolumeController')




router.put('/set', VolumeController.setVolume)
router.get('/get', VolumeController.getVolume)




module.exports = router