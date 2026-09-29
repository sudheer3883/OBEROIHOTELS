import obAward from '../assets/img/ob-award.webp'
import h1 from '../assets/img/home1.webp'
import h2 from '../assets/img/home2.webp'
import h3 from '../assets/img/home3.jpg'

const AWARDS_LIST = [
    {
        year: '2025 - 2026',
        title: 'Ranked #1 Best Hotel Group in the World',
        organization: 'Telegraph Travel Awards, United Kingdom',
        description: 'Voted the finest luxury hotel brand globally by discerning readers and travelers across the UK, recognizing Oberoi’s uncompromising commitment to warm, intuitive hospitality and architectural grandeur.',
        badge: 'WORLD #1'
    },
    {
        year: '2026',
        title: 'Featured Among the Top 10 Best Hotel Brands Worldwide',
        organization: 'Travel + Leisure, World’s Best Awards',
        description: 'Recognized by global readers for world-class service, palatial architecture, bespoke excursions, and impeccable guest attention across our properties in India, Egypt, Indonesia, and Mauritius.',
        badge: 'TOP 10 GLOBAL'
    },
    {
        year: '2025',
        title: 'Editor’s Choice: Best Hotel Brand for Service Excellence',
        organization: 'Travel + Leisure India & South Asia',
        description: 'Honored for our signature ethos: "The guest is the only reason for our existence." Praised for going beyond expectations to deliver memorable stays with heartfelt personal touches.',
        badge: 'SERVICE EXCELLENCE'
    },
    {
        year: '2025',
        title: 'The Oberoi Udaivilas: Best Resort in India',
        organization: 'Condé Nast Traveler Readers’ Choice Awards',
        description: 'Voted the finest resort destination in India, celebrating its dramatic lakeside arrival by royal boat, ornate Mewari domes, reflection pools, and world-class culinary experiences.',
        badge: 'INDIA’S BEST RESORT'
    },
    {
        year: '2024 - 2025',
        title: 'The Oberoi Amarvilas: World’s Best Hotel Views',
        organization: 'International Hospitality Awards',
        description: 'Acknowledged for providing uninterrupted, breathtaking views of the iconic Taj Mahal from every single luxury room, suite, balcony, and lounge on the property.',
        badge: 'ICONIC VIEWS'
    },
    {
        year: '2024',
        title: 'Wildflower Hall: Best Luxury Mountain Resort',
        organization: 'World Travel Awards',
        description: 'Celebrated for its sublime location at 8,250 feet in the Himalayas, heated open-air whirlpool overlooking cedar forests, and heritage colonial elegance.',
        badge: 'MOUNTAIN RETREAT'
    }
]

const PROPERTY_HONORS = [
    {
        hotel: 'The Oberoi Amarvilas, Agra',
        honor: 'Ranked #1 Luxury Heritage Hotel in Asia',
        img: h1
    },
    {
        hotel: 'The Oberoi Rajvilas, Jaipur',
        honor: 'Best Palace Resort & Luxury Tent Experience',
        img: h2
    },
    {
        hotel: 'The Oberoi Udaivilas, Udaipur',
        honor: 'Top 5 Most Romantic Hotels in the World',
        img: h3
    }
]

