import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Art from './components/Art';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Features/>
        <Art/>
    </main>
  )
}

export default App

/*<div className='h-dvh bg-black' /> */