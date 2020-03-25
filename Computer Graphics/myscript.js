var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // Perspective projection parameters
camera.position.set(0, 0, 50);

//Create a WebGLRenderer and turn on shadows in the renderer
var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setSize(window.innerWidth, window.innerHeight); // Size of the 2D projection
document.body.appendChild(renderer.domElement); // Connecting to the canvas

//*
// controls
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.25;

controls.screenSpacePanning = false;
//*/

var lightAmbient = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( lightAmbient );

//Create a PointLight and turn on shadows for the light
var light = new THREE.PointLight( 0xffffff, 1.2, 100 );
light.position.set( 0, 35, 0 );
light.castShadow = true;            // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;       // default
light.shadow.camera.far = 500      // default

//Skybox
var path = "Skybox/";
var format = '.jpg';
var urls = [
path + 'cloudtop_bk' + format, path + 'cloudtop_ft' + format,
path + 'cloudtop_up' + format, path + 'cloudtop_dn' + format,
path + 'cloudtop_lf' + format, path + 'cloudtop_rt' + format
];
var dayCubeTexture = new THREE.CubeTextureLoader().load( urls );
dayCubeTexture.format = THREE.RGBFormat;
scene.background = dayCubeTexture;

//Floor
var g5 = new THREE.BoxGeometry(200, 200);
var m5 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/grass.png")});
var meshFloor1 = new THREE.Mesh(g5, m5);
meshFloor1.rotation.x = Math.PI / 2;
meshFloor1.position.y = -1.0;
meshFloor1.recieveShadow = true;

//Walls
var g1 = new THREE.BoxGeometry( 142, 34, 2 );
var m1 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall.png")});
var wall = new THREE.Mesh( g1, m1 );
wall.position.y = 17.0;
wall.rotation.y = 7.86;
wall.position.x = -70.0;
wall.recieveShadow = true;
wall.castShadow = true;

var g2 = new THREE.BoxGeometry( 140, 34, 2 );
var m2 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
var wall1 = new THREE.Mesh( g2, m1 );
wall1.position.y = 17.0;
wall1.position.z = 70.0;
wall1.recieveShadow = true;
wall1.castShadow = true;

var g3 = new THREE.BoxGeometry( 142, 34, 2 );
var m3 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
var wall2 = new THREE.Mesh( g3, m1 );
wall2.position.y = 17.0;
wall2.position.z = -70.0;
wall2.recieveShadow = true;
wall2.castShadow = true;

var g4 = new THREE.BoxGeometry( 140, 34, 2 );
var m4 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
var wall3 = new THREE.Mesh( g4, m1 );
wall3.position.y = 17.0;
wall3.rotation.y = 7.86;
wall3.position.x = 70.0;
wall3.recieveShadow = true;
wall3.castShadow = true;

//Ceiling
var g5 = new THREE.BoxGeometry( 142, 2, 142 );
var m5 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
var ceiling = new THREE.Mesh( g5, m1 );
ceiling.position.y = 34.0;

//Pool Table
var g14 = new THREE.BoxBufferGeometry(2, 11, 2);
var m14 = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var tableleg1 = new THREE.Mesh( g14, m14 );
tableleg1.castShadow = true;
tableleg1.receiveShadow = true;
tableleg1.position.y = 4.0;
tableleg1.position.z = -5.0;
tableleg1.position.x = -20.0;

var g14 = new THREE.BoxBufferGeometry(2, 11, 2);
var m14 = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var tableleg2 = new THREE.Mesh( g14, m14 );
tableleg2.castShadow = true;
tableleg2.receiveShadow = true;
tableleg2.position.y = 4.0;
tableleg2.position.z = -5.0;
tableleg2.position.x = -1.0;

var g14 = new THREE.BoxBufferGeometry(2, 11, 2);
var m14 = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var tableleg3 = new THREE.Mesh( g14, m14 );
tableleg3.castShadow = true;
tableleg3.receiveShadow = true;
tableleg3.position.y = 4.0;
tableleg3.position.z = 10.0;
tableleg3.position.x = -20.0;

