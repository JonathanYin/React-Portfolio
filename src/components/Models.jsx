import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import CityCanvas from "./canvas/City";
import { SectionWrapper } from "../hoc";
// import { extend } from "@react-three/fiber/extend";

// extend ({ OrbitControls });

const ModelCanvas = () => {
    return (
        <>
        {/* <Canvas>
            <Stage environment="city" contactShadow intensity={0.6}>
                <CityCanvas />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas> */}
        <CityCanvas />
        </>
    )
};

export default SectionWrapper(ModelCanvas, "");