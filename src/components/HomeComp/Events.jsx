import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import ev1 from '../../assets/img/event1.webp'
import ev2 from '../../assets/img/event2.webp'
import ev3 from '../../assets/img/event3.webp'
import ev4 from '../../assets/img/event4.webp'
import ev5 from '../../assets/img/event5.webp'

const EVENTS_DATA = [
    {
        title: 'Roshnara & Jahanara Ballrooms',
        location: 'The Oberoi Amarvilas, Agra',
        desc: 'With soaring ceilings and authentic crystal chandeliers, this is a venue for regal banquets and weddings with up to 190 guests, featuring an adjoining pre-function foyer overlooking reflection pools.',
        img: ev1
    },
    {
        title: 'The Bamboo Grove',
        location: 'The Oberoi, Bengaluru',
        desc: 'An open-air alfresco venue surrounded by century-old tropical greenery. Ideal for sunny garden brunches, high-profile corporate receptions and intimate evening gatherings.',
        img: ev2
    },
    {
        title: 'The Grand Ballroom',
        location: 'The Oberoi, Gurgaon',
        desc: 'Can host up to 600 guests in complete grand style or divide into three private soundproof venues. Features separate VIP entrances and panoramic views of our signature water bodies.',
        img: ev3
    },
    {
        title: 'Durbar Hall',
        location: 'The Oberoi Sukhvilas, New Chandigarh',
        desc: 'Echoing royal Rajput and Mughal court architecture, accommodating up to 350 guests with majestic vaulted arches, hand-painted gold leaf frescoes and tranquil forest surroundings.',
        img: ev4
    },
    {
        title: 'The Grand Canal',
        location: 'The Oberoi, Marrakech',
        desc: 'A magnificent 120-metre reflecting pool at the heart of our Moroccan palace. Evening receptions held here enjoy breathtaking sunsets against the snow-capped Atlas Mountains.',
        img: ev5
    }
]

const Events = ({ onOpenProposal }) => {
    return (
        <section id="events" className="py-4 bg-light bg-opacity-50">
            <div className="container-fluid px-lg-5 px-3">
                <div className="section-header-bar px-0">
                    <div>
                        <span className="section-eyebrow">GRAND VENUES & CELEBRATIONS</span>
                        <h2 className="section-main-title">Meetings & Events</h2>
                    </div>
                    <Link to="/events" className="view-all-link">
                        PLAN AN EVENT <i className="fa-solid fa-angle-right ms-1"></i>
                    </Link>
                </div>

                <Splide
                    aria-label="Oberoi Events"
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
                    {EVENTS_DATA.map((item, index) => (
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
                                        <Link to="/events">
                                            VIEW VENUE <i className="fa-solid fa-angle-right"></i>
                                        </Link>
                                        <button 
                                            onClick={() => {
                                                if (onOpenProposal) {
                                                    onOpenProposal({ venue: item.title, hotel: item.location })
                                                }
                                            }}
                                            className="btn btn-link text-decoration-none secondary-action p-0 border-0 fw-semibold"
                                            style={{ fontSize: '11.5px', letterSpacing: '1.8px' }}
                                        >
                                            REQUEST PROPOSAL <i className="fa-solid fa-angle-right"></i>
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

export default Events