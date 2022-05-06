import React from 'react'
import currentUsers from '../images/people.png';
import aIlustration from '../images/ai.png'
const Home = () => {
  return (
    <section className="home__sec section" id='home'>
        <div className="home__container container">
            <div className="home__data">
                <h2 className='title__sec'>
                Let’s Build Something
                amazing with GPT-3 
                OpenAI
                </h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing.
                    Indulgence way everything
                    joy alteration boisterous the attachment. 
                    Party we years to order allow asked of.
                </p>
                <div className='home__input'>
                    <input type="email" name="email" id="email" placeholder='Your Email Address'/>
                    <button className="btn">Get Started</button>
                </div>
                <div className="home__users">
                    <img src={currentUsers} alt='current users'/>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="home__img">
                <img src={aIlustration} alt='heroimage'/>
            </div>
        </div>
    </section>
  )
}

export default Home