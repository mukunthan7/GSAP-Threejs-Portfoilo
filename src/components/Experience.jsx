import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Room } from "./Room"
import { Overlay } from "./Overlay"

const Experience = () => {
    return (
        <>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <directionalLight intensity={0.6} position={[100, 100, 100]} />
            <ScrollControls pages={4} damping={0.3}>
                <Overlay />
                <Room />
            </ScrollControls>
        </>
    )
}

export default Experience