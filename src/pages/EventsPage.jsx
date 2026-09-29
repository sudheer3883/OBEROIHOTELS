import { useState } from 'react'
import ev1 from '../assets/img/event1.webp'
import ev2 from '../assets/img/event2.webp'
import ev3 from '../assets/img/event3.webp'
import ev4 from '../assets/img/event4.webp'
import ev5 from '../assets/img/event5.webp'

const VENUES_LIST = [
    {
        name: 'Roshnara & Jahanara Ballrooms',
        hotel: 'The Oberoi Amarvilas',
        city: 'Agra, Uttar Pradesh',
        capacity: 'Up to 190 Guests',
        area: '3,200 sq. ft. + Pre-Function Foyer',
        desc: 'Featuring soaring ceilings, Austrian crystal chandeliers, and opulent gold-leaf detailing, this hall can be partitioned into two independent salons for royal celebrations with views of the Taj Mahal.',
        suitableFor: 'Grand Weddings, Leadership Summits, State Dinners',
        img: ev1
    },
    {
        name: 'The Bamboo Grove',
        hotel: 'The Oberoi, Bengaluru',
        city: 'Bengaluru, Karnataka',
        capacity: 'Up to 60 Guests',
        area: '1,800 sq. ft. Open-Air Alfresco',
        desc: 'Surrounded by century-old rain trees and tropical foliage, an open-air venue designed for daytime board retreats, sunny champagne brunches, and celebratory cocktail evenings.',
        suitableFor: 'Cocktail Receptions, Intimate Receptions, High-Tech Roundtables',
        img: ev2
    },
    {
        name: 'The Grand Ballroom',
        hotel: 'The Oberoi, Gurgaon',
        city: 'Gurgaon, NCR New Delhi',
        capacity: 'Up to 600 Guests',
        area: '7,500 sq. ft. with Private Driveway',
        desc: 'A pillarless architectural masterpiece that can divide into three soundproof venues with a 36,000 sq. ft. reflecting pool backdrop, state-of-the-art audiovisual setups, and private guest entrances.',
        suitableFor: 'International Conventions, Automobile Launches, Society Galas',
        img: ev3
    },
    {
        name: 'Durbar Hall & Lawns',
        hotel: 'The Oberoi Sukhvilas Resort & Spa',
        city: 'New Chandigarh',
        capacity: 'Up to 350 Guests',
        area: '5,000 sq. ft. Indoor + Forest Lawns',
        desc: 'Inspired by traditional Rajput and Mughal palatial court architecture with grand domes, carved sandstone arches, and expansive outdoor manicured lawns overlooking Siswan Forest.',
        suitableFor: 'Destination Weddings, Luxury Car Rallies, Milestone Anniversaries',
        img: ev4
    },
    {
        name: 'The Grand Canal',
        hotel: 'The Oberoi, Marrakech',
        city: 'Marrakech, Morocco',
        capacity: 'Up to 400 Guests',
        area: '120-Metre Reflecting Poolside Courtyard',
        desc: 'A 120-metre reflecting water body that lies at the heart of our Moroccan palace. Evening receptions here enjoy sunset vistas of the Atlas Mountains and fragrant citrus blossoms.',
        suitableFor: 'Outdoor Banquets, Fashion Presentations, Global Summits',
        img: ev5
    }
]

