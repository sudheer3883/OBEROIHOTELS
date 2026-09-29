import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import h1 from '../assets/img/homes1.webp'
import h2 from '../assets/img/homes2.webp'
import h3 from '../assets/img/homes3.webp'
import h4 from '../assets/img/homes4.webp'
import h5 from '../assets/img/homes5.webp'
import h6 from '../assets/img/homes6.webp'
import h7 from '../assets/img/homes7.jpg'
import h8 from '../assets/img/homes8.webp'
import h9 from '../assets/img/homes9.webp'
import h10 from '../assets/img/homes10.webp'

const DESTINATIONS_DATA = {
    india: [
        {
            name: 'The Oberoi Amarvilas, Agra',
            desc: 'Inspired by Mughal palace designs with fountains, terraced lawns, reflection pools and pavilions, the resort offers unrestricted views of the Taj Mahal.',
            img: h1
        },
        {
            name: 'The Oberoi Vindhyavilas, Bandhavgarh',
            desc: 'An oasis of luxury in the heart of India, nestled in Madhya Pradesh and surrounded by the serene beauty of the wilderness.',
            img: h2
        },
        {
            name: 'The Oberoi, Bengaluru',
            desc: 'Nestled in lush, tropical grounds and equipped with the latest technology, this urban retreat harmonises the dual personality of Bengaluru.',
            img: h3
        },
        {
            name: 'The Oberoi, Gurgaon',
            desc: 'A striking example of contemporary design minutes from New Delhi international airport, offering a sense of calm and connectivity.',
            img: h4
        },
        {
            name: 'The Oberoi Rajvilas, Jaipur',
            desc: 'A royal resort amidst the timeless charm of the Pink City, recreating princely Rajasthan in a beautiful fort setting.',
            img: h5
        },
        {
            name: 'Naila Fort, An Oberoi Luxury Residence, Jaipur',
            desc: 'An intimate royal retreat rooted in Rajasthan\'s heritage. Set high in the Aravalli Ranges, offered exclusively for private stays.',
            img: h6
        },
        {
            name: 'The Oberoi Rajgarh Palace, Khajuraho',
            desc: 'Perched atop the Maniyargh Hills near Khajuraho, this 350-year-old palace was built by Raja Hindupat Singh Bundela.',
            img: h7
        },
        {
            name: 'The Oberoi Grand, Kolkata',
            desc: 'An icon on the landscape of Kolkata, with a storied reputation for taking care of its guests in the heart of the City of Joy.',
            img: h8
        },
        {
            name: 'The Oberoi, Mumbai',
            desc: 'A seaside sanctuary on Marine Drive in South Mumbai, enjoying a superlative position close to key business and cultural hubs.',
            img: h9
        },
        {
            name: 'The Oberoi Udaivilas, Udaipur',
            desc: 'Set on the serene banks of Lake Pichola, this palace retreat captures the romance and grandeur of Udaipur with domed pavilions and lush gardens.',
            img: h10
        }
    ],
    egypt: [
        {
            name: 'The Oberoi, Sahl Hasheesh',
            desc: 'Discover underwater treasures and beachside luxury nestled along the shores of the Red Sea with private courtyards and domed suites.',
            img: h1
        },
        {
            name: 'The Oberoi Philae, Luxury Nile Cruiser',
            desc: 'Cruise along the River Nile for four or six nights on this award-winning cruiser and fall in love with the secrets of ancient Egypt.',
            img: h2
        },
        {
            name: 'The Oberoi Zahra, Luxury Nile Cruiser',
            desc: 'See the wonders of ancient Egypt unfold before your eyes as you cruise along the Nile with unmatched personalised service.',
            img: h3
        }
    ],
    indonesia: [
        {
            name: 'The Oberoi Beach Resort, Bali',
            desc: 'Located on Seminyak Beach and set within 15 acres of tropical gardens, featuring a natural amphitheatre for traditional Balinese dances.',
            img: h4
        },
        {
            name: 'The Oberoi Beach Resort, Lombok',
            desc: 'Set on the serene shores of Medana Bay surrounded by 24 acres of landscaped gardens, where time slows to the gentle rhythm of island life.',
            img: h5
        }
    ],
    mauritius: [
        {
            name: 'The Oberoi Beach Resort, Mauritius',
            desc: 'Situated on the white sandy shores of Turtle Bay, a natural marine park, enjoying picture-perfect sunset views and sub-tropical gardens.',
            img: h6
        }
    ],
    morocco: [
        {
            name: 'The Oberoi, Marrakech',
            desc: 'Nestled within citrus orchards and centuries-old olive groves, featuring authentic Andalusian architecture inspired by Moroccan palaces.',
            img: h7
        }
    ],
    saudi: [
        {
            name: 'The Oberoi Sukoonvilas, Wadi Safar',
            desc: 'Set within historic Diriyah in Saudi Arabia and inspired by the Najdi heritage of Wadi Safar, blending quiet luxury and valley views.',
            img: h10
        }
    ]
}

