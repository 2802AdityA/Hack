import React from 'react'
import ServiceCard from './ServiceCard'
import '../styles/components/Services.css';
import { useNavigate } from 'react-router';

const Services = () => {

    const navigate = useNavigate();
    return (
        <div className="service-container">
            <div className="service-list">
                <ServiceCard
                    type="CHATBOT"
                    name="Bot Talk Time"
                    onClick={navigate('/chat')}
                />
                <ServiceCard
                    type="VIDEOCALL"
                    name="Connect with people"
                    onClick={navigate('/video')}
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