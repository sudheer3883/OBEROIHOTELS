import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import of1 from '../../assets/img/offer1.webp'
import of2 from '../../assets/img/offer2.webp'
import of3 from '../../assets/img/offer3.webp'

const OFFERS_DATA = [
    {
        category: 'EXCLUSIVE MEMBER OFFER',
        title: 'Enjoy More With Every Stay',
        desc: 'As an Oberoi One member, enjoy up to 15% exceptional savings on reservations, plus an additional INR 5,000 hotel credit per stay when you book directly on our website.',
        img: of1
    },
    {
        category: 'SUITE EXPERIENCES',
        title: 'Urban Sanctuary Stays',
        desc: 'A summer of space, stillness and the city across our award-winning urban retreats in Bengaluru, Gurgaon, Mumbai and New Delhi. Complimentary airport transfers and bespoke butler service included.',
        img: of2
    },
    {
        category: 'UNFORGETTABLE HOLIDAYS',
        title: 'Royal Palace & Wilderness Escapes',
        desc: 'Experience our legendary hospitality in majestic palaces and wilderness lodges across Agra, Jaipur, Ranthambhore, Bandhavgarh, and Udaipur with breakfast and experiential inclusions.',
        img: of3
    }
]

const Offer = ({ onOpenBooking }) => {
    return (
        <section id="offers" className="py-4">
            <div className="container-fluid px-lg-5 px-3">
                <div className="section-header-bar px-0">
                    <div>
                        <span className="section-eyebrow">EXCLUSIVE PRIVILEGES</span>
                        <h2 className="section-main-title">Special Offers</h2>
                    </div>
                    <Link to="/offers" className="view-all-link">
                        VIEW ALL SPECIAL OFFERS <i className="fa-solid fa-angle-right ms-1"></i>
                    </Link>
                </div>

                <Splide
                    aria-label="Oberoi Special Offers"
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
                    {OFFERS_DATA.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="slider-outer">
                                <div className="slider-zoom">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="card-content-area">
                                    <span className="text-uppercase fw-semibold" style={{ fontSize: '11px', color: '#bfa15f', letterSpacing: '1.5px' }}>
                                        {item.category}
                                    </span>
                                    <h3 className="card-title-text mt-1">{item.title}</h3>
                                    <p className="card-body-text">{item.desc}</p>
                                    <div className="explore-book d-flex align-items-center">
                                        <Link to="/offers">
                                            EXPLORE <i className="fa-solid fa-angle-right"></i>
                                        </Link>
                                        <button 
                                            onClick={() => { if (onOpenBooking) onOpenBooking({ offerName: item.title }); }}
                                            className="btn btn-link text-decoration-none secondary-action p-0 border-0 fw-semibold"
                                            style={{ fontSize: '11.5px', letterSpacing: '1.8px' }}
                                        >
                                            BOOK NOW <i className="fa-solid fa-angle-right"></i>
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

export default Offer