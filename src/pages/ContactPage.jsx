import { useState } from 'react'

const CONTACT_OFFICES = [
    {
        region: 'India & South Asia',
        phone: '+91-11-6911-0606 / 1800-11-2030',
        email: 'reservations@oberoihotels.com',
        timing: '24 Hours, 7 Days a Week'
    },
    {
        region: 'United States & Canada',
        phone: '+1 800 562 3764 (Toll Free)',
        email: 'usa.reservations@oberoihotels.com',
        timing: '8:00 AM – 8:00 PM EST'
    },
    {
        region: 'United Kingdom & Europe',
        phone: '+44 (0) 800 169 7622 (Toll Free)',
        email: 'uk.reservations@oberoihotels.com',
        timing: '9:00 AM – 6:00 PM GMT'
    },
    {
        region: 'United Arab Emirates & Middle East',
        phone: '+971 4 444 1444',
        email: 'dubai.reservations@oberoihotels.com',
        timing: '9:00 AM – 9:00 PM GST'
    },
    {
        region: 'Singapore & South East Asia',
        phone: '+65 6737 7733',
        email: 'singapore.reservations@oberoihotels.com',
        timing: '9:00 AM – 7:00 PM SGT'
    }
]

const PROPERTY_DIRECT_CONTACTS = [
    { name: 'The Oberoi Amarvilas', city: 'Agra', phone: '+91 562 2231515', email: 'reservations.amarvilas@oberoihotels.com' },
    { name: 'The Oberoi Udaivilas', city: 'Udaipur', phone: '+91 294 2433300', email: 'reservations.udaivilas@oberoihotels.com' },
    { name: 'The Oberoi Rajvilas', city: 'Jaipur', phone: '+91 141 2680101', email: 'reservations.rajvilas@oberoihotels.com' },
    { name: 'Wildflower Hall', city: 'Shimla', phone: '+91 177 2648585', email: 'reservations.wildflower@oberoihotels.com' },
    { name: 'The Oberoi', city: 'Mumbai', phone: '+91 22 66325757', email: 'reservations.mumbai@oberoihotels.com' },
    { name: 'The Oberoi', city: 'New Delhi', phone: '+91 11 24363030', email: 'reservations.delhi@oberoihotels.com' },
    { name: 'The Oberoi', city: 'Bengaluru', phone: '+91 80 25585858', email: 'reservations.bengaluru@oberoihotels.com' },
    { name: 'The Oberoi Beach Resort', city: 'Bali', phone: '+62 361 730361', email: 'reservations.bali@oberoihotels.com' },
    { name: 'The Oberoi', city: 'Marrakech', phone: '+212 525 081515', email: 'reservations.marrakech@oberoihotels.com' },
    { name: 'The Oberoi Beach Resort', city: 'Mauritius', phone: '+230 2043600', email: 'reservations.mauritius@oberoihotels.com' }
]

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        hotel: 'General Enquiry',
        topic: 'Reservations & Booking',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="contact-page-wrapper">
            {/* Header Banner */}
            <div className="bg-dark text-white py-5 position-relative" style={{ backgroundColor: '#171a2e' }}>
                <div className="container-fluid px-lg-5 px-3 py-4 text-center">
                    <span className="section-eyebrow text-warning" style={{ color: '#bfa15f', letterSpacing: '3px' }}>
                        24X7 GUEST SERVICES
                    </span>
                    <h1 className="section-main-title text-white mt-2 mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                        Contact Oberoi Hotels & Resorts
                    </h1>
                    <div className="luxury-divider mx-auto my-3" style={{ width: '80px', height: '2px', backgroundColor: '#bfa15f' }}></div>
                    <p className="text-white-50 mx-auto" style={{ maxWidth: '750px', fontSize: '15px', lineHeight: '1.8' }}>
                        Our dedicated Concierge and Global Reservation specialists are at your service 24 hours a day, 7 days a week, worldwide.
                    </p>
                </div>
            </div>

            <div className="container-fluid px-lg-5 px-3 py-5">
                <div className="row g-5">
                    {/* Left: Interactive Form */}
                    <div className="col-lg-7">
                        <div className="p-4 p-md-5 bg-white border shadow-sm">
                            <span className="section-eyebrow">DIRECT INQUIRY</span>
                            <h2 className="section-main-title mb-4" style={{ fontSize: '28px' }}>
                                Send Us a Message
                            </h2>

                            {submitted ? (
                                <div className="text-center py-5">
                                    <div className="mb-3" style={{ fontSize: '50px', color: '#bfa15f' }}>
                                        <i className="fa-regular fa-circle-check"></i>
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px' }}>Message Received</h3>
                                    <p className="text-muted mt-2" style={{ maxWidth: '500px', margin: '0 auto', fontSize: '14.5px' }}>
                                        Thank you, <strong>{form.name}</strong>. An Oberoi Guest Relations officer has received your inquiry regarding <em>{form.topic}</em> and will respond to <strong>{form.email}</strong> shortly.
                                    </p>
                                    <button 
                                        className="gold-cta-btn border-0 mt-4 mx-auto"
                                        onClick={() => {
                                            setSubmitted(false)
                                            setForm({ name: '', email: '', phone: '', hotel: 'General Enquiry', topic: 'Reservations & Booking', message: '' })
                                        }}
                                    >
                                        SEND ANOTHER MESSAGE
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="booking-label">Your Full Name *</label>
                                            <input 
                                                type="text" 
                                                required 
                                                placeholder="e.g. Maharani Gayatri Devi" 
                                                className="form-control"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="booking-label">Email Address *</label>
                                            <input 
                                                type="email" 
                                                required 
                                                placeholder="e.g. name@domain.com" 
                                                className="form-control"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="booking-label">Contact Phone Number</label>
                                            <input 
                                                type="tel" 
                                                placeholder="+91 98765 43210" 
                                                className="form-control"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="booking-label">Destination / Hotel</label>
                                            <select 
                                                className="form-select"
                                                value={form.hotel}
                                                onChange={(e) => setForm({ ...form, hotel: e.target.value })}
                                            >
                                                <option value="General Enquiry">General / Global Enquiry</option>
                                                <option value="The Oberoi Amarvilas, Agra">The Oberoi Amarvilas, Agra</option>
                                                <option value="The Oberoi Udaivilas, Udaipur">The Oberoi Udaivilas, Udaipur</option>
                                                <option value="The Oberoi Rajvilas, Jaipur">The Oberoi Rajvilas, Jaipur</option>
                                                <option value="Wildflower Hall, Shimla">Wildflower Hall, Shimla</option>
                                                <option value="The Oberoi Sukhvilas, New Chandigarh">The Oberoi Sukhvilas, New Chandigarh</option>
                                                <option value="The Oberoi, Mumbai">The Oberoi, Mumbai</option>
                                                <option value="The Oberoi, New Delhi">The Oberoi, New Delhi</option>
                                                <option value="The Oberoi, Bengaluru">The Oberoi, Bengaluru</option>
                                                <option value="The Oberoi Beach Resort, Bali">The Oberoi Beach Resort, Bali</option>
                                                <option value="The Oberoi, Marrakech">The Oberoi, Marrakech</option>
                                                <option value="The Oberoi Beach Resort, Mauritius">The Oberoi Beach Resort, Mauritius</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="booking-label">Nature of Inquiry</label>
                                        <select 
                                            className="form-select"
                                            value={form.topic}
                                            onChange={(e) => setForm({ ...form, topic: e.target.value })}
                                        >
                                            <option value="Reservations & Booking">Reservations & Room Booking</option>
                                            <option value="Fine Dining & Table Reservations">Fine Dining & Table Reservations</option>
                                            <option value="Spa & Wellness Appointments">Spa & Wellness Appointments</option>
                                            <option value="Oberoi One Loyalty Programme">Oberoi One Loyalty Programme</option>
                                            <option value="Weddings & Social Celebrations">Weddings & Social Celebrations</option>
                                            <option value="Corporate Meetings & Events">Corporate Meetings & Events</option>
                                            <option value="Feedback / Guest Relations">Feedback / Guest Relations</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="booking-label">Your Message / Requests *</label>
                                        <textarea 
                                            rows="5" 
                                            required 
                                            placeholder="Please describe your requirements, travel dates, or special assistance needed..." 
                                            className="form-control"
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="book-now-cta-btn">
                                        TRANSMIT MESSAGE TO CONCIERGE
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right: Regional Toll-Free Directory */}
                    <div className="col-lg-5">
                        <div className="p-4 p-md-5 bg-white border shadow-sm h-100">
                            <span className="section-eyebrow">GLOBAL RESERVATIONS</span>
                            <h2 className="section-main-title mb-4" style={{ fontSize: '28px' }}>
                                Worldwide Helplines
                            </h2>

                            <div className="d-flex flex-column gap-3 mb-4">
                                {CONTACT_OFFICES.map((office, idx) => (
                                    <div key={idx} className="p-3 border rounded-0" style={{ borderLeft: '3px solid #bfa15f' }}>
                                        <span className="fw-bold d-block text-dark" style={{ fontSize: '14px' }}>
                                            {office.region}
                                        </span>
                                        <div className="mt-1 d-flex align-items-center text-dark">
                                            <i className="fa-solid fa-phone me-2" style={{ color: '#bfa15f', fontSize: '13px' }}></i>
                                            <span className="fw-semibold" style={{ fontSize: '13.5px' }}>{office.phone}</span>
                                        </div>
                                        <div className="mt-1 d-flex align-items-center text-muted small">
                                            <i className="fa-solid fa-envelope me-2" style={{ color: '#bfa15f', fontSize: '12px' }}></i>
                                            <span>{office.email}</span>
                                        </div>
                                        <div className="mt-1 text-muted" style={{ fontSize: '11.5px' }}>
                                            <i className="fa-regular fa-clock me-2"></i> {office.timing}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-3 bg-light border">
                                <h6 className="fw-bold mb-1" style={{ fontSize: '13px', color: '#171a2e' }}>
                                    Corporate Head Office
                                </h6>
                                <p className="small text-muted mb-0">
                                    The Oberoi Group Corporate Headquarters<br />
                                    7 Sham Nath Marg, Civil Lines, Delhi 110054, India<br />
                                    Phone: +91-11-2389-0505
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hotel Direct Lines Table */}
                <div className="mt-5 pt-4 border-top">
                    <div className="text-center mb-4">
                        <span className="section-eyebrow">DIRECT HOTEL EXTENSIONS</span>
                        <h2 className="section-main-title" style={{ fontSize: '28px' }}>
                            Property Directory
                        </h2>
                    </div>

                    <div className="row g-3">
                        {PROPERTY_DIRECT_CONTACTS.map((prop, index) => (
                            <div key={index} className="col-lg-6">
                                <div className="p-3 bg-white border d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-1" style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#171a2e' }}>
                                            {prop.name}
                                        </h5>
                                        <small className="text-muted d-block">{prop.city} | {prop.email}</small>
                                    </div>
                                    <a 
                                        href={`tel:${prop.phone.replace(/[^0-9+]/g, '')}`} 
                                        className="btn btn-outline-dark btn-sm rounded-0 px-3 fw-semibold text-nowrap"
                                        style={{ fontSize: '12px' }}
                                    >
                                        <i className="fa-solid fa-phone me-1" style={{ color: '#bfa15f' }}></i> {prop.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
