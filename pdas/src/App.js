import React from 'react';
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


export default function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>
            Personel Digital Assistance
          </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
                title="Cortana"
                handle="@cortana" 
                image={CortanaImage}
                description = "I dont know about Cortana"
              />
            </div>
            <div className="column is-4">
              <ProfileCard 
                title="Alexa" 
                handle="@alexa" 
                image={AlexaImage}
                description = "Alexa please sing a song" 
              />      
            </div>
            <div className="column is-4">
              <ProfileCard 
                title="Siri" 
                handle="@siri" 
                image={SiriImage} 
                description="Siri sucks"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    

  )
}
