// components/3DModel.js
import React, { useRef, useState, useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const Model = ({ modelPath, animation }) => {
    const loader = new GLTFLoader();
    const [model, setModel] = useState();
    const [mixer, setMixer] = useState(null);

    useEffect(() => {
        loader.load(
            modelPath,
            (gltf) => {
                const newModel = gltf.scene;
                const animations = gltf.animations;
                newModel.scale.set(1.8, 1.8, 1.8);
                newModel.position.set(0, -1, 0)
                setModel({ scene: newModel, animations });
            }
        )
    }, [modelPath]);

    useEffect(() => {
        if (model) {
            const mixerInstance = new THREE.AnimationMixer(model.scene);
            setMixer(mixerInstance);
        }
    }, [model]);

    useEffect(() => {
        if (mixer && model) {
            const newAnimationClip = model.animations.find(
                (clip) => clip.name === animation
            );
            const newAnimationAction = mixer.clipAction(newAnimationClip);
            newAnimationAction.reset().play();
        }
    }, [mixer, model]);

    useFrame(
        (state, delta) => {
            if (mixer) {
                mixer.update(delta);
            }
        }
    );

    return (<>
        {model && <primitive object={model.scene} dispose={null} />}
    </>);
};

export default Model;
