import React from 'react'
import '../styles/components/ServiceCard.css';

const ServiceCard = ({type, name}) => {
  return (
    <div className="service-card">
        <div className="service-card-img">
            <div className="service-card-title">
                <h1>{name}</h1>
            </div>

        </div>
    </div>
  )
}

export default ServiceCard