import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Art from './components/Art';
import About from './components/About';
import Contact from './components/Contact';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Features/>
        <About/>
        <Art/>
        <Contact/>
    </main>
  )
}

export default App
