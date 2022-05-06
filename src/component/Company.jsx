import React from 'react'

const Company = ({image,descp}) => {
  return (
    <div className='company__content'>
        <img  src={image} alt={descp} />
    </div>
  )
}

export default Company