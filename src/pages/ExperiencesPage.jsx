import exp1 from '../assets/img/exp1.webp'
import exp2 from '../assets/img/exp2.webp'
import exp3 from '../assets/img/exp3.jpg'
import exp4 from '../assets/img/exp4.webp'
import exp5 from '../assets/img/exp5.webp'

const EXPERIENCES_LIST = [
    {
        title: 'Forest Bathing in Siswan Woods',
        hotel: 'The Oberoi Sukhvilas Resort & Spa',
        location: 'New Chandigarh, Himalayan Foothills',
        desc: 'Immerse your senses in the therapeutic atmosphere of the 8,000-acre Siswan Forest. Guided by our resident naturalist, experience Shinrin-yoku—the ancient practice of breathing in phytoncides released by native flora for deep cellular grounding.',
        highlights: ['Guided mindfulness walk', 'Sound healing meditation', 'Herbal forest tea ritual'],
        img: exp1
    },
    {
        title: 'Dine Under the Stars with Taj Mahal Views',
        hotel: 'The Oberoi Amarvilas',
        location: 'Agra, Uttar Pradesh',
        desc: 'An unforgettable evening on your private candlelit terrace, framed by uninterrupted vistas of the illuminated Taj Mahal. Savor a four-course royal feast accompanied by the gentle melodies of a live sitar virtuoso.',
        highlights: ['Private terrace setup', 'Dedicated personal butler', 'Royal Mughal tasting menu'],
        img: exp2
    },
    {
        title: 'Himalayan Cedar Forest Mountain Biking',
        hotel: 'Wildflower Hall, An Oberoi Resort',
        location: 'Shimla, Himachal Pradesh',
        desc: 'Traverse untouched alpine paths through ancient deodar and cedar forests 8,250 feet above sea level. Feel the crisp mountain breeze and witness panoramic vistas of snow-capped Pir Panjal peaks.',
        highlights: ['Trek bikes & safety gear', 'Accompanying trail guide', 'Scenic alpine picnic hamper'],
        img: exp3
    },
    {
        title: 'Red Sea Scuba Diving & Coral Exploration',
        hotel: 'The Oberoi Beach Resort',
        location: 'Sahl Hasheesh, Egypt',
        desc: 'Explore the kaleidoscopic coral reefs and aquatic marine sanctuaries of the Red Sea. PADI-certified dive masters guide you through shipwrecks, sea turtle habitats, and vibrant underwater gardens.',
        highlights: ['Private dive boat charter', 'PADI certification courses', 'Underwater photography'],
        img: exp4
    },
    {
        title: 'The Impressionist High Tea & Garden Tour',
        hotel: 'The Oberoi, Bengaluru',
        location: 'Bengaluru, Karnataka',
        desc: 'A sensory journey through centenarian rain trees and blooming bougainvillea guided by our head horticulturist, concluding with a bespoke four-course French-Indian high tea at The Polo Club.',
        highlights: ['Botanical guided walk', 'Handcrafted pastries & macarons', 'Single-estate artisanal teas'],
        img: exp5
    }
]

const ExperiencesPage = ({ onOpenBooking }) => {
    return (
        <div className="experiences-page-wrapper">
            {/* Page Hero Header */}
            <div className="py-5 bg-dark text-white text-center position-relative" style={{ backgroundColor: '#171a2e' }}>
                <div className="container py-4">
                    <span className="section-eyebrow" style={{ color: '#bfa15f' }}>UNFORGETTABLE MOMENTS</span>
                    <h1 className="big-text text-white display-5 mb-3">Curated Oberoi Experiences</h1>
                    <p className="mx-auto text-white-50" style={{ maxWidth: '750px', fontSize: '15px', lineHeight: '1.8' }}>
                        From private dining under the Taj Mahal to alpine forest trails and underwater reefs, each experience is tailored to awaken curiosity and create lifelong memories.
                    </p>
                </div>
            </div>

            {/* Experiences Showcase */}
            <div className="container-fluid px-lg-5 px-3 py-5">
                <div className="row g-5">
                    {EXPERIENCES_LIST.map((item, index) => (
                        <div key={index} className="col-12">
                            <div className={`row g-4 align-items-center ${index % 2 === 1 ? 'flex-lg-row-reverse' : ''}`}>
                                <div className="col-lg-6">
                                    <div className="slider-zoom shadow-sm">
                                        <img src={item.img} alt={item.title} className="w-100" style={{ height: '400px', objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <div className="col-lg-6 ps-lg-5">
                                    <span className="text-uppercase fw-semibold" style={{ fontSize: '11px', color: '#bfa15f', letterSpacing: '2px' }}>
                                        {item.hotel} · {item.location}
                                    </span>
                                    <h2 className="big-text display-6 my-2">{item.title}</h2>
                                    <p className="card-body-text" style={{ fontSize: '14.5px', lineHeight: '1.8' }}>
                                        {item.desc}
                                    </p>
                                    <div className="mb-4">
                                        <h6 className="small fw-bold text-uppercase text-muted" style={{ letterSpacing: '1px' }}>
                                            EXPERIENCE HIGHLIGHTS:
                                        </h6>
                                        <ul className="list-unstyled mb-0">
                                            {item.highlights.map((h, i) => (
                                                <li key={i} className="small py-1 text-dark">
                                                    <i className="fa-solid fa-check text-warning me-2" style={{ color: '#bfa15f' }}></i>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => onOpenBooking && onOpenBooking({ hotelName: `${item.title} at ${item.hotel}` })}
                                        className="book1-btn py-2 px-4"
                                    >
                                        RESERVE THIS EXPERIENCE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperiencesPage
