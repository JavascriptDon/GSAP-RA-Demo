import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const About = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        const heading = section.querySelector('.about-heading');
        const badge   = section.querySelector('.badge');
        const subItems = section.querySelectorAll('.about-text-item');
        const gridItems = section.querySelectorAll('.grid-cell');

        gsap.from(badge, {
            scrollTrigger: { trigger: badge, start: 'top 88%' },
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
        });

        document.fonts.ready.then(() => {
            if (!heading) return;
            const headSplit = new SplitText(heading, { type: 'lines' });
            gsap.from(headSplit.lines, {
                scrollTrigger: { trigger: heading, start: 'top 85%' },
                opacity: 0,
                yPercent: 60,
                stagger: 0.12,
                duration: 1,
                ease: 'expo.out',
            });
        });

        subItems.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 88%' },
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: 'power3.out',
            });
        });

        gridItems.forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 90%' },
                opacity: 0,
                scale: 0.96,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power2.out',
            });
        });
    });

    return (
        <section id="about" ref={sectionRef}>
            <div>
                <span className='badge'>About Rapid Author</span>
            </div>

            <div className='content'>
                <div className='lg:col-span-8'>
                    <h2 className='about-heading'>
                        Documentation tools that understand your design data.
                    </h2>
                </div>

                <div className='sub-content lg:col-span-4'>
                    <p className='about-text-item'>
                        Rapid Author bridges the gap between engineering and technical documentation. By reusing CAD and PLM data directly, teams produce accurate manuals, work instructions, and catalogs without manual re-entry.
                    </p>
                    <p className='about-text-item'>
                        Built for technical authors who need to publish across formats — PDF, HTML, SCORM, and AR — without managing separate toolchains for each output.
                    </p>
                </div>
            </div>

            <div className='top-grid mt-10'>
                <div className='xl:col-span-8 grid-cell'>
                    <img src="/images/pump-ipc.png" alt="Rapid Author 3D parts catalog" />
                </div>
                <div className='xl:col-span-4 grid-cell' style={{ background: '#111' }}>
                    <div className='abs-center text-center px-6'>
                        <p className='font-modern-negra text-yellow text-4xl leading-tight mb-3'>Multi-CAD</p>
                        <p className='text-sm text-white/70'>SolidWorks · CATIA · NX · Creo · and more</p>
                    </div>
                </div>
            </div>

            <div className='bottom-grid'>
                <div className='md:col-span-4 grid-cell' style={{ background: '#0a0a0a', border: '1px solid #222' }}>
                    <div className='abs-center text-center px-6'>
                        <p className='font-modern-negra text-yellow text-3xl leading-tight mb-2'>7</p>
                        <p className='text-xs text-white/60 uppercase tracking-widest'>Key Features</p>
                    </div>
                </div>
                <div className='md:col-span-4 grid-cell' style={{ background: '#0a0a0a', border: '1px solid #222' }}>
                    <div className='abs-center text-center px-6'>
                        <p className='font-modern-negra text-yellow text-3xl leading-tight mb-2'>6</p>
                        <p className='text-xs text-white/60 uppercase tracking-widest'>Authoring Tools</p>
                    </div>
                </div>
                <div className='md:col-span-4 grid-cell' style={{ background: '#0a0a0a', border: '1px solid #222' }}>
                    <div className='abs-center text-center px-6'>
                        <p className='font-modern-negra text-yellow text-3xl leading-tight mb-2'>4+</p>
                        <p className='text-xs text-white/60 uppercase tracking-widest'>Output Formats</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
