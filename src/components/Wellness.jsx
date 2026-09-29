import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import w1 from '../assets/img/well1.webp'
import w2 from '../assets/img/well2.webp'
import w3 from '../assets/img/well3.webp'
import w4 from '../assets/img/well4.webp'
import w5 from '../assets/img/well5.webp'

const WELLNESS_DATA = [
    {
        title: 'Oberoi Spa Experiences',
        tag: 'HOLISTIC WELL-BEING',
        desc: 'Our exclusive Oberoi spa experiences combine treatments to suit specific needs. Be it tension release, skin rejuvenation or full-body exfoliation. Let our intuitive therapists take care of your wellness journey.',
        img: w1
    },
    {
        title: 'Signature Massage Therapies',
        tag: 'EASTERN & WESTERN TECHNIQUES',
        desc: 'Choose from a wide range of traditional and modern Eastern and Western massage treatments to soothe the senses, restore vitality and revive the spirit. Customised to your individual preferences.',
        img: w2
    },
    {
        title: 'Sensorial & Sound Healing',
        tag: 'RESTORATIVE HARMONY',
        desc: 'We combine sensory aromatherapy with meditative techniques to relax your body and mind, stimulate energy flow and promote deep emotional and physiological healing.',
        img: w3
    },
    {
        title: 'Curated Facial Treatments',
        tag: 'NATURAL RADIANCE',
        desc: 'Take your pick from our specially curated facial treatments using certified natural botanicals to relax, refresh and revitalise your skin, restoring its natural, youthful glow.',
        img: w4
    },
    {
        title: 'Yoga Stretch & Daily Reflections',
        tag: 'MIND & BODY BALANCE',
        desc: 'Nourish your body and revitalise your soul. Experience yogic postures and pranayama breathing techniques in serene open-air pavilions under the guidance of our resident yoga masters.',
        img: w5
    }
]

const Wellness = () => {
    return (
        <section id="wellness" className="py-4">
            <div className="container-fluid px-lg-5 px-3">
                <div className="section-header-bar px-0">
                    <div>
                        <span className="section-eyebrow">REJUVENATE & RESTORE</span>
                        <h2 className="section-main-title">Wellness & Spa</h2>
                    </div>
                    <Link to="/wellness" className="view-all-link">
                        VIEW ALL SPA THERAPIES <i className="fa-solid fa-angle-right ms-1"></i>
                    </Link>
                </div>

                <Splide
                    aria-label="Oberoi Wellness"
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
                    {WELLNESS_DATA.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="slider-outer">
                                <div className="slider-zoom">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="card-content-area">
                                    <span className="text-uppercase fw-semibold" style={{ fontSize: '11px', color: '#bfa15f', letterSpacing: '1.5px' }}>
                                        {item.tag}
                                    </span>
                                    <h3 className="card-title-text mt-1">{item.title}</h3>
                                    <p className="card-body-text">{item.desc}</p>
                                    <div className="explore-book">
                                        <Link to="/wellness">
                                            DISCOVER SPA PROGRAMME <i className="fa-solid fa-angle-right"></i>
                                        </Link>
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

export default Wellness