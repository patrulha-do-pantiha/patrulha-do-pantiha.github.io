let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let dog = null;

let loader = new THREE.GLTFLoader();
loader.load('models/dog_pooping/scene.gltf', function(gltf) {
    dog = gltf.scene;
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});

// let geometry = new THREE.BoxGeometry();
// let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// let cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.z = 2;

function animate() {
    requestAnimationFrame(animate);
    if (dog) {
        dog.rotation.x += 0.01;
        dog.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
}
animate();

