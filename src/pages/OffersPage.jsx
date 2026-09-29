import of1 from '../assets/img/offer1.webp'
import of2 from '../assets/img/offer2.webp'
import of3 from '../assets/img/offer3.webp'
import sl2 from '../assets/img/sl2.jpg'

const OFFERS_LIST = [
    {
        id: 'member-offer',
        category: 'OBERIO ONE MEMBER EXCLUSIVE',
        title: 'Enjoy 15% Savings & Hotel Credit',
        validity: 'Valid for stays until 30th November 2026',
        desc: 'As an Oberoi One member, enjoy 15% savings on room and suite reservations made directly on our website, plus an additional INR 5,000 hotel credit redeemable across our award-winning restaurants and spas.',
        inclusions: [
            '15% savings on published best flexible rates',
            'INR 5,000 hotel credit per stay',
            'Complimentary high-speed WiFi',
            'Flexible 2:00 PM late check-out (subject to availability)'
        ],
        img: of1
    },
    {
        id: 'suite-experiences',
        category: 'LUXURY ACCOMMODATION',
        title: 'Bespoke Suite Experiences',
        validity: 'Valid across Urban & Resort Hotels year-round',
        desc: 'Stay in our most lavish suites in Bengaluru, Gurgaon, Mumbai, New Delhi, or Marrakech. Indulge in bespoke 24-hour butler service, airport luxury transfers, and curated private dining.',
        inclusions: [
            'Chauffeured luxury two-way airport transfers',
            'Complimentary bottle of Champagne on arrival',
            'Daily bespoke breakfast in suite or restaurant',
            'Dedicated personal butler service 24x7'
        ],
        img: of2
    },
    {
        id: 'unforgettable-holidays',
        category: 'LEISURE & RESORT PACKAGES',
        title: 'Unforgettable Holidays with Oberoi',
        validity: 'Minimum 2 nights stay required',
        desc: 'Escape to our grand palaces and wilderness sanctuaries across Agra, Jaipur, Udaipur, Ranthambhore, and Shimla. Includes daily royal breakfast and exclusive cultural experiences.',
        inclusions: [
            'Daily lavish breakfast for two guests',
            '25% savings on Oberoi Spa therapies',
            'Evening traditional cultural performances',
            'Heritage hotel architecture walk with master historian'
        ],
        img: of3
    },
    {
        id: 'himalayan-escape',
        category: 'SEASONAL MOUNTAIN GETAWAY',
        title: 'Himalayan Serenity - Stay 3, Pay 2',
        validity: 'Wildflower Hall & The Oberoi Cecil, Shimla',
        desc: 'Breathe the pure alpine air of the Himalayas. Book two consecutive nights and receive your third night complimentary, complete with guided nature walks and mountain biking.',
        inclusions: [
            '3rd consecutive night complimentary',
            'Daily breakfast with mountain valley views',
            'Guided cedar forest nature trail walk',
            'Access to outdoor heated whirlpool overlooking Himalayas'
        ],
        img: sl2
    }
]

const OffersPage = ({ onOpenBooking }) => {
    return (
        <div className="offers-page-wrapper">
            {/* Page Hero Header */}
            <div className="py-5 bg-dark text-white text-center position-relative" style={{ backgroundColor: '#171a2e' }}>
                <div className="container py-4">
                    <span className="section-eyebrow" style={{ color: '#bfa15f' }}>SPECIAL PRIVILEGES</span>
                    <h1 className="big-text text-white display-5 mb-3">Special Offers & Packages</h1>
                    <p className="mx-auto text-white-50" style={{ maxWidth: '750px', fontSize: '15px', lineHeight: '1.8' }}>
                        Discover tailored offers designed to deliver exceptional value, whether you are planning a tranquil weekend escape or a grand royal holiday.
                    </p>
                </div>
            </div>

            {/* Offers Grid */}
            <div className="container-fluid px-lg-5 px-3 py-5">
                <div className="row g-4">
                    {OFFERS_LIST.map(offer => (
                        <div key={offer.id} className="col-lg-6">
                            <div className="card h-100 border rounded-0 shadow-sm overflow-hidden bg-white">
                                <div className="slider-zoom position-relative" style={{ height: '300px' }}>
                                    <img src={offer.img} alt={offer.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    <span className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-dark bg-opacity-75 text-white fw-semibold small" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                                        {offer.category}
                                    </span>
                                </div>
                                <div className="card-body p-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <small className="text-muted d-block mb-1">
                                            <i className="fa-regular fa-calendar-days me-1"></i> {offer.validity}
                                        </small>
                                        <h3 className="card-title-text mt-1 mb-2" style={{ fontSize: '24px' }}>
                                            {offer.title}
                                        </h3>
                                        <p className="card-body-text mb-3" style={{ fontSize: '13.5px' }}>
                                            {offer.desc}
                                        </p>
                                        <div className="mb-4 p-3 bg-light rounded-0">
                                            <h6 className="small fw-bold text-uppercase text-dark mb-2" style={{ letterSpacing: '0.5px' }}>
                                                PACKAGE INCLUSIONS:
                                            </h6>
                                            <ul className="list-unstyled mb-0">
                                                {offer.inclusions.map((inc, i) => (
                                                    <li key={i} className="small py-1 text-muted">
                                                        <i className="fa-solid fa-check text-warning me-2" style={{ color: '#bfa15f' }}></i>
                                                        {inc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                                        <button
                                            onClick={() => onOpenBooking && onOpenBooking({ offerName: offer.title })}
                                            className="book1-btn py-2 px-4"
                                            style={{ fontSize: '12px' }}
                                        >
                                            RESERVE WITH THIS OFFER
                                        </button>
                                        <span className="text-success small fw-semibold">
                                            <i className="fa-solid fa-tag me-1"></i> Best Rate Guaranteed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OffersPage
