import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Art = () => {

  const isMobile = useMediaQuery({maxWidth: 767});

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';

    const maskTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#art',
            start,
            end: 'bottom center',
            scrub: 1.5,
            pin: true,
        }
    })

    maskTimeline.to('.will-fade', {
        opacity: 0, 
        stagger: 0.2,
        ease: 'power1.inOut',
    }).to('.masked-img',{ scale: 1.3 , maskPosition: 'center', maskSize: '400%', ease: 'power1.inOut', duration: 1})
    .to('#masked-content', {opacity: 1, duration: 1, ease: 'power1.inOut'});
})
  return (
    <div id="art">
        <div className='container mx-auto h-full pt-20'>
            <h2 className='will-fade'>XR</h2>
            <div className='content'>
                <div className='cocktail-img'>
                    <img src="https://placehold.co/600x400" alt="cocktail" className='abs-center masked-img size-full object-contain'/>
                    
                </div>

            </div>

            <div className='masked-container'>
                <h2 className='will-fade pt-20'>Dummy Text</h2>
                <div id="masked-content">
                    <h3>Industrial Mixed Reality Technology  </h3>
                    <p>Live Demonstration</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art