const AwardsPage = ({ onOpenBooking }) => {
    return (
        <div className="awards-page-wrapper">
            {/* Header Banner */}
            <div className="bg-dark text-white py-5 position-relative" style={{ backgroundColor: '#171a2e' }}>
                <div className="container-fluid px-lg-5 px-3 py-4 text-center">
                    <span className="section-eyebrow text-warning" style={{ color: '#bfa15f', letterSpacing: '3px' }}>
                        GLOBAL RECOGNITION
                    </span>
                    <h1 className="section-main-title text-white mt-2 mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                        Awards & Accolades
                    </h1>
                    <div className="luxury-divider mx-auto my-3" style={{ width: '80px', height: '2px', backgroundColor: '#bfa15f' }}></div>
                    <p className="text-white-50 mx-auto" style={{ maxWidth: '780px', fontSize: '15px', lineHeight: '1.8' }}>
                        For decades, Oberoi Hotels & Resorts has been honored by the world’s most prestigious travel publications, critics, and guests. We accept every accolade with deep humility and a renewed pledge to heartfelt service.
                    </p>
                </div>
            </div>

            {/* Featured Telegraph Award Showcase */}
            <div className="container-fluid px-lg-5 px-3 py-5">
                <div className="brand-card-wrapper shadow-sm border mb-5">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="slider-zoom" style={{ height: '420px' }}>
                                <img src={obAward} alt="Oberoi Awards Showcase" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="brand-text-block p-lg-5 p-4">
                                <span className="brand-badge">TELEGRAPH TRAVEL AWARDS UK</span>
                                <h2 className="brand-headline" style={{ fontSize: '28px', color: '#171a2e' }}>
                                    Ranked the #1 Best Hotel Group in the World
                                </h2>
                                <p className="brand-paragraph" style={{ fontSize: '14.5px', lineHeight: '1.8' }}>
                                    The prestigious Telegraph Travel Awards, voted on by tens of thousands of discerning international travelers, named Oberoi Hotels & Resorts as the finest luxury hospitality provider worldwide.
                                </p>
                                <p className="brand-paragraph" style={{ fontSize: '14.5px', lineHeight: '1.8' }}>
                                    This global title reflects our unwavering philosophy that true luxury is not just defined by majestic architecture and exquisite settings, but by the warmth, sincerity, and attention of our people.
                                </p>
                                {onOpenBooking && (
                                    <button 
                                        onClick={() => onOpenBooking()} 
                                        className="gold-cta-btn border-0 mt-2"
                                    >
                                        EXPERIENCE AWARD-WINNING LUXURY <i className="fa-solid fa-angle-right ms-2"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Major Accolades Grid */}
                <div className="text-center mb-5">
                    <span className="section-eyebrow">DISTINGUISHED HONORS</span>
                    <h2 className="section-main-title" style={{ fontSize: '32px' }}>
                        Recent Global Honors
                    </h2>
                </div>

                <div className="row g-4 mb-5">
                    {AWARDS_LIST.map((award, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="card h-100 border p-4 shadow-sm rounded-0 position-relative">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <span 
                                        className="badge text-dark py-2 px-3 fw-bold rounded-0"
                                        style={{ backgroundColor: '#f0e6cf', border: '1px solid #bfa15f', fontSize: '11px', letterSpacing: '1px' }}
                                    >
                                        {award.badge}
                                    </span>
                                    <span className="text-muted small fw-bold">{award.year}</span>
                                </div>
                                <h3 className="card-title-text mb-2" style={{ fontSize: '20px', color: '#171a2e' }}>
                                    {award.title}
                                </h3>
                                <p className="text-muted small fw-semibold mb-3" style={{ color: '#bfa15f' }}>
                                    <i className="fa-solid fa-award me-1" style={{ color: '#bfa15f' }}></i>
                                    {award.organization}
                                </p>
                                <p className="card-body-text flex-grow-1" style={{ fontSize: '13px', lineHeight: '1.7' }}>
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Property Honors */}
                <div className="py-4 border-top">
                    <div className="text-center mb-4">
                        <span className="section-eyebrow">EXEMPLARY PROPERTIES</span>
                        <h2 className="section-main-title" style={{ fontSize: '30px' }}>
                            Flagship Resort Honors
                        </h2>
                    </div>

                    <div className="row g-4">
                        {PROPERTY_HONORS.map((prop, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="card border-0 shadow-sm rounded-0 overflow-hidden">
                                    <div className="slider-zoom position-relative" style={{ height: '240px' }}>
                                        <img src={prop.img} alt={prop.hotel} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="p-4 bg-white border">
                                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#171a2e', marginBottom: '8px' }}>
                                            {prop.hotel}
                                        </h4>
                                        <p className="small text-muted mb-0 fw-semibold">
                                            <i className="fa-solid fa-trophy me-2" style={{ color: '#bfa15f' }}></i>
                                            {prop.honor}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwardsPage
