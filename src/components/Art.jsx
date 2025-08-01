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
            <h2 className='will-fade'>The CAD</h2>

            <div className='content'>
                <div className='cocktail-img'>
                    <img src="/images/pump-ipc.png" alt="cocktail" className='abs-center masked-img size-full object-contain'/>

                </div>
            </div>

            <div className='masked-container'>
                <h2 className='will-fade pt-30'>Illustrated Parts Catalog</h2>
                <div id="masked-content">
                    <h3>Pump IPC Parts Catalog</h3>
                    <p>Check it out live <a href="https://demo.cortona3d.com/?demopath_request=..%2Fdemoset%2FPUMP__IPC_GENERIC_IPC_EN%2Fplugin_free%2FPUMP__IPC_GENERIC_IPC.cortona3d" className='font-bold'>here</a>!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art