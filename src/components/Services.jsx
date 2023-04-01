import React from 'react'
import ServiceCard from './ServiceCard'
import '../styles/components/Services.css';


const Services = () => {
  return (
    <div className="service-container">
        <div className="service-list">
            <ServiceCard 
                type="CHATBOT"
                name="Bot Talk Time"
            />
            <ServiceCard 
                type="VIDEOCALL"
                name="Connect with people"
            />
            <ServiceCard 
                type="BLOG"
                name="The SocioAid Blog"
            />
            <ServiceCard 
                type="EXERCISE"
                name="Exercise to imporve"
            />
            <ServiceCard 
                type="DR_CONNECT"
                name="Connect with a professional"
            />
        </div>
    </div>
  )
}

export default Services