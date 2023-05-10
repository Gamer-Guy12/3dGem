import * as THREE from 'three';

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
var vector = new THREE.Vector3();
var matrix = new THREE.Matrix4();

document.onkeydown = function (e) {
  if (e.which == 87) {
    camera.getWorldDirection(vector);
    camera.translateX(vector.x);
    camera.translateY(vector.y);
    camera.translateZ(vector.z);
  } else if (e.which == 83) {
    camera.getWorldDirection(vector);
    camera.translateX(-vector.x);
    camera.translateY(-vector.y);
    camera.translateZ(-vector.z);
  } else if (e.which == 65) {
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);

    camera.applyQuaternion(quaternion);
  } else if (e.which == 68) {
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI / 2);

    camera.applyQuaternion(quaternion);
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
