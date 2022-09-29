// import Movements from "./movement.js";

// import polygon from "./Web3.js";
// import abi from "./abi/abi.json" assert { type: "json" };

const scene = new THREE.Scene();
//Contract Address = 0x9647D18bFd52F007F382804910A887c580E4f083
//scene.background = new THREE.Color(0xf1ed11);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const ambient_light = new THREE.AmbientLight(0x404040);
const direction_light = new THREE.DirectionalLight(0xffffff, 1);
ambient_light.add(direction_light);
scene.add(ambient_light);

const geometry_area = new THREE.BoxGeometry(100, 0.2, 50);
const material_area = new THREE.MeshPhongMaterial({ color: 0xffffff });
const area = new THREE.Mesh(geometry_area, material_area);
scene.add(area);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const geometry_cyl = new THREE.CylinderGeometry(5, 5, 20, 32);
const material_cyl = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const cylinder = new THREE.Mesh(geometry_cyl, material_cyl);
scene.add(cylinder);
cylinder.position.set(20, 5, 0);

const geometry_cone = new THREE.ConeGeometry(5, 20, 32);
const material_cone = new THREE.MeshPhongMaterial({ color: 0x1be3ef });
const cone = new THREE.Mesh(geometry_cone, material_cone);
scene.add(cone);
cone.position.set(-10, 5, 0);

camera.position.z = 5;
camera.position.set(10, 5, 40);

function animate() {
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  cube.rotation.z += 0.05;
  cylinder.rotation.x += 0.1;
  cylinder.rotation.y += 0.1;
  cone.rotation.x += 0.1;
  cone.rotation.y += 0.1;
  requestAnimationFrame(animate);

//   if (Movements.isPressed(37)) {
//     //left
//     camera.position.x -= 0.5;
//   }
//   if (Movements.isPressed(38)) {
//     //up
//     camera.position.x += 0.5;
//     camera.position.y += 0.5;
//   }
//   if (Movements.isPressed(39)) {
//     //right
//     camera.position.x += 0.5;
//   }
//   if (Movements.isPressed(40)) {
//     //down
//     camera.position.x -= 0.5;
//     camera.position.y -= 0.5;
//   }

  camera.lookAt(area.position);
  renderer.render(scene, camera);
}
animate();
renderer.render(scene, camera);

// const button = document.querySelector("#mint");
// button.addEventListener("click", mintNFT);


// polygon.then((result) => {
//   result.nft.forEach((object, index) => {
//     if (index <= result.supply) {
//       const geometry_cube = new THREE.BoxGeometry(object.w, object.h, object.d);
//       const material_cube = new THREE.MeshPhongMaterial({ color: 0x1be3ef });
//       const nft = new THREE.Mesh(geometry_cube, material_cube);

//       nft.position.set(object.x, object.y, object.z);
//       scene.add(nft);
//     }
//   });
// });
