import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Features/>
    </main>
  )
}

export default App

/*<div className='h-dvh bg-black' /> */