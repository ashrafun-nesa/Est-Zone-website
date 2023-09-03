import DownArrowIcon from './Icons/DownArrowIcon';
import HamburgerMenu from './Icons/HamburgerMenu';
import CrossIcon from './Icons/CrossIcon';
import FooterLogo from "./images/footer-logo.png";
import HeaderLogo from './images/header-logo.png'
import { useState } from 'react';

export default function HeroSection(){
    
const [showMobileMenu, setShowMobileMenu] = useState(false);
    return(
        <section className='hero-section '>
        <div className='site-container'>
          <div className='hero-header'>
            <div className="site-logo">
              <img src={HeaderLogo} alt="site-logo" />
            </div>
            <nav className='navbar'>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Property</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </nav>
            <div className='site-btn'>
              <button className='sign-btn'>Sign up</button>
              <button className='sign-btn'>Sign in</button>
            </div>
            <button className='hamberger-menu' onClick={() => setShowMobileMenu(true)}>
              <HamburgerMenu/>
            </button> 
            <div className={`mobile-navbar ${showMobileMenu ? 'show' : ''}`}>
            <button className='cross-btn' onClick={() => setShowMobileMenu(false)}>
              <CrossIcon/>
            </button>
            <div className="site-logo">
              <img src={FooterLogo} alt="site-logo" />
            </div>
            <nav className='navbar'>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Property</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </nav>
            <div className='site-btn'>
              <button className='sign-btn'>Sign up</button>
              <button className='sign-btn'>Sign in</button>
            </div>
          </div>

          </div>
          <div className='hero-main'>
            <h1 className='animate-left'>Estate Made Your Life More Fun</h1>
            <p className='description animate-left'>Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.</p>
            <div className='hero-info animate-left'>
              <div className='counts-section'>
                <p className="totals">1300+</p>
                <p className="items">Premium Product</p>
              </div>
              <div className='counts-section'>
                <p className="totals">4500+</p>
                <p className="items">Happy Customer</p>
              </div>
              <div className='counts-section'>
                <p className="totals">240+</p>
                <p className="items">Awards</p>
              </div>
            </div>
            <div className='search-section animate-left'>
              <div className='select-option-wrapper'>
              <div className='info-wrapper'>
                <p>Location</p>
                <button className='select-btn'>
                  Select your city
                  <DownArrowIcon/>
                </button>
              </div>
              <div className='info-wrapper'>
                <p>Price Range</p>
                <button className='select-btn'>
                  Select price range
                  <DownArrowIcon/>
                </button>
              </div>
              </div>
              <button className='search-btn'>Search</button>
            </div>
          </div>
        </div>
        <div className='white-bg'></div>
      </section>
    )
}