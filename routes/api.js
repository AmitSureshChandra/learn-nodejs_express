const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')

// list of ninjas
router.get('/ninjas', function (request,response, next) {

    Ninja.find({})
        .then(ninjas => response.send(ninjas))
        .catch(next)

    // Ninja.geoNear(
    //     {type : 'Point', coordinates : [ parseFloat(request.query.lng),parseFloat(request.query.lat)]},
    //     {maxDistance : 100000 , spherical : true}
    // ).then(function (ninjas) {
    //     response.send(ninjas)
    // })
    //     .catch(next)
})

router.post('/ninjas', function (request,response,next) {
    // var ninja = new Ninja(request.body)
    // ninja.save()

    Ninja.create(request.body)
        .then(function (ninja) {
            response.send(ninja)
        })
        .catch(next)
})

router.put('/ninjas/:id', function (request,response,next) {

    Ninja.findByIdAndUpdate({ _id : request.params.id} , request.body)
        .then(() => {
            Ninja.findById(request.params.id).then(function (ninja) {
                response.send({
                    'updated' : ninja
                })
            })
        })
        .catch(next)
})

router.delete('/ninjas/:id', function (request,response,next) {
    Ninja.findByIdAndRemove({ _id : request.params.id})
        .then(ninja => {
            response.send({
                message : ninja.name + ' removed'
            })
        }).catch(next)
})


module.exports = router