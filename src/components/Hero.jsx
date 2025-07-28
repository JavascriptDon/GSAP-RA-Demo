import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef()
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(()=> {
        const heroSplit = new SplitText('.title', {type: 'chars,words'});
        const paraSplit = new SplitText('.subtitle', {type: 'lines'});
        
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paraSplit.lines,{
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

   	gsap.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
	 },
	})

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true, // ties the animation progress to scroll
        pin: true, // keeps the video in-place. 
    },
    });

    // Animate the video: scale and fade
    videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current , {
            currentTime: videoRef.current.duration
    })}
},[])
  return (
    <>
    <section id="hero" className='noisy'>
        <h1 className='title'>CAD</h1>

        <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Powerful. Flexible. Efficient.</p>
                    <p className='subtitle'>Deliver Better Docs</p>
                </div>

                <div className='view-cocktails'>
                    <p className='subtitle'>
                    Rapid Author improves documentation quality and efficiency by reusing CAD or PLM XML data for manuals, work instructions, and training materials.
                    </p>
                    <a href="https://demo.cortona3d.com/">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <div className='video absolute inset-0'>
        <video ref={videoRef} src="./videos/output.mp4" muted playsInline preload='auto'/>
    </div>
    </>
  )
}

export default Hero