var g14 = new THREE.BoxBufferGeometry(2, 11, 2);
var m14 = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var tableleg4 = new THREE.Mesh( g14, m14 );
tableleg4.castShadow = true;
tableleg4.receiveShadow = true;
tableleg4.position.y = 4.0;
tableleg4.position.z = 10.0;
tableleg4.position.x = -1.0;

var g14 = new THREE.BoxBufferGeometry(30, 2, 17);
var m14 = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var tabletop = new THREE.Mesh( g14, m14 );
tabletop.castShadow = true;
tabletop.receiveShadow = true;
tabletop.position.y = 9.0;
tabletop.position.z = 2.5;
tabletop.position.x = -11.0;

var g27 = new THREE.BoxGeometry(30, 0.2, 17);
var m25 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/pool.png")});
var topofpool = new THREE.Mesh(g27, m25);
topofpool.position.y = 10.0;
topofpool.position.z = 2.5;
topofpool.position.x = -11.0;
topofpool.recieveShadow = true;

//Bowling
var g13 = new THREE.BoxGeometry(22, 75);
var m13 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bowling.png")});
var bowling = new THREE.Mesh(g13, m13);
bowling.rotation.x = Math.PI / 2;
bowling.rotation.z = 14.15;
bowling.position.y = -0.8;
bowling.position.z = 51.0;
bowling.position.x = -18.0;
bowling.recieveShadow = true;

var g18 = new THREE.BoxGeometry(22, 6);
var m18 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/black.png")});
var bowlingblack = new THREE.Mesh(g18, m18);
bowlingblack.rotation.x = Math.PI / 2;
bowlingblack.rotation.z = 14.15;
bowlingblack.position.y = 0.5;
bowlingblack.position.z = 51.0;
bowlingblack.position.x = -55.0;
bowlingblack.recieveShadow = true;

var g15 = new THREE.BoxGeometry(80, 4, 3);
var m15 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var bowlingleft = new THREE.Mesh(g15, m15);
bowlingleft.position.z = 62.0;
bowlingleft.position.x = -20.0;
bowlingleft.position.y = 1.0;
bowlingleft.castShadow = true;

var g15 = new THREE.BoxGeometry(80, 4, 3);
var m15 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var bowlingright = new THREE.Mesh(g15, m15);
bowlingright.position.z = 40.0;
bowlingright.position.x = -20.0;
bowlingright.position.y = 1.0;
bowlingright.castShadow = true;

var g15 = new THREE.BoxGeometry(5, 10,26);
var m15 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var bowlingback = new THREE.Mesh(g15, m15);
bowlingback.position.z = 51.0;
bowlingback.position.x = -60.0;
bowlingback.position.y = 5.0
bowlingback.castShadow = true;

//Bar
var g6 = new THREE.BoxGeometry( 10, 15, 40 );
var m6 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var bar = new THREE.Mesh( g6, m6 );
bar.position.y = 4.0;
bar.position.x = 50.0;
bar.position.z = -35.0;
bar.castShadow = true;
bar.recieveShadow = true;

var g7 = new THREE.BoxGeometry( 10, 15, 40 );
var m6 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var bar1 = new THREE.Mesh( g7, m6 );
bar1.position.y = 4.0;
bar1.position.x = 35.0;
bar1.position.z = -50.0;
bar1.rotation.y = 20.4;
bar1.castShadow = true;
bar1.recieveShadow = true;

var g20 = new THREE.BoxGeometry( 3, 15, 55);
var m20 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var backbar = new THREE.Mesh( g20, m6 );
backbar.position.y = 4.0;
backbar.position.x = 67.0;
backbar.position.z = -42.0;
backbar.castShadow = true;
backbar.recieveShadow = true;

var g21 = new THREE.BoxGeometry(3, 15, 55 );
var m21 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/bar.png")});
var backbar1 = new THREE.Mesh( g21, m6 );
backbar1.position.y = 4.0;
backbar1.position.x = 42.0;
backbar1.position.z = -68.0;
backbar1.rotation.y = 20.4;
backbar1.castShadow = true;
backbar1.recieveShadow = true;

