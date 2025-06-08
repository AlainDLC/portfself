"use client";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export function Dev({ animation, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/king.glb");

  // Ladda alla animationer
  const { animations: typeAnimation } = useFBX("animations/Typing.fbx");
  const { animations: pushAnimation } = useFBX("animations/Pp.fbx");
  const { animations: salsa1Animation } = useFBX("animations/Salsa1.fbx");
  const { animations: salsa2Animation } = useFBX("animations/Salsa2.fbx");
  const { animations: sillyAnimation } = useFBX("animations/Silly.fbx");
  const { animations: saluteAnimation } = useFBX("animations/Salute.fbx");

  typeAnimation[0].name = "Kodar";
  pushAnimation[0].name = "Tränar";
  salsa1Animation[0].name = "Bachata";
  salsa2Animation[0].name = "Salsa";
  sillyAnimation[0].name = "Helg";
  saluteAnimation[0].name = "Redo";

  const allAnimations = [
    ...typeAnimation,
    ...pushAnimation,
    ...salsa1Animation,
    ...salsa2Animation,
    ...sillyAnimation,
    ...saluteAnimation,
  ];

  // Använd useAnimations för att hantera alla animationer
  const { actions } = useAnimations(allAnimations, group);

  useEffect(() => {
    if (actions[animation]) {
      actions[animation].reset().play();
    }

    // Rensa upp när animationen byts eller komponenten avmonteras
    return () => {
      if (actions[animation]) {
        actions[animation].stop();
      }
    };
  }, [animation, actions]);

  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation-x={-Math.PI / 2.3}>
        <primitive object={nodes.Hips} />

        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/king.glb");

export default Dev;
