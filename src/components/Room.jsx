import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";

export function Room(props) {
    const { nodes, materials } = useGLTF("./model/my_room.glb");

    const ref = useRef();
    const tl = useRef();

    const scroll = useScroll()

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline()

        tl.current.to(ref.current.rotation, {
            z: -Math.PI / 2,
            duration: 1,
            ease: "power3.out"
        })
        tl.current.to(ref.current.rotation, {
            z: -Math.PI,
            duration: 1,
            ease: "power3.out"
        })
        tl.current.to(ref.current.rotation, {
            z: -Math.PI * 1.5,
            duration: 1,
            ease: "power3.out"
        })
        tl.current.to(ref.current.rotation, {
            z: -Math.PI * 2,
            duration: 1,
            ease: "power3.out"
        })
    }, [])

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} ref={ref}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.comp_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.triangle_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.keyboard_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.railing_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.table_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.cabin_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.lamp_emis_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.kovrik_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.vac_black_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.miuse_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.red_vac_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.vacuum1_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pCylinder5_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.stylus_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.vires_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tablet_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.radiator_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.window_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.handls_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.emis_lambert1_0.geometry}
                        material={materials.lambert1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.vacuumgrey_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.red_bttns_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.lamp_white_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.lamp_bl_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pillows_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface53_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.chair_body_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor2_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor3_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes._________6_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.body1_blinn1_0.geometry}
                        material={materials.blinn1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.window4_phong1_0.geometry}
                        material={materials.phong1}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./model/my_room.glb");