//Door
var g8 = new THREE.BoxGeometry( 20, 25, 3 );
var m8 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/door.png")});
var door = new THREE.Mesh( g8, m8 );
door.position.y = 11.0;
door.rotation.y = 7.86;
door.position.x = -70.0;
door.position.z = 0.0;

//Bar Chairs
var g9 = new THREE.CylinderGeometry(4 , 4, 2, 30 );
var m9 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/seat.png")});
var Seat = new THREE.Mesh( g9, m9 );
Seat.position.y = 9.0;
Seat.position.z = -30.0;

var g10 = new THREE.CylinderGeometry(3 , 3, 1, 20 );
var m10 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/metal.png")});
var BottomOfChair = new THREE.Mesh( g10, m10 );
BottomOfChair.position.y = -1.0;
BottomOfChair.position.z = -30.0;

var g11 = new THREE.CylinderGeometry(1 , 1, 10, 20 );
var m11 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/metal.png")});
var Tube = new THREE.Mesh( g11, m11 );
Tube.position.y = 4.0;
Tube.position.z = -30.0;

var Chair = new THREE.Geometry();

let materialArray = [
new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/metal.png")}),
new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/seat.png")}),
];

Seat.updateMatrix(); 
Chair.merge(Seat.geometry,  Seat.matrix);

BottomOfChair.updateMatrix();
Chair.merge(BottomOfChair.geometry, BottomOfChair.matrix);

Tube.updateMatrix();
Chair.merge(Tube.geometry, Tube.matrix);

var barchair = new THREE.Mesh(Chair, materialArray);
barchair.position.x = 20.0;
barchair.position.y = 1.0;
barchair.position.z = -10.0;
barchair.recieveShadow = true;
barchair.castShadow = true;

var barchair1 = new THREE.Mesh(Chair, materialArray);
barchair1.position.x = 30.0;
barchair1.position.y = 1.0;
barchair1.position.z = -10.0;
barchair1.recieveShadow = true;
barchair1.castShadow = true;

var barchair2 = new THREE.Mesh(Chair, materialArray);
barchair2.position.x = 40.0;
barchair2.position.y = 1.0;
barchair2.position.z = -10.0;
barchair2.recieveShadow = true;
barchair2.castShadow = true;

var barchair3 = new THREE.Mesh(Chair, materialArray);
barchair3.position.x = 40.0;
barchair3.position.z = 5.0;
barchair3.position.y = 1.0;
barchair3.recieveShadow = true;
barchair3.castShadow = true;

//Lights
var g12 = new THREE.BoxGeometry( 5, 1, 30 );
var m12 = new THREE.MeshPhongMaterial( {color: 0xffffff} );
var lights1 = new THREE.Mesh( g12, m12 );
lights1.position.y = 33.0;
lights1.position.x = 30.0;
lights1.castShadow = true;

var g12 = new THREE.BoxGeometry( 5, 1, 30 );
var m12 = new THREE.MeshPhongMaterial( {color: 0xffffff} );
var lights2 = new THREE.Mesh( g12, m12 );
lights2.position.y = 33.0;
lights2.position.x = -30.0;
lights2.castShadow = true;

//BasketBall Hoop
var g19= new THREE.BoxGeometry(13, 8, 2);
var m19 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/backboard.png")});
var backboard = new THREE.Mesh( g19, m19 );
backboard.position.x = -35.0;
backboard.position.y = 23.0;
backboard.position.z = -69.0;
backboard.castShadow = true;

//Darts
var g17 = new THREE.CylinderGeometry(5 , 5, 1, 20 );
var m17 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/darts.png")});
var darts = new THREE.Mesh( g17, m17 );
darts.position.x = 69.0;
darts.position.y = 20.0;
darts.position.z = 10.0;
darts.rotation.z = 1.55;
darts.castShadow = true;

//Boxing Bag
var g22 = new THREE.BoxGeometry(4 , 28, 12);
var m22 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/blackplastic.png")});
var boxingstand = new THREE.Mesh( g22, m22 );
boxingstand.castShadow = true;
boxingstand.position.x = 68.0;
boxingstand.position.y = 12.0;
boxingstand.position.z = 40.0;

