// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();
// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Keep the 3D object on a global variable so we can access it later
let object;

// OrbitControls allow the camera to move around the scene
let controls;

// Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// Load the file
loader.load(
  `scene.gltf`,
  function (gltf) {
    // If the file is loaded, add it to the scene
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    // While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    // If there is an error, log it
    console.error(error);
  }
);

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
// renderer.setSize(window.innerWidth/2, window.innerHeight/2);
renderer.setSize(1200, 600);
// Add the renderer to the DOM
document.getElementById("3D").appendChild(renderer.domElement);

// Set how far the camera will be from the 3D model
camera.position.z = 10;
camera.position.y=-20;
camera.position.x = 100

// Add a directional light as the key light to highlight the 3D model
const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Brighter key light
directionalLight.position.set(300, 400, 300); // Adjusted position to light the model more naturally
directionalLight.castShadow = true;
scene.add(directionalLight);

// Add ambient light to ensure even lighting without harsh shadows
const ambientLight = new THREE.AmbientLight(0x555555, 1.5); // Slightly brighter ambient light
scene.add(ambientLight);


const pointLight = new THREE.PointLight(0xffffff, 1.5, 0); // (color, intensity, distance)
pointLight.position.set(-100, 200, 200); // Position to complement directional light
scene.add(pointLight);

// This adds controls to the camera, so we can rotate / zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; // Disable panning
controls.minAzimuthAngle = -Math.PI / 4; // Allow full rotation around Y-axis
controls.maxAzimuthAngle = Math.PI / 4; // Allow full rotation around Y-axis
controls.minPolarAngle = Math.PI / 2; // Lock rotation on the X-axis
controls.maxPolarAngle = Math.PI / 2; // Lock rotation on the X-axis

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the 3D rendering
animate();





