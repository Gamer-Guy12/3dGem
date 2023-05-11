import * as THREE from 'three';
import * as MATH from 'math.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 3, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

var forward = true;
var count = 30;
var forward = new THREE.Vector4();
forward = THREE.Vector4(1, 0, 0, 0);
var matrix = new THREE.Matrix4();
var identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
matrix.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

document.onkeydown = function (e) {
  if (e.which == 87) {
    camera.translateX(forward.x);
    camera.translateX(forward.y);
    camera.translateX(forward.z);
  } else if (e.which == 83) {
    camera.translateX(-forward.x);
    camera.translateX(-forward.y);
    camera.translateX(-forward.z);
  } else if (e.which == 65) {
  } else if (e.which == 68) {
  }
};

/*document.onkeydown((e) => {
  alert(e);
  /*if (e.which == 87) {
    camera.getWorldDirection(vector);
    alert(vector);
  }*
});*/

function animate() {
  requestAnimationFrame(animate);

  //cube.translateX(5);
  //camera.translateX(5);

  /*if (forward && count >= 0) {
    camera.translateZ(1);
    count--;
  } else if (forward && count < 0) {
    forward = false;
    camera.translateZ(-1);
    count = 30;
  } else if (!forward && count >= 0) {
    camera.translateZ(-1);
    count--;
  } else if (!forward && count < 0) {
    forward = true;
    camera.translateZ(1);
    count = 30;
  }*/

  renderer.render(scene, camera);
}

animate();
