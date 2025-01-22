import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 0.1 , 1000)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth , window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const materialLine = new THREE.LineBasicMaterial( { color : 0x000ff });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 50;

const points = []
points.push( new THREE.Vector3( -10, 0 , 0));
points.push( new THREE.Vector3( 0, 10 ,0));
points.push( new THREE.Vector3( 10, 0 , 0));
const geometryLine = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometryLine , material )
scene.add ( line);

function animate() {
    cube.rotation.x += 0.020;
    cube.rotation.y += 0.020;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
