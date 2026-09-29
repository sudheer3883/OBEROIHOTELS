import { Link } from 'react-router-dom'
import Video from './components/Video'
import DestinationSl from './components/DestinationSl'
import Dining from './components/Dining'
import Wellness from './components/Wellness'
import Experience from './components/HomeComp/Experience'
import Offer from './components/HomeComp/Offer'
import Events from './components/HomeComp/Events'
import { Splide, SplideSlide } from '@splidejs/react-splide'

// Images
import h1 from './assets/img/home1.webp'
import h2 from './assets/img/home2.webp'
import h3 from './assets/img/home3.jpg'
import sl2 from './assets/img/sl2.jpg'
import ob1 from './assets/img/ob-one.webp'
import ob2 from './assets/img/ob-select.webp'
import ob3 from './assets/img/ob-award.webp'
import ob4 from './assets/img/ob-alliance.webp'
import mag1 from './assets/img/mag1.webp'
import mag2 from './assets/img/mag2.webp'
import mag3 from './assets/img/mag3.webp'

const Home = ({ onOpenBooking, onOpenLogin, onOpenTableReservation, onOpenProposal }) => {
    return (
        <div className="home-bg position-relative">
            {/* Hero Video & Floating Booking Widget */}
            <Video onOpenBooking={onOpenBooking} />

            {/* Welcome to Oberoi Section */}
            <section className="py-5 mt-4">
                <div className="container-fluid px-lg-5 px-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <Splide
                                aria-label="Oberoi Welcome Gallery"
                                options={{
                                    type: 'loop',
                                    perPage: 1,
                                    autoplay: true,
                                    interval: 3500,
                                    pauseOnHover: true,
                                    arrows: true,
                                    pagination: true,
                                }}
                            >
                                <SplideSlide>
                                    <div className="slider-zoom" style={{ maxHeight: '520px' }}>
                                        <img src={h1} alt="The Oberoi Amarvilas" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="slider-zoom" style={{ maxHeight: '520px' }}>
                                        <img src={h2} alt="The Oberoi Rajvilas" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="slider-zoom" style={{ maxHeight: '520px' }}>
                                        <img src={h3} alt="The Oberoi Udaivilas" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>

                        <div className="col-lg-6 ps-lg-5">
                            <div className="section-heading-wrapper">
                                <span className="section-eyebrow">WORLD-RENOWNED HOSPITALITY</span>
                                <h2 className="section-main-title mb-3">
                                    Welcome to <br />Oberoi Hotels & Resorts
                                </h2>
                                <p className="card-body-text" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                                    Experience our personalised service across destinations in India, Egypt, Indonesia, Mauritius, Morocco, and Saudi Arabia. At each property, we offer an authentic taste of local cuisines, inspired royal architecture, and accommodation with breathtaking views of surrounding landscapes.
                                </p>
                                <p className="card-body-text" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                                    All complemented by the sincere, intuitive attention to your every need that is unmistakably Oberoi. <strong><em>Heart. Felt.</em></strong>
                                </p>

                                <div className="award-badge-box">
                                    <i className="fa-solid fa-award"></i>
                                    <div>
                                        <p className="fw-semibold">Telegraph Travel Awards UK, 2025</p>
                                        <small className="text-muted">Ranked the #1 Best Hotel Group in the World</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Limited Period Offer Banner */}
            <section className="py-4">
                <div className="container-fluid px-lg-5 px-3">
                    <div 
                        className="limited-offer-banner shadow-sm"
                        style={{ backgroundImage: `url(${sl2})` }}
                    >
                        <div className="limited-offer-overlay">
                            <span className="limited-offer-badge">LIMITED PERIOD OFFER</span>
                            <h3 className="limited-offer-title">
                                Enjoy 15% Exceptional Savings
                            </h3>
                            <p className="limited-offer-desc">
                                As an Oberoi One member, enjoy 15% savings on reservations made for stays until November 2026. Plus, receive an additional INR 5,000 hotel credit per stay when you book directly on oberoihotels.com.
                            </p>
                            <button 
                                onClick={() => onOpenBooking && onOpenBooking({ offerName: 'Limited Period Offer 15% Off' })}
                                className="gold-cta-btn border-0"
                            >
                                <span>RESERVE WITH SAVINGS</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations Slider with Country Tabs */}
            <DestinationSl onOpenBooking={onOpenBooking} />

            {/* Signature Dining */}
            <Dining onOpenTableReservation={onOpenTableReservation} />

            {/* Wellness & Spa */}
            <Wellness />

            {/* Curated Experiences */}
            <Experience onOpenBooking={onOpenBooking} />

            {/* Special Offers */}
            <Offer onOpenBooking={onOpenBooking} />

            {/* Meetings & Celebrations */}
            <Events onOpenProposal={onOpenProposal} />

            {/* Oberoi One Recognition Programme */}
            <section id="oberoi-one" className="py-5">
                <div className="container-fluid px-lg-5 px-3">
                    <div className="section-header-bar px-0 pb-3">
                        <div>
                            <span className="section-eyebrow">DISTINCTIVE PRIVILEGES</span>
                            <h2 className="section-main-title">Oberoi One</h2>
                        </div>
                    </div>

                    <div className="brand-card-wrapper shadow-sm">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6">
                                <div className="slider-zoom" style={{ height: '420px' }}>
                                    <img src={ob1} alt="Oberoi One" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="brand-text-block">
                                    <span className="brand-badge">GUEST RECOGNITION PROGRAMME</span>
                                    <h3 className="brand-headline">
                                        Personalised Benefits from Your First Stay
                                    </h3>
                                    <p className="brand-paragraph">
                                        Oberoi One is our distinctive guest recognition programme that guarantees a host of personalised privileges from your very first reservation.
                                    </p>
                                    <p className="brand-paragraph">
                                        From member-only rates on our website and culinary savings when you dine with us, to flexible check-in and check-out timings and complimentary room upgrades. The more often you stay with us, the more enriching the experience becomes.
                                    </p>
                                    <div className="d-flex gap-3 mt-2">
                                        <button 
                                            onClick={() => onOpenLogin && onOpenLogin('join')}
                                            className="gold-cta-btn border-0"
                                        >
                                            JOIN NOW <i className="fa-solid fa-angle-right"></i>
                                        </button>
                                        <button 
                                            onClick={() => onOpenLogin && onOpenLogin('login')}
                                            className="btn btn-outline-dark px-4 py-2"
                                            style={{ fontSize: '11.5px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}
                                        >
                                            SIGN IN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Oberoi Select */}
            <section id="oberoi-select" className="py-4">
                <div className="container-fluid px-lg-5 px-3">
                    <div className="section-header-bar px-0 pb-3">
                        <div>
                            <span className="section-eyebrow">EXCLUSIVE VALUE</span>
                            <h2 className="section-main-title">Oberoi Select</h2>
                        </div>
                    </div>

                    <div className="brand-card-wrapper shadow-sm">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6">
                                <div className="slider-zoom" style={{ height: '400px' }}>
                                    <img src={ob2} alt="Oberoi Select" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="brand-text-block">
                                    <span className="brand-badge">PRE-PURCHASED HOTEL CREDIT</span>
                                    <h3 className="brand-headline">
                                        Enhanced Benefits and Exclusive Privileges
                                    </h3>
                                    <p className="brand-paragraph">
                                        Discover the enhanced Oberoi Select, our exclusive programme that allows you to pre-purchase hotel credit redeemable across Oberoi Hotels & Resorts in India. Whether travelling for corporate leadership or a serene family getaway, Oberoi Select offers seamless luxury.
                                    </p>
                                    <div>
                                        <button 
                                            onClick={() => onOpenBooking && onOpenBooking({ promoCode: 'OBEROI-SELECT' })}
                                            className="gold-cta-btn border-0"
                                        >
                                            EXPLORE OBEROI SELECT <i className="fa-solid fa-angle-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Accolades */}
            <section id="awards" className="py-4">
                <div className="container-fluid px-lg-5 px-3">
                    <div className="section-header-bar px-0 pb-3">
                        <div>
                            <span className="section-eyebrow">GLOBAL HONOURS</span>
                            <h2 className="section-main-title">Awards & Accolades</h2>
                        </div>
                        <Link to="/awards" className="view-all-link">
                            VIEW ALL AWARDS <i className="fa-solid fa-angle-right ms-1"></i>
                        </Link>
                    </div>

                    <div className="brand-card-wrapper shadow-sm">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6">
                                <div className="slider-zoom" style={{ height: '420px' }}>
                                    <img src={ob3} alt="Oberoi Awards" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="brand-text-block">
                                    <div className="award-item">
                                        <h4 className="award-item-title">
                                            Featured Among the Top 10 Best Hotel Brands in the World
                                        </h4>
                                        <span className="award-item-subtitle">Travel + Leisure, World’s Best Awards, 2026</span>
                                    </div>

                                    <div className="award-item">
                                        <h4 className="award-item-title">
                                            Editor’s Choice for Best Hotel Brand for Service Excellence
                                        </h4>
                                        <span className="award-item-subtitle">Travel + Leisure, India’s Best Awards, 2025</span>
                                    </div>

                                    <div className="award-item">
                                        <h4 className="award-item-title">
                                            Best Hotel Group in the World
                                        </h4>
                                        <span className="award-item-subtitle">Telegraph Travel Awards, UK, 2025</span>
                                    </div>

                                    <div className="mt-3">
                                        <Link to="/awards" className="explore-book text-decoration-none">
                                            READ OUR STORY <i className="fa-solid fa-angle-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mandarin Oriental Alliance */}
            <section id="alliance" className="py-4">
                <div className="container-fluid px-lg-5 px-3">
                    <div className="section-header-bar px-0 pb-3">
                        <div>
                            <span className="section-eyebrow">GLOBAL PARTNERSHIP</span>
                            <h2 className="section-main-title">Mandarin Oriental Alliance</h2>
                        </div>
                    </div>

                    <div className="brand-card-wrapper shadow-sm">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6">
                                <div className="slider-zoom" style={{ height: '400px' }}>
                                    <img src={ob4} alt="Mandarin Oriental Alliance" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="brand-text-block">
                                    <span className="brand-badge">GLOBAL NETWORK</span>
                                    <h3 className="brand-headline">
                                        An Alliance of Distinctive Luxury
                                    </h3>
                                    <p className="brand-paragraph">
                                        Mandarin Oriental Hotel Group is the award-winning owner and operator of some of the world’s most luxurious hotels, resorts and residences. Having grown from Asian roots into an iconic global brand, the group operates 44 hotels, 12 residences and 26 exclusive homes in 27 countries.
                                    </p>
                                    <div>
                                        <a href="https://www.oberoihotels.com/omoalliance/" target="_blank" rel="noreferrer" className="gold-cta-btn">
                                            EXPLORE ALLIANCE <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Oberoi Group Magazine */}
            <section id="magazine" className="py-5">
                <div className="container-fluid px-lg-5 px-3">
                    <div className="section-header-bar px-0 pb-3">
                        <div>
                            <span className="section-eyebrow">STORIES & INSPIRATIONS</span>
                            <h2 className="section-main-title">The Oberoi Group Magazine</h2>
                        </div>
                        <a href="https://www.oberoihotels.com/magazines/" target="_blank" rel="noreferrer" className="view-all-link">
                            VIEW ALL ARTICLES <i className="fa-solid fa-angle-right ms-1"></i>
                        </a>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="magazine-card h-100 d-flex flex-column">
                                <div className="slider-zoom" style={{ height: '240px' }}>
                                    <img src={mag1} alt="The Great Adventure" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <span className="magazine-meta-tag">WANDERLUST</span>
                                    <h4 className="magazine-title">The Great Adventure</h4>
                                    <span className="magazine-author">By Juliet Highet</span>
                                    <p className="card-body-text flex-grow-1">
                                        Peru is one of the peak experiences in travel. Nowhere on earth is there such an incredibly wide range of ancient Andean wonders and breathtaking vistas...
                                    </p>
                                    <div className="explore-book pt-2">
                                        <a href="https://www.oberoihotels.com/magazines/" target="_blank" rel="noreferrer">
                                            READ ARTICLE <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="magazine-card h-100 d-flex flex-column">
                                <div className="slider-zoom" style={{ height: '240px' }}>
                                    <img src={mag2} alt="A Palatial Experience" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <span className="magazine-meta-tag">WANDERLUST</span>
                                    <h4 className="magazine-title">A Palatial Experience</h4>
                                    <span className="magazine-author">By Vir Sanghvi</span>
                                    <p className="card-body-text flex-grow-1">
                                        Complete with red sandstone fort ramparts, torch-lit bastions and regal ‘Haveli’ mansions, The Oberoi Rajvilas redefines royal Rajasthani hospitality...
                                    </p>
                                    <div className="explore-book pt-2">
                                        <a href="https://www.oberoihotels.com/magazines/" target="_blank" rel="noreferrer">
                                            READ ARTICLE <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="magazine-card h-100 d-flex flex-column">
                                <div className="slider-zoom" style={{ height: '240px' }}>
                                    <img src={mag3} alt="Life & Legacy of the Bard" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <span className="magazine-meta-tag">LITERATURE</span>
                                    <h4 className="magazine-title">Life & Legacy of the Bard</h4>
                                    <span className="magazine-author">By John Mulligan</span>
                                    <p className="card-body-text flex-grow-1">
                                        William Shakespeare lived through one of the most turbulent yet thrilling eras of English history, crafting immortal poetry and plays that resonate across centuries...
                                    </p>
                                    <div className="explore-book pt-2">
                                        <a href="https://www.oberoihotels.com/magazines/" target="_blank" rel="noreferrer">
                                            READ ARTICLE <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home