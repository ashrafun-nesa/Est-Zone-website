import Icon1 from './images/health-insurance.png';
import Icon2 from './images/bag.png';
import Icon3 from './images/commission.png';
import ChooseUsImage from './images/choose-us-image.png'
import PlayIcon from './Icons/PlayIcon';
import { useState } from 'react';
import CrossIcon from './Icons/CrossIcon';

export default function ChooseUsSection(){
  const [playVideo, setPlayVideo] = useState(false);
    return(
      <>
        <section className='choose-us-section'>
        <div className='site-container'>
          <div className="choose-us-wrapper">
            <div className='image-section'>
              <img src={ChooseUsImage} alt="home-image" />
              <button className='play-btn' onClick={() => setPlayVideo(true)}>
                <PlayIcon/>
              </button>
              
            </div>
            <div className='about-info '>
              <h2>Why Choose Us?</h2>
              <p className='description'>Condimentum taciti phasellus nisi urna risus etiam hendrerit bibendum euismod sollicitudin nunc velit.</p>
              <div className='property-info-wrapper'>
                <div className='single-info'>
                  <div className="icon">
                    <img src={Icon1} alt="health-insurance" />
                  </div>
                  <div className="text-wrapper">
                    <h5>Property Insurance</h5>
                    <p>Euismod sollicitudin nunc velit.</p>
                  </div>
                </div>
                <div className='single-info'>
                  <div className="icon">
                    <img src={Icon2} alt="health-insurance" />
                  </div>
                  <div className="text-wrapper">
                    <h5>Tax Advantage</h5>
                    <p>Euismod sollicitudin nunc velit.</p>
                  </div>
                </div>
                <div className='single-info'>
                  <div className="icon">
                    <img src={Icon3} alt="health-insurance" />
                  </div>
                  <div className="text-wrapper">
                    <h5>Lowest Commision</h5>
                    <p>Euismod sollicitudin nunc velit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {playVideo && 
        <div class="overlay-wrapper">
          <div className='video-wrapper'>
          <button className='cross-btn' onClick={() => setPlayVideo(false)}>
            <CrossIcon/>
          </button>
          <iframe width="560" height="315" src={playVideo ? "https://www.youtube.com/embed/u31qwQUeGuM?si=ase-LLGbTBxctsW1?&autoplay=1" : "https://www.youtube.com/embed/u31qwQUeGuM?si=ase-LLGbTBxctsW1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        
        </div>}
        </>
    )
}