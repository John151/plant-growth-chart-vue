let express = require('express')
let db = require('../models') // imports index.js from models
let PlantRecord = db.PlantRecord

let router = express.Router()
// get all records
router.get('/plant_records', function(req, res, next){
    PlantRecord.findAll({order: ['date']}).then( plantRecords =>
    {
        return res.json(plantRecords)
    }).catch( err => next(err) )
})
// add new record
router.post('/plant_records', function(req, res, next) {
    PlantRecord.create(req.body).then( () => {
        res.status(201).send('ok')
    }).catch( err => next(err) ) // todo send more specific error
})
module.exports = router