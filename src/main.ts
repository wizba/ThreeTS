import * as THREE from 'three';
import './style.css';

// Scene 
const scene =new THREE.Scene();
//Mesh
const geometry = new THREE.BoxGeometry(1,1,1,2,2,2);
const material = new THREE.MeshBasicMaterial({color:'aqua', wireframe:true});
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh);
// Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height);
camera.position.z = 3;
// Renderer
const canvas = document.querySelector(".draw") as HTMLCanvasElement | OffscreenCanvas | undefined;
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width,aspect.height);
renderer.render(scene,camera);

// clock class
const clock = new THREE.Clock();

// animation
const animation = () =>{
    
    // mesh.rotation.x +=0.01;
    // mesh.rotation.y +=0.01;
    // mesh.rotation.z +=0.01;
    const elapsedTime = clock.getElapsedTime();
    // Update Rotation on X axis
    mesh.rotation.y =elapsedTime * Math.PI * 0.1;
    
    renderer.render(scene,camera);

    window.requestAnimationFrame(animation);
}

animation();