var g23 = new THREE.BoxGeometry(15 , 3, 12);
var m22 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/blackplastic.png")});
var boxingtop = new THREE.Mesh( g23, m22 );
boxingtop.castShadow = true;
boxingtop.recieveShadow = true;
boxingtop.position.x = 60.0;
boxingtop.position.y = 24.5;
boxingtop.position.z = 40.0;

var g24 = new THREE.BoxGeometry(1 , 2, 1);
var m22 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/blackplastic.png")});
var boxingconnect = new THREE.Mesh( g24, m22 );
boxingconnect.castShadow = true;
boxingconnect.recieveShadow = true;
boxingconnect.position.x = 57.0;
boxingconnect.position.y = 22.0;
boxingconnect.position.z = 40.0;

var g25 = new THREE.SphereGeometry( 2, 12, 12 );
var m23 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/brown.png")});
var boxingbag = new THREE.Mesh( g25, m23 );
boxingbag.castShadow = true;
boxingbag.recieveShadow = true;
boxingbag.position.y = 19.0;
boxingbag.position.z = 40.0;
boxingbag.position.x = 57.0;

var g26 = new THREE.BoxGeometry(12, 12);
var m24 = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/silver.png")});
var meshgrate = new THREE.Mesh(g26, m24);
meshgrate.rotation.x = Math.PI / 2;
meshgrate.position.y = -0.8;
meshgrate.position.x = 60.0;
meshgrate.position.z = 40.0;
meshgrate.recieveShadow = true;

// Add
scene.add(wall);
scene.add(wall1);
scene.add(wall2);
scene.add(wall3);
scene.add(ceiling);
scene.add(meshFloor1);
scene.add(meshgrate);
scene.add(bar);
scene.add(bar1);
scene.add(door);
scene.add(lights1);
scene.add(lights2);
scene.add(barchair);
scene.add(barchair1);
scene.add(barchair2);
scene.add(barchair3);
scene.add(bowling);
scene.add(bowlingblack);
scene.add(tableleg1);
scene.add(tableleg2);
scene.add(tableleg3);
scene.add(tableleg4);
scene.add(tabletop);
scene.add(bowlingleft);
scene.add(bowlingright);
scene.add(bowlingback);
scene.add(darts);
scene.add(backboard);
scene.add(backbar);
scene.add(backbar1);
scene.add(boxingstand);
scene.add(boxingconnect);
scene.add(boxingtop);
scene.add(boxingbag);
scene.add(topofpool);


//Create a plane that receives shadows (but does not cast them)
var planeGeometry = new THREE.PlaneBufferGeometry( 142, 142, 32, 32 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )   // simple material
//var plane = new THREE.Mesh( planeGeometry, planeMaterial );		// using simple texture
var plane = null;

if (plane==null) {	// try to load texture
	// Load a texture
	var loader = new THREE.TextureLoader();

	// load a resource
	loader.load(
	    // resource URL
	    'textures/woodfloor.png',
	    // Function when resource is loaded
	    function ( texture ) {
	        // do something with the texture
	        var material = new THREE.MeshPhongMaterial( {
	            map: texture
	         } );
	         
	        plane = new THREE.Mesh(planeGeometry, material);
	        plane.material.side = THREE.DoubleSide;
	        plane.receiveShadow = true;
			plane.rotation.x = -Math.PI/2;
			plane.position.y = -0.4;
			scene.add( plane );

	    },
	    // Function called when download progresses
	    function ( xhr ) {
	        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	    },
	    // Function called when download errors
	    function ( xhr ) {
	        console.log( 'An error happened' );
	    }
	);
} else {
	plane.receiveShadow = true;
	plane.rotation.x = -Math.PI/2;
	plane.position.y = -20;
	scene.add( plane );
}

//Create a helper for the shadow camera (optional)
var helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );

function animate() 
{
    requestAnimationFrame(animate);

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    renderer.render(scene, camera);

}
animate();
