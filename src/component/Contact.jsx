import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="contact__sec section">
      <div className="contact__container container">
        <h2 className="bigtitle__sec">Do you want to step in to the future before others</h2>
        <Link to='' className="secondary__btn">Request Early Access</Link>
      </div>
    </section>
  )
}

export default Contact