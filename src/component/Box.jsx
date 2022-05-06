import React from 'react'

const Box = ({image}) => {
  return (
    <div className="blog__box">
        <div className="blog__img">
            <img src={image} alt="blog__image" />
        </div>
        <div className="blog__data">
        <span>Sep 26, 2021</span>
        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
        <span>Read Full Article</span>
        </div>
    </div>
  )
}

export default Box