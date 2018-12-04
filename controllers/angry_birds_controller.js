var express = require('express');
var router = express.Router()

var angrybirds = require('../modules/angry_birds');
router.get('/', function(request,response){
  
    var musVar = {
        birdList: angrybirds.birds 
        
    }
    response.render('./index' , musVar);
  })

  router.get('/:id', function (request, response) {
    var angrybirdsId = request.params.id ;
    var birdListId = angrybirds.birds[angrybirdsId]
    var musVar = {
        birdList : birdListId ,
        id: birds.id ,
        name: birdListId.name ,
        abilities: birdListId.abilities,
        image: birdListId.image ,
        group: birdListId.group ,
        species:birdListId.species,
        feels : birdListId.feels
    
    }
    response.render('./show' , musVar);
  })

module.exports= router;