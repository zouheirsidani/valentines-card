import React, { useState, Suspense } from 'react';
import Model from './3Dmodel';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from "@react-three/drei";

const SelectionScreen = ({ onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelection = (option) => {
        setSelectedOption(option);
        onSelect(option === 'Yes');
    };

    return (
        <div className="screen selection-screen">
            <h1>💖 Hey gorgeous 💖</h1>
            <div className='large-container'>
                <div className="model-container">
                    <Canvas className="canvas-style">
                        <Suspense>
                            <PerspectiveCamera makeDefault position={[0, 0.2, 5]} />
                            <ambientLight intensity={3} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <Model modelPath={'./models/guyIdleAnim.glb'} animation={"Armature|mixamo.com|Layer0.001"} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className='select'>
                    <div>
                        <h2>Will you be my valentine?</h2>
                        <div className="button-container">
                            <button onClick={() => handleSelection('Yes')}>Yes</button>
                            <button onClick={() => handleSelection('No')}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectionScreen;
