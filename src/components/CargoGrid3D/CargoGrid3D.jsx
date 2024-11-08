import { useEffect } from "react";

import * as THREE from "three";

import "./CargoGrid3D.css";

const CargoGrid3D = () => {
  useEffect(() => {
    let root = document.getElementById("CargoGrid3D-root");

    if (!root) return;
    const scene = new THREE.Scene();
    const aspectRatio = root.offsetWidth / root.offsetHeight;
    const camWidth = 10;
    const camera = new THREE.OrthographicCamera(
      camWidth / -2,
      camWidth / 2,
      camWidth / aspectRatio / 2,
      camWidth / aspectRatio / -2,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(root.offsetWidth, root.offsetHeight);

    root.innerHTML = "";
    root.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
  }, []);
  return <div className="CargoGrid3D-container" id="CargoGrid3D-root"></div>;
};

export default CargoGrid3D;
