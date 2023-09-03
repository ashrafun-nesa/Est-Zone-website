import { useState, useEffect } from 'react';
import BestChoice from './Icons/BestCoice';
import LeftArrowIcon from './Icons/LeftArrowIcon';
import ImageOne from './images/card-image-1.png';
import ImageTwo from './images/card-image-2.png';
import ImageThree from './images/card-image-3.png';

export default function (){
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);
  
    const cardData = [
        {
          title: 'Aliva Priva Jardin',
          description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
          imageUrl: ImageOne,
          amount: '47,043',
        },
        {
          title: 'Asatti Garden City',
          description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
          imageUrl: ImageTwo,
          amount: '66,043',
        },
        {
          title: 'Citraland Puri Serang',
          description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
          imageUrl: ImageThree,
          amount: '35,543',
        },
        {
          title: 'Aliva Priva Jardin',
          description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
          imageUrl: ImageOne,
          amount: '47,043',
        },
        {
          title: 'Asatti Garden City',
          description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
          imageUrl: ImageTwo,
          amount: '66,043',
        },
        {
          title: 'Citraland Puri Serang',
          description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
          imageUrl: ImageThree,
          amount: '35,543',
        },
        {
          title: 'Aliva Priva Jardin',
          description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
          imageUrl: ImageOne,
          amount: "47,043",
        },
        {
          title: 'Asatti Garden City',
          description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
          imageUrl: ImageTwo,
          amount: '66,043',
        },
        {
            title: 'Citraland Puri Serang',
            description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            imageUrl: ImageThree,
            amount: '35,543',
        },
      ];      
  
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 768) {
          setCardsPerPage(1); // Mobile view, show 1 card
        } else {
          setCardsPerPage(3); // Larger screens, show 3 cards
        }
      }
  
      // Add a listener to handle window resize events
      window.addEventListener('resize', handleResize);
  
      // Call handleResize once to set the initial cardsPerPage value
      handleResize();
  
      // Remove the resize listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handlePrevCards = () => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === 0 ? cardData.length - cardsPerPage : prevIndex - cardsPerPage
      );
    };
  
    const handleNextCards = () => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex + cardsPerPage >= cardData.length ? 0 : prevIndex + cardsPerPage
      );
    };
  
    const handlePageClick = (page) => {
      const newIndex = (page - 1) * cardsPerPage;
      setCurrentCardIndex(newIndex);
    };

    return(
        <section className='residence-section'>
            <div className='site-container'>
                <span className='animate-left'>
                    <BestChoice/>
                </span>
                <div className='heading-wrapper'>
                    <h2 className='animate-left'>Popular Residences</h2>
                    <div className='btn-wrapper'>
                    <button className="slider-button prev" onClick={handlePrevCards}>
                       <LeftArrowIcon/>
                    </button>
                    <button className="slider-button next" onClick={handleNextCards}>
                        <LeftArrowIcon/>
                    </button>
                    </div>
                </div>
                <div className="card-slider">
      
                    <div className="cards-container">
                        {cardData.slice(currentCardIndex, currentCardIndex + cardsPerPage).map((card, index) => (
                        <div key={index} className="card">
                            <img src={card.imageUrl} alt={card.title} />
                            <p className='dolar-amount'><span className='dolar'>$</span>{card.amount}</p>
                            <h3>{card.title}</h3>
                            <p className='description'>{card.description}</p>
                        </div>
                        ))}
                    </div>
        
                    <div className="pagination-dots">
                        {Array.from({ length: Math.ceil(cardData.length / cardsPerPage) }).map((_, page) => (
                        <span
                            key={page}
                            className={`dot ${page === currentCardIndex / cardsPerPage ? 'active' : ''}`}
                            onClick={() => handlePageClick(page + 1)}
                        />
                        ))}
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}