const DestinationSl = ({ onOpenBooking }) => {
    const [activeCountry, setActiveCountry] = useState('india')
    const currentList = DESTINATIONS_DATA[activeCountry] || DESTINATIONS_DATA.india

    return (
        <section id="destinations" className="py-4">
            <div className="container-fluid px-lg-5 px-3">
                <div className="section-header-bar px-0">
                    <div>
                        <span className="section-eyebrow">WORLDWIDE RETREATS</span>
                        <h2 className="section-main-title">Destinations</h2>
                    </div>
                    <Link to="/destinations" className="view-all-link">
                        VIEW ALL DESTINATIONS <i className="fa-solid fa-angle-right ms-1"></i>
                    </Link>
                </div>

                {/* Country Filter Navigation Tabs */}
                <div className="destination-tabs-nav">
                    <button 
                        className={`dest-tab-btn ${activeCountry === 'india' ? 'active' : ''}`}
                        onClick={() => setActiveCountry('india')}
                    >
                        India
                    </button>
                    <button 
                        className={`dest-tab-btn ${activeCountry === 'egypt' ? 'active' : ''}`}
                        onClick={() => setActiveCountry('egypt')}
                    >
                        Egypt
                    </button>
                    <button 
                        className={`dest-tab-btn ${activeCountry === 'indonesia' ? 'active' : ''}`}
                        onClick={() => setActiveCountry('indonesia')}
                    >
                        Indonesia
                    </button>
                    <button 
                        className={`dest-tab-btn ${activeCountry === 'mauritius' ? 'active' : ''}`}
                        onClick={() => setActiveCountry('mauritius')}
                    >
                        Mauritius
                    </button>
                    <button 
                        className={`dest-tab-btn ${activeCountry === 'morocco' ? 'active' : ''}`}
                        onClick={() => setActiveCountry('morocco')}
                    >
                        Morocco
                    </button>
                    <button 
                        className={`dest-tab-btn ${activeCountry === 'saudi' ? 'active' : ''}`}
                        onClick={() => setActiveCountry('saudi')}
                    >
                        Saudi Arabia
                    </button>
                </div>

                {/* Destination Carousel */}
                <Splide
                    key={activeCountry}
                    aria-label="Oberoi Destinations"
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
                    {currentList.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="slider-outer">
                                <div className="slider-zoom">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="card-content-area">
                                    <h3 className="card-title-text">{item.name}</h3>
                                    <p className="card-body-text">{item.desc}</p>
                                    <div className="explore-book d-flex align-items-center">
                                        <Link to="/destinations">
                                            EXPLORE <i className="fa-solid fa-angle-right"></i>
                                        </Link>
                                        <a 
                                            href="#booking" 
                                            className="secondary-action" 
                                            onClick={(e) => { e.preventDefault(); if (onOpenBooking) onOpenBooking({ hotelName: item.name }); }}
                                        >
                                            BOOK <i className="fa-solid fa-angle-right"></i>
                                        </a>
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

export default DestinationSl