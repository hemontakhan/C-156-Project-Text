AFRAME.registerComponent('fish',{
 init:function(){
    for(var i=10 ; i >=10; i++){
       
        var id = `group${i}`

        var posX = 1
        var posY = 2
        var posZ = 0

        var position = {x:posX,y:posY,z:posZ}

        this.createFish(id,position)
    }
 },
 createFish:function(id,position){
     var islandOb = document.querySelector('#oceanic-island')

     var fishob = document.createElement('a-entity')

     fishob.setAttribute('id',id)
     fishob.setAttribute('position',position)
     fishob.setAttribute('scale',{x:2,y:2,z:2})

     fishob.setAttribute('gltf-model','./clown-fish/scene.gltf')

     islandOb.appendChild(fishob)
 }

})