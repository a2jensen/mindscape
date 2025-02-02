import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight , 0.1 , 1000)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth , window.innerHeight);
document.body.appendChild( renderer.domElement );

/**
 * Creating the cube as well as text
 */
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width, canvas.height = 256, 256;
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.font = "30px Garamond";
ctx.fillText("mmmmmindscapeeeeeeeee", 0, 50);
ctx.fillText("mmmmmindscapeeeeeeeee", 0, 100);
ctx.fillText("mmmmmindscapeeeeeeeee", 0, 150);
ctx.fillText("mmmmmindscapeeeeeeeee", 0, 200);


// create a texture from the canvas
const texture = new THREE.CanvasTexture(canvas);

const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 60;

function animate() {
    cube.rotation.x += 0.020;
    cube.rotation.y += 0.020;
	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );
