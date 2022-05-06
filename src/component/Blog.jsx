import React from 'react'
import Box from './Box';
import img1 from '../images/blog01.png';
import img2 from '../images/blog02.png';
import img3 from '../images/blog03.png';


const Blog = () => {
  return (
    <section className="blog__sec section" id='blog'>
        <div className="blog__container container">
            <h1 className="bigtitle__sec">A lot is happening,<br/> We are blogging about it.</h1>
            <div className="blog__content">
                <div className='blog1'>
                    <Box image={img1}/>
                </div>
                <div className='blog2'>
                    <Box image={img2}/>
                    <Box image={img3}/>
                    <Box image={img1}/>
                    <Box image={img2}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog