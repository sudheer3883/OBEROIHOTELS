import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import d1 from '../assets/img/dining1.webp'
import d2 from '../assets/img/dining2.webp'
import d3 from '../assets/img/dining3.webp'
import d4 from '../assets/img/dining4.webp'
import d5 from '../assets/img/dining5.webp'
import d6 from '../assets/img/dining6.webp'
import d7 from '../assets/img/dining7.webp'

const DINING_LIST = [
    {
        name: 'Mewar by Vineet',
        location: 'The Oberoi Udaivilas, Udaipur',
        desc: 'Drawing inspiration from the regional houses to the rural communities of the historic Mewar kingdom, Mentor Chef Vineet Bhatia (MBE) reimagines traditional flavours with signature finesse.',
        img: d1
    },
    {
        name: 'Madam Chow',
        location: 'The Oberoi, Gurgaon',
        desc: 'Celebrates the rich culinary heritage of China, showcasing the finest traditions of Guangdong (Cantonese) and Sichuan regions renowned for distinctive flavours and masterful techniques.',
        img: d2
    },
    {
        name: 'Lord Vesper',
        location: 'The Oberoi, Gurgaon',
        desc: 'A high-energy bar that redefines evenings with craft cocktails, global cuisine and an immersive nightlife experience. Named after the enigmatic Lord Vesper.',
        img: d3
    },
    {
        name: 'Dhilli',
        location: 'The Oberoi, New Delhi',
        desc: 'Mentored by Michelin-starred Chef Vineet Bhatia MBE, Dhilli celebrates Delhi’s culinary diversity, inspired by Chandni Chowk, Nizamuddin and Purani Dilli.',
        img: d4
    },
    {
        name: 'Eau Bar',
        location: 'The Oberoi, Mumbai',
        desc: 'With art-deco themed interiors, an outdoor deck, sweeping ocean views, exclusive craft cocktails and live music beside the Arabian Sea.',
        img: d5
    },
    {
        name: 'Wabi Sabi',
        location: 'The Oberoi, Bengaluru',
        desc: 'Inspired by its namesake Japanese philosophy honouring the ephemeral beauty of nature. Enjoy live sushi, sashimi, and robata amid a zen waterfall soundscape.',
        img: d6
    },
    {
        name: 'Rivayat',
        location: 'The Oberoi, Marrakech',
        desc: 'An ode to India’s culinary traditions, refined to unprecedented levels with innovations by Michelin-starred Chef Rohit Ghai in Marrakech.',
        img: d7
    }
]

const Dining = ({ onOpenTableReservation }) => {
    return (
        <section id="dining" className="py-4 bg-light bg-opacity-50">
            <div className="container-fluid px-lg-5 px-3">
                <div className="section-header-bar px-0">
                    <div>
                        <span className="section-eyebrow">CULINARY EXCELLENCE</span>
                        <h2 className="section-main-title">Signature Dining</h2>
                    </div>
                    <Link to="/dining" className="view-all-link">
                        VIEW ALL RESTAURANTS <i className="fa-solid fa-angle-right ms-1"></i>
                    </Link>
                </div>

                <Splide
                    aria-label="Oberoi Signature Dining"
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
                    {DINING_LIST.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="slider-outer">
                                <div className="slider-zoom">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="card-content-area">
                                    <h3 className="card-title-text">{item.name}</h3>
                                    <p className="text-muted small mb-2 fw-semibold" style={{ letterSpacing: '0.5px' }}>
                                        {item.location}
                                    </p>
                                    <p className="card-body-text">{item.desc}</p>
                                    <div className="explore-book d-flex align-items-center">
                                        <Link to="/dining">
                                            EXPLORE MENU <i className="fa-solid fa-angle-right"></i>
                                        </Link>
                                        <button 
                                            onClick={() => {
                                                if (onOpenTableReservation) {
                                                    onOpenTableReservation({ restaurant: item.name, hotel: item.location })
                                                }
                                            }}
                                            className="btn btn-link text-decoration-none secondary-action p-0 border-0 fw-semibold"
                                            style={{ fontSize: '11.5px', letterSpacing: '1.8px' }}
                                        >
                                            RESERVE TABLE <i className="fa-solid fa-angle-right"></i>
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

export default Dining