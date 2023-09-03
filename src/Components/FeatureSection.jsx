
import featureImage1 from './images/feature-image-1.png';
import featureImage2 from './images/feature-image-2.png';
import featureImage3 from './images/feature-image-3.png';
import Logo1 from './images/logo-1.png';
import Logo2 from './images/logo-2.png';
import Logo3 from './images/logo-3.png';
import Logo4 from './images/logo-4.png';

export default function FeatureSection(){
    return(
        <section className='feature-section'>
        <div className='site-container'>
          <div className="feature-wrapper">
            <h2 className='animate'>Featured property</h2>
            <p className="description animate">Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.</p>
            <div className="word-wrapper animate">
              <span>tempus(20)</span>
              <span>amet(42)</span>
              <span>vehicula(20)</span>
              <span>morbi(23)</span>
              <span>porttitor(14)</span>
              <span>pretium(20)</span>
            </div>
            <div className="feature-card-wrapper">
              <div className="signle-card">
                <img src={featureImage1} alt="feature-image-1" />
                <div className='text-wrapper'>
                  <h3 className="title">Ipsum Apartment</h3>
                  <p className="text">Price: <span className="dolar">$55500</span></p>
                </div>
              </div>
              <div className="signle-card">
                <img src={featureImage2} alt="feature-image-2" />
                <div className='text-wrapper'>
                  <h3 className="title">Lorem Apartment</h3>
                  <p className="text">540 Sq m / 3 Bedroom</p>
                  <p className="text">250 m / 1 Grage</p>
                  <p className="text">Price: <span className="dolar">$65500</span></p>
                </div>
               
              </div>
              <div className="signle-card">
                <img src={featureImage3} alt="feature-image-3" />
                <div className='text-wrapper'>
                  <h3 className="title">Amet Apartment</h3>
                  <p className="text">Price: <span className="dolar">$55500</span></p>
                </div>
              </div>
            </div>
            <button className='search-btn animate'>View All Property</button>
            <div className="feature-logo-wrapper animate">
              <img src={Logo1} alt="logo" />
              <img src={Logo2} alt="logo" />
              <img src={Logo3} alt="logo" />
              <img src={Logo4} alt="logo" />
            </div>
          </div>
        </div>
      </section>
    )
}