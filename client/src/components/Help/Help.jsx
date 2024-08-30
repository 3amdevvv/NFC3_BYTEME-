import React from 'react'
import Card from './Card'
import "./Help"
function Help() {
  return (
    <div className="help">
        <h1 className='nuni text-center text-5xl font-extrabold' style={{color:'black'}}>How can you help?</h1>
        <p className='intro nuni flex justify-center items-centre' style={{color:'black'}}s>
      Your support can make a significant difference in the lives of those in need. Whether you choose to volunteer your time or make a donation, your contribution is invaluable to us. Join us in our mission to create a positive impact in our community.
    </p>
        <div class="cards-container">
            <Card heading="Volunteer" description="Volunteering your time and skills can make a profound impact in our community. Join us to help create meaningful change and make a difference in the lives of those in need. Your dedication and support are invaluable." path={'/volunteer'} ></Card>
            <Card heading="Donate us" description="Your generous donations allow us to provide essential resources and support to those in need. Every contribution helps us continue our mission to create a better world. Together, we can make a lasting impact." path={'/donate'}></Card>
        </div>

    </div>
    
  )
}

export default Help