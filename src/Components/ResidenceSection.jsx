import { useState, useEffect } from 'react';
import BestChoice from './Icons/BestCoice';
import LeftArrowIcon from './Icons/LeftArrowIcon';

export default function (){
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);
  
    const cardData = [
      {
        title: 'Card 1',
        description: 'This is the first card',
        imageUrl: 'image1.jpg',
      },
      {
        title: 'Card 2',
        description: 'This is the second card',
        imageUrl: 'image2.jpg',
      },
      {
        title: 'Card 3',
        description: 'This is the third card',
        imageUrl: 'image3.jpg',
      },
      {
        title: 'Card 4',
        description: 'This is the fourth card',
        imageUrl: 'image4.jpg',
      },
      {
        title: 'Card 5',
        description: 'This is the fifth card',
        imageUrl: 'image5.jpg',
      },
      {
        title: 'Card 6',
        description: 'This is the sixth card',
        imageUrl: 'image6.jpg',
      },
      {
        title: 'Card 7',
        description: 'This is the seventh card',
        imageUrl: 'image7.jpg',
      },
      {
        title: 'Card 8',
        description: 'This is the eighth card',
        imageUrl: 'image8.jpg',
      },
      {
        title: 'Card 9',
        description: 'This is the ninth card',
        imageUrl: 'image9.jpg',
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
                <span>
                    <BestChoice/>
                </span>
                <div className='heading-wrapper'>
                    <h2>Popular Residences</h2>
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
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
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