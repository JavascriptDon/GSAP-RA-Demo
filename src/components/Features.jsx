import React from 'react'
import {rapidAuthorFeatures, rapidAuthorFeatureDetails, rapidAuthorToolSet, rapidAuthorPurpose} from '../../constants'


const Features = () => {

  return (
    <section id="cocktails" className='noisy'>

         <div className='list'>
            <div className='popular'>
                           <h2>Key Features of Rapid Author</h2>

                <ul>
                    {rapidAuthorFeatures.map((feature, idx) => (
                        <li key={idx}>
                            <div className='me-28'>
                                <h3>{feature}</h3>
                                <p>{rapidAuthorFeatureDetails[idx]}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='loved'>
     <h2>Rapid Author Toolset</h2>
                <ul>
                    {rapidAuthorToolSet.map((tool, idx) => (
                        <li key={idx}>
                            <div className='me-28'>
                                <h3>{tool}</h3>
                                <p>{rapidAuthorPurpose[idx]}</p>
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