const EventsPage = () => {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guests: '50-100',
        venue: 'The Grand Ballroom, Gurgaon',
        notes: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="events-page-wrapper">
            {/* Page Hero Header */}
            <div className="py-5 bg-dark text-white text-center position-relative" style={{ backgroundColor: '#171a2e' }}>
                <div className="container py-4">
                    <span className="section-eyebrow" style={{ color: '#bfa15f' }}>UNPARALLELED VENUES</span>
                    <h1 className="big-text text-white display-5 mb-3">Meetings, Celebrations & Weddings</h1>
                    <p className="mx-auto text-white-50" style={{ maxWidth: '750px', fontSize: '15px', lineHeight: '1.8' }}>
                        From high-stakes international summits to intimate royal weddings, our dedicated event specialists orchestrate every detail with effortless perfection.
                    </p>
                </div>
            </div>

            {/* Venues Showcase */}
            <div className="container-fluid px-lg-5 px-3 py-5">
                <div className="row g-4">
                    {VENUES_LIST.map((venue, index) => (
                        <div key={index} className="col-lg-6">
                            <div className="card h-100 border rounded-0 shadow-sm overflow-hidden bg-white">
                                <div className="slider-zoom position-relative" style={{ height: '280px' }}>
                                    <img src={venue.img} alt={venue.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    <span className="position-absolute bottom-0 start-0 m-3 px-3 py-1 bg-dark bg-opacity-75 text-white small" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                                        {venue.hotel}, {venue.city}
                                    </span>
                                </div>
                                <div className="card-body p-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="badge bg-light text-dark border fw-normal">
                                                <i className="fa-solid fa-users me-1" style={{ color: '#bfa15f' }}></i> {venue.capacity}
                                            </span>
                                            <span className="badge bg-light text-dark border fw-normal">
                                                <i className="fa-solid fa-ruler-combined me-1" style={{ color: '#bfa15f' }}></i> {venue.area}
                                            </span>
                                        </div>
                                        <h3 className="card-title-text mt-2 mb-2" style={{ fontSize: '22px' }}>
                                            {venue.name}
                                        </h3>
                                        <p className="card-body-text mb-3" style={{ fontSize: '13px' }}>
                                            {venue.desc}
                                        </p>
                                        <p className="small text-muted mb-0">
                                            <strong className="text-dark">Best Suited For:</strong> {venue.suitableFor}
                                        </p>
                                    </div>
                                    <div className="pt-3 border-top mt-3">
                                        <a href="#proposal-form" className="book1-btn d-inline-block py-2 px-3 text-decoration-none" style={{ fontSize: '11px' }}>
                                            REQUEST PROPOSAL FOR THIS VENUE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Request a Proposal Form Section */}
            <div id="proposal-form" className="bg-light py-5 border-top">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center mb-4">
                        <span className="section-eyebrow">EVENT PLANNING</span>
                        <h2 className="big-text display-6">Request An Event Proposal</h2>
                        <p className="text-muted small">Our event planning directors will respond with a tailored proposal within 24 hours.</p>
                    </div>

                    {submitted ? (
                        <div className="card p-5 text-center border-0 shadow-sm bg-white">
                            <div className="mb-3" style={{ fontSize: '48px', color: '#bfa15f' }}>
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}>Proposal Request Received</h4>
                            <p className="text-muted small mt-2">
                                Thank you, <strong>{formData.name}</strong>. Our senior event director for <strong>{formData.venue}</strong> will contact you at <strong>{formData.email}</strong> shortly.
                            </p>
                            <button className="btn btn-outline-dark mx-auto mt-2" onClick={() => setSubmitted(false)}>
                                Submit Another Inquiry
                            </button>
                        </div>
                    ) : (
                        <div className="card p-4 p-md-5 border-0 shadow-sm bg-white">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="booking-label">Your Name</label>
                                        <input 
                                            type="text" 
                                            required 
                                            placeholder="Full Name" 
                                            className="form-control"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="booking-label">Email Address</label>
                                        <input 
                                            type="email" 
                                            required 
                                            placeholder="name@company.com" 
                                            className="form-control"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="booking-label">Contact Phone</label>
                                        <input 
                                            type="tel" 
                                            required 
                                            placeholder="+91 98765 43210" 
                                            className="form-control"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="booking-label">Proposed Event Date</label>
                                        <input 
                                            type="date" 
                                            required 
                                            className="form-control"
                                            value={formData.eventDate}
                                            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="booking-label">Preferred Venue</label>
                                        <select 
                                            className="form-select"
                                            value={formData.venue}
                                            onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                                        >
                                            {VENUES_LIST.map((v, i) => (
                                                <option key={i} value={`${v.name}, ${v.city}`}>{v.name} - {v.city}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="booking-label">Estimated Guest Count</label>
                                        <select 
                                            className="form-select"
                                            value={formData.guests}
                                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                        >
                                            <option value="20-50">20 - 50 Guests</option>
                                            <option value="50-100">50 - 100 Guests</option>
                                            <option value="100-250">100 - 250 Guests</option>
                                            <option value="250-500">250 - 500+ Guests</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="booking-label">Additional Event Requirements</label>
                                    <textarea 
                                        rows="3" 
                                        placeholder="Catering preferences, breakout rooms, technical setup..." 
                                        className="form-control"
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    ></textarea>
                                </div>

                                <button type="submit" className="book-now-cta-btn">
                                    SUBMIT PROPOSAL REQUEST
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventsPage
