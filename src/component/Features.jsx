import React from 'react'
import possible from '../images/possibility.png';

const Features = () => {
  return (
    <section className="features__sec section" id='CaseStudies'>
        <div className="features__container container">
            <div className="features__img">
                <img src={possible} alt="possibility" />
            </div>
            <div className="features__data">
                <span>Request Early Access to Get Started</span>
                <h2 className="title__sec">The possibilities are beyond your imagination</h2>
                <p>
                Yet bed any for travelling assistance indulgence unpleasing. 
                Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                Party we years to order allow asked of.
                </p>
                <span>Request Early Access to Get Started</span>
            </div>
        </div>
    </section>
  )
}

export default Features