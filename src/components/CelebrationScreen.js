import React, { useState, Suspense } from 'react';
import Model from './3Dmodel';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from "@react-three/drei";

const CelebrationScreen = () => {
    return (
        <div className="screen celebration-screen">
            <h1>💖 Gonna be us Having so much fun! 💖</h1>
            <div className="model-container">
                <Canvas className="canvas-style">
                    <Suspense>
                        <PerspectiveCamera makeDefault position={[0, 0.2, 5]} />
                        <ambientLight intensity={3} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <Model modelPath={'./models/guyIdleAnim.glb'} animation={"Armature|mixamo.com|Layer0"} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="model-container">
                <Canvas className="canvas-style">
                    <Suspense>
                        <PerspectiveCamera makeDefault position={[0, 0.2, 5]} />
                        <ambientLight intensity={2.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <Model modelPath={'./models/girlDanceAnim.glb'} animation={"Armature|mixamo.com|Layer0"} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

export default CelebrationScreen;
