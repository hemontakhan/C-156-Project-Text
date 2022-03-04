AFRAME.registerComponent('diver-rotation-reader',{
 schema:{
     rotationAdjusment: {type:'number', default:0},
     positionAdjustment : {type:'number',default:0}
 },
 init:function(){
     window.addEventListener('keydown', (e) =>{
       
       this.data.rotationAdjusment = this.el.getAttribute('rotation')
       this.data.positionAdjustment = this.el.getAttribute('position') 

       var scubaRotation = this.data.rotationAdjusment
       var scubaPosition = this.data.positionAdjustment

       if(e.key === 'ArrowRight'){
             scubaRotation.x += 0.05
             this.el.setAttribute('rotation',scubaRotation)
       }
      if(e.key === 'ArrowLeft'){
            
            scubaRotation.x -= 0.05
             this.el.setAttribute('rotation',scubaRotation)
      }
     if(e.key === 'ArrowUp'){
           scubaPosition.z += 0.05
           this.el.setAttribute('position',scubaPosition)
     }
     if(e.key === 'ArrowDown'){
           scubaPosition.z -= 0.03
           this.el.setAttribute('position',scubaPosition)
     }
     if(e.key === 'I'){
           scubaPosition.y += 0.05
           this.el.setAttribute('position',scubaPosition)
     }
     if(e.key === 'N'){
        scubaPosition.y -= 0.03
        this.el.setAttribute('position',scubaPosition)
     }
     })
 }

})

AFRAME.registerComponent('camera-position',{
      schema:{
          positionAdjustment : {type:'number',default:0}
      },
      init:function(){
          window.addEventListener('keydown', (e) =>{
            
            this.data.positionAdjustment = this.el.getAttribute('position') 
     
            var cameraPosition = this.data.positionAdjustment
     
          if(e.key === 'u'){
            
                cameraPosition.y += 0.5
                
                this.el.setAttribute('position',scubaPosition)
          }
          if(e.key === 'd'){
            
                cameraPosition.z -= 0.07
                cameraPosition.y -= 0.05
                this.el.setAttribute('position',cameraPosition)

          }
          if(e.key === 'w'){
            cameraPosition.z += 0.02
            this.el.setAttribute('position',cameraPosition)
      }
      if(e.key === 'e'){
            scubaPosition.z -= 0.02
            this.el.setAttribute('position',cameraPosition)
      }
          })
      }
     
     })