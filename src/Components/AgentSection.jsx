import Image1 from './images/agent-image-1.png'
import Image2 from './images/agent-image-2.png'

export default function AgentSection(){
    return(
        <section className='agent-section'>
        <div className='site-container'>
          <div className="agent-wrapper">
            <div className='about-info animate-left'>
              <h2>Get Everything You Need To Pick The Right Agent</h2>
              <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
            </div>
            <div className='image-section animate-right'>
              <img src={Image1} alt="home-image" />
              <img src={Image2} alt="home-image" />
            </div>
            
          </div>
        </div>
      </section>
    )
}