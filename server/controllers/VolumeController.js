
const loudness = require('loudness')

class VolumeController {

    async getVolume(req, res){
        const volumeLevel = await loudness.getVolume()
        return res.json({volumeLevel})
    }


  async setVolume(req, res){

console.log(req.body.volumeValue)
      const volumeLevel = await loudness.getVolume()
      console.log('volumeLevel', volumeLevel)


      await loudness.setVolume(req.body.volumeValue)


//       await loudness.setMuted(false)
//       const mute = await loudness.getMuted()


      return res.json('ok')
  }
}
module.exports = new VolumeController()