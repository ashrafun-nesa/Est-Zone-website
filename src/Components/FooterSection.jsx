import FooterLogo from "./images/footer-logo.png";
import Instagram from "./images/instagram.png";
import Facebook from "./images/facebook.png";
import Linkedin from "./images/linkedin.png";
import Twitter from "./images/twitter.png";
import Pinterest from "./images/pinterest.png";
import Phone from "./images/phone-call.png";
import Email from "./images/email.png";
import Map from "./images/map.png";
import PropertyImg1 from "./images/card-image-2.png";
import PropertyImg2 from "./images/footer-img-2.png";


export default function FooterSection(){
    return(
        <section className='footer-section'>
        <div className='site-container'>
            <div className="footer-wrapper">
                <div className="address single-wrapper">
                    <img src={FooterLogo} alt="FooterLogo" className="footer-logo" />
                    <div className="social-media">
                        <img src={Instagram} alt='logo' />
                        <img src={Facebook} alt='logo' />
                        <img src={Linkedin} alt='logo' />
                        <img src={Twitter} alt='logo' />
                        <img src={Pinterest} alt='logo' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend</p>
                </div>
                <div className="single-wrapper links">
                    <h5 className="title">Links</h5>
                    <a className="text" href="#">Lorem ipsum </a>
                    <a className="text" href="#">Lorem ipsum </a>
                    <a className="text" href="#">Lorem ipsum </a>
                    <a className="text" href="#">Lorem ipsum </a>
                </div>
                <div className="single-wrapper">
                    <h5 className="title">Contact</h5>
                    <p className="text">
                        <img src={Phone} alt="Phone" />
                        123-45896
                    </p>
                    <p className="text">
                        <img src={Email} alt="Email" />
                        Loremipsum@gmail.com 
                    </p>
                    <p className="text">
                        <img src={Map} alt="Map" />
                        Lorem ipsum, Lorem ipsum 
                    </p>
                </div>
                <div className="single-wrapper">
                    <h5 className="title">Latest Properties</h5>
                    <div className="property-img-wrapper">
                        <img src={PropertyImg1} alt="PropertyImg1" />
                        <div>
                            <p className="text">Villa With ameizing view</p>
                            <p className="text">5,500,564$</p>
                        </div>
                    </div>
                    <div className="property-img-wrapper">
                        <img src={PropertyImg2} alt="PropertyImg2" />
                        <div>
                            <p className="text">Villa With ameizing view</p>
                            <p className="text">5,500,564$</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copy-right">©CopyRight 2022 ESTZONE</p>
        </div>
        </section>
    )
}