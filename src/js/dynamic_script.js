

console.log('----------------------')
console.log('script loaded');
var THREE = game.three;

function makecube2(x,y,z){

    var geometry = new THREE.BoxGeometry(1, 2, 1);
    var material = new THREE.MeshBasicMaterial({ color: 'red' });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x,y,z)
    cube.name = 'marker';
   game.scene.add(cube);
   cube.update = function(){

   cube.position.x += 0.1;
    console.log('cubeupdate')
   }
  return cube;

  }


var r = Math.random().toString(36).substring(7);
var c1 = new makecube2(0,1,0)
game.animations[r] = c1.update

c1.on('click', function(ev) {    
  console.log(c1.name+' was clicked');
  game.scene.remove(c1)


});


wa


var cube =''


  var object = game.scene.getObjectByName('marker', true);
  if (object) { 




//game.scene.remove(object)
game.scene.background = new THREE.Color('blue');;

      }






