import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import exp1 from '../../assets/img/exp1.webp'
import exp2 from '../../assets/img/exp2.webp'
import exp3 from '../../assets/img/exp3.jpg'
import exp4 from '../../assets/img/exp4.webp'
import exp5 from '../../assets/img/exp5.webp'

const EXPERIENCES_DATA = [
    {
        title: 'Forest Bathing',
        location: 'The Oberoi Sukhvilas, New Chandigarh',
        desc: 'The surrounding Siswan Forest is one of the best places in India to switch off from the world and feel yourself tuning into nature’s vibrations with guided meditation walks.',
        img: exp1
    },
    {
        title: 'Dine Under the Stars',
        location: 'The Oberoi Amarvilas, Agra',
        desc: 'Choose between a specially curated four-course dinner and our recommended Royal Indian ‘thali’. Delicious cuisines and an ethereal terrace setting overlooking the illuminated Taj Mahal.',
        img: exp2
    },
    {
        title: 'Himalayan Mountain Biking',
        location: 'Wildflower Hall, Shimla',
        desc: 'Try one of the best things to do in the Himalayas. Explore pristine cedar forest trails or off-road mountain passes and connect with alpine nature.',
        img: exp3
    },
    {
        title: 'Red Sea Scuba Diving',
        location: 'The Oberoi, Sahl Hasheesh',
        desc: 'Explore the vibrant marine reefs of the Red Sea with an array of water sports and PADI-certified diving experiences with expert instructors.',
        img: exp4
    },
    {
        title: 'The Impressionist High Tea',
        location: 'The Oberoi, Bengaluru',
        desc: 'A unique experience commencing with a guided horticultural walk around century-old rain trees and verdant gardens, ending with a four-course artisanal high tea.',
        img: exp5
    }
]

const Experience = ({ onOpenBooking }) => {
    return (
        <section id="experiences" className="py-4 bg-light bg-opacity-50">
            <div className="container-fluid px-lg-5 px-3">
                <div className="section-header-bar px-0">
                    <div>
                        <span className="section-eyebrow">UNFORGETTABLE MOMENTS</span>
                        <h2 className="section-main-title">Curated Experiences</h2>
                    </div>
                    <Link to="/experiences" className="view-all-link">
                        VIEW ALL EXPERIENCES <i className="fa-solid fa-angle-right ms-1"></i>
                    </Link>
                </div>

                <Splide
                    aria-label="Oberoi Experiences"
                    options={{
                        type: 'loop',
                        perPage: 2,
                        perMove: 1,
                        gap: '35px',
                        pagination: false,
                        arrows: true,
                        breakpoints: {
                            1200: { perPage: 2, gap: '25px' },
                            768: { perPage: 1, gap: '20px' }
                        }
                    }}
                >
                    {EXPERIENCES_DATA.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="slider-outer">
                                <div className="slider-zoom">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="card-content-area">
                                    <h3 className="card-title-text">{item.title}</h3>
                                    <p className="text-muted small mb-2 fw-semibold" style={{ letterSpacing: '0.5px' }}>
                                        {item.location}
                                    </p>
                                    <p className="card-body-text">{item.desc}</p>
                                    <div className="explore-book d-flex align-items-center">
                                        <Link to="/experiences">
                                            EXPLORE <i className="fa-solid fa-angle-right"></i>
                                        </Link>
                                        <button 
                                            onClick={() => {
                                                if (onOpenBooking) onOpenBooking({ hotelName: item.location, experienceName: item.title })
                                            }}
                                            className="btn btn-link text-decoration-none secondary-action p-0 border-0 fw-semibold"
                                            style={{ fontSize: '11.5px', letterSpacing: '1.8px' }}
                                        >
                                            RESERVE <i className="fa-solid fa-angle-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    )
}

export default Experience