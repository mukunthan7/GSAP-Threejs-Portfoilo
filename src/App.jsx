import React from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'



function App() {
  window.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }
    , { passive: false });
  return (
    <>
      <Canvas camera={{ fov: 26, position: [100, 100, 100] }}>
        <Experience />
      </Canvas>
    </>
  )
}

export default App
