const THREE = require("three");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.setZ(30);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

renderer.render(scene, camera);

const geometry = new THREE.BoxGeometry(12, 24, 4, 5, 5, 5);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const phone = new THREE.Mesh( geometry, material);

scene.add(phone);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);

const axesHelper = new THREE.AxesHelper( 100 );
scene.add( axesHelper );


scene.add(pointLight, ambientLight);

function rotatePhone() {
  window.addEventListener("deviceorientation", (event) => {
    let alpha = 2 * Math.PI * (event.alpha / 360);
    let beta = 2 * Math.PI * (event.beta / 360);
    let gamma = 2 * Math.PI * (event.gamma / 360);

    phone.rotation.setFromVector3(new THREE.Vector3(beta, gamma, alpha))
});
}

function animate() {
  requestAnimationFrame( animate );
  rotatePhone();
  renderer.render( scene, camera );
}

animate()