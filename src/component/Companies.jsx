import React from 'react'
import Company from './Company'
import brand1 from '../images/atlassian.png';
import brand2 from '../images/google.png';
import brand3 from '../images/shopify.png';
import brand4 from '../images/slack.png';
import brand5 from '../images/dropbox.png';



const Companies = () => {
  return (
    <section className="companies__sec ">
        <div className="companies__container container">
            <Company 
                image={brand2}
                alt='Google Logo'
            />

            <Company 
                image={brand4}
                alt='Slack Logo'
            />

            <Company 
                image={brand1}
                alt='Atlassian Logo'
            />

            <Company 
                image={brand5}
                alt='DropBox Logo'
            />

            <Company 
                image={brand3}
                alt='Shopify Logo'
            />

        </div>
    </section>
  )
}

export default Companies