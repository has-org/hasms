// ProductViewer2D.tsx
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { DoubleSide, Mesh, MeshBasicMaterial, RepeatWrapping, TextureLoader } from "three";

const RenderFrame = ({ images }: { images: any[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const planeRef = useRef<Mesh>(null!);

  // Function to handle image change
  const handleImageChange = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  // Loading images into textures
  const textures = images.map((image) => new TextureLoader().load(image));
  textures[currentImageIndex].wrapS = RepeatWrapping;
  textures[currentImageIndex].wrapT = RepeatWrapping;
  textures[currentImageIndex].repeat.set(1,1)

  // Update the texture on the plane
  useFrame(() => {
    if (
      planeRef.current &&
      planeRef.current.material instanceof MeshBasicMaterial
    ) {
      planeRef.current.material.map = textures[currentImageIndex];
    }
  });

  return (
    <mesh ref={planeRef} rotation={[0, Math.PI, 0]} onClick={handleImageChange}>
      <planeGeometry args={[1,1]} />
      <meshBasicMaterial map={textures[currentImageIndex]} side={DoubleSide} />
    </mesh>
  );
};

const ProductViewer2D = ({ images }: { images: any[] }) => {
  return (
    <div>
      <Canvas>
        <RenderFrame images={images} />
      </Canvas>
    </div>
  );
};

export default ProductViewer2D;
