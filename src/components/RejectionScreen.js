import React, { useState, Suspense } from 'react';
import Model from './3Dmodel';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from "@react-three/drei";

const RejectionScreen = ({ onConfirm }) => {
    const [buttonStyle, setButtonStyle] = useState({
        left: '50%', // Initial position (center)
        top: '50%', // Initial position (center)
    });

    const handleConfirm = (confirmed) => {
        if (!confirmed) {
            // Move the button to a random position on the screen
            const randomLeft = Math.random() * window.innerWidth;
            const randomTop = Math.random() * window.innerHeight;

            setButtonStyle({
                left: `${randomLeft}px`,
                top: `${randomTop}px`,
                position: 'absolute'
            });
            onConfirm(!confirmed);
        }
    }
    return (
        <div className="screen rejection-screen">
            <div className="model-container">
                <Canvas className="canvas-style">
                    <Suspense>
                        <PerspectiveCamera makeDefault position={[0, 0.2, 5]} />
                        <ambientLight intensity={3} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <Model modelPath={'./models/guyIdleAnim.glb'} animation={"Armature.001|mixamo.com|Layer0"} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='select'>
                <div>
                    <h2>Are you sure? 🥺</h2>
                    <div className="button-container">
                        <button
                            className="run-away"
                            style={buttonStyle}
                            onClick={() => handleConfirm(false)}
                        >
                            Yes
                        </button>
                        {console.log(buttonStyle)}
                        <button onClick={() => onConfirm(false)}>No</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RejectionScreen;
