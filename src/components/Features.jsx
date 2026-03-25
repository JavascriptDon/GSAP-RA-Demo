import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { rapidAuthorFeatures, rapidAuthorFeatureDetails, rapidAuthorToolSet, rapidAuthorPurpose } from '../../constants'

const Features = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const featureItems = section.querySelectorAll('.feature-item');
    const toolItems = section.querySelectorAll('.tool-item');
    const featureHeading = section.querySelector('.features-heading');
    const toolHeading = section.querySelector('.toolset-heading');

    featureItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
        },
        opacity: 0,
        x: -40,
        duration: 0.7,
        ease: 'power3.out',
      });
    });

    toolItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
        },
        opacity: 0,
        x: 40,
        duration: 0.7,
        ease: 'power3.out',
      });
    });

    document.fonts.ready.then(() => {
      if (!featureHeading || !toolHeading) return;

      const featureHeadSplit = new SplitText(featureHeading, { type: 'chars' });
      gsap.from(featureHeadSplit.chars, {
        scrollTrigger: {
          trigger: featureHeading,
          start: 'top 85%',
        },
        opacity: 0,
        yPercent: 80,
        stagger: 0.04,
        duration: 0.8,
        ease: 'expo.out',
      });

      const toolHeadSplit = new SplitText(toolHeading, { type: 'chars' });
      gsap.from(toolHeadSplit.chars, {
        scrollTrigger: {
          trigger: toolHeading,
          start: 'top 85%',
        },
        opacity: 0,
        yPercent: 80,
        stagger: 0.04,
        duration: 0.8,
        ease: 'expo.out',
      });
    });

  });

  return (
    <section id="cocktails" className='noisy' ref={sectionRef}>
      <div className='list'>

        <div className='popular'>
          <h2 className='features-heading'>Key Features</h2>

          <ul>
            {rapidAuthorFeatures.map((feature, idx) => (
              <li key={idx} className='feature-item'>
                <div className='me-28'>
                  <div className='flex items-start gap-4'>
                    <span
                      className='shrink-0 font-modern-negra text-yellow opacity-50 leading-none select-none'
                      style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', minWidth: '2.25rem' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3>{feature}</h3>
                      <p className='mt-1'>{rapidAuthorFeatureDetails[idx]}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='loved'>
          <h2 className='toolset-heading'>Toolset</h2>

          <ul>
            {rapidAuthorToolSet.map((tool, idx) => (
              <li key={idx} className='tool-item'>
                <div
                  className='me-0 w-full border-l-2 border-yellow/30 pl-5 hover:border-yellow transition-colors duration-300 group cursor-default'
                >
                  <div className='flex items-center gap-3 mb-1'>
                    <span
                      className='font-sans text-xs font-semibold tracking-widest text-yellow/50 uppercase select-none group-hover:text-yellow transition-colors duration-300'
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className='h-px flex-1 bg-white/10 group-hover:bg-yellow/30 transition-colors duration-300' />
                  </div>
                  <h3 className='group-hover:text-yellow transition-colors duration-300'>{tool}</h3>
                  <p className='mt-1'>{rapidAuthorPurpose[idx]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Features
