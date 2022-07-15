import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../components/model.js'

export default function RenderModel() {
    return (
        <Canvas
            camera={{ position: [2, 0, 12.25], fov: 12 }}
            style={{
                background: 'transparant' ,
                width: 'inherit',
                height: 'inherit',
                transform: 'translateX(25%)'
            }}
        >
            <ambientLight intensity={.6} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={1} />
            <Suspense fallback={null}>
                <Model position={[0.025, -.9, 0]}/>
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}