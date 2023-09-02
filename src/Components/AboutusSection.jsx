import homeImage from './images/home-image.png'

export default function AboutusSection(){
    return(
        <section className='about-us'>
        <div className='site-container'>
          <div className="about-us-wrapper">
            <div className='image-section animate-left'>
              <img src={homeImage} alt="home-image" />
            </div>
            <div className='about-info'>
              <h2>About Us</h2>
              <h5>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam</h5>
              <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
              <button className='read-more-btn'>Read More</button>
            </div>
          </div>
        </div>
      </section>
    )
}