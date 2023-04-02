import React from 'react'
import '../styles/components/ServiceCard.css';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({type, name,route}) => {

  let navigate = useNavigate();

  const handleCardClick = () => {
    console.log("route: ", route);
    navigate(route);
  };
  

  return (
    <div className="service-card" onClick={ handleCardClick} >
        <div className="service-card-img">
            <div className="service-card-title">
                <h1>{name}</h1>
            </div>

        </div>
    </div>
  )
}

export default ServiceCard