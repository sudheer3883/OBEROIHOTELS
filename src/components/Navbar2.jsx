import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo1.png'

const HOTELS_GROUPED = {
    india: [
        { id: 'amarvilas', name: 'Agra - The Oberoi Amarvilas', baseRate: 38500 },
        { id: 'vindhyavilas', name: 'Bandhavgarh - The Oberoi Vindhyavilas', baseRate: 42000 },
        { id: 'bengaluru', name: 'Bengaluru - The Oberoi, Bengaluru', baseRate: 24500 },
        { id: 'gurgaon', name: 'Gurgaon - The Oberoi, Gurgaon', baseRate: 26000 },
        { id: 'rajvilas', name: 'Jaipur - The Oberoi Rajvilas', baseRate: 45000 },
        { id: 'nailafort', name: 'Jaipur - Naila Fort, An Oberoi Luxury Residence', baseRate: 75000 },
        { id: 'rajgarh', name: 'Khajuraho - The Oberoi Rajgarh Palace', baseRate: 32000 },
        { id: 'grand', name: 'Kolkata - The Oberoi Grand', baseRate: 19500 },
        { id: 'mumbai', name: 'Mumbai - The Oberoi, Mumbai', baseRate: 29500 },
        { id: 'sukhvilas', name: 'New Chandigarh - The Oberoi Sukhvilas', baseRate: 36000 },
        { id: 'newdelhi', name: 'New Delhi - The Oberoi, New Delhi', baseRate: 28500 },
        { id: 'vanyavilas', name: 'Ranthambhore - The Oberoi Vanyavilas', baseRate: 52000 },
        { id: 'wildflower', name: 'Shimla - Wildflower Hall, An Oberoi Resort', baseRate: 39000 },
        { id: 'cecil', name: 'Shimla - The Oberoi Cecil', baseRate: 22000 },
        { id: 'udaivilas', name: 'Udaipur - The Oberoi Udaivilas', baseRate: 48000 }
    ],
    egypt: [
        { id: 'sahlhasheesh', name: 'Sahl Hasheesh - The Oberoi, Sahl Hasheesh', baseRate: 35000 },
        { id: 'zahra', name: 'The Oberoi Zahra, Luxury Nile Cruiser', baseRate: 68000 },
        { id: 'philae', name: 'The Oberoi Philae, Luxury Nile Cruiser', baseRate: 64000 }
    ],
    indonesia: [
        { id: 'bali', name: 'Bali - The Oberoi, Bali', baseRate: 42000 },
        { id: 'lombok', name: 'Lombok - The Oberoi, Lombok', baseRate: 38000 }
    ],
    mauritius: [
        { id: 'mauritius', name: 'Mauritius - The Oberoi, Mauritius', baseRate: 55000 }
    ],
    morocco: [
        { id: 'marrakech', name: 'The Oberoi, Marrakech', baseRate: 62000 }
    ],
    saudi: [
        { id: 'wadisafar', name: 'Wadi Safar – The Oberoi Sukoonvilas (Opening Soon)', baseRate: 58000 }
    ]
}

const MANDARIN_ALLIANCE = {
    americas: ['Mandarin Oriental, New York', 'Mandarin Oriental, Boston', 'Mandarin Oriental, Miami', 'Mandarin Oriental, Washington D.C.'],
    europe: ['Mandarin Oriental Hyde Park, London', 'Mandarin Oriental, Paris', 'Mandarin Oriental Ritz, Madrid', 'Mandarin Oriental, Milan', 'Mandarin Oriental, Lago di Como'],
    asia: ['Mandarin Oriental, Hong Kong', 'Mandarin Oriental, Singapore', 'Mandarin Oriental, Bangkok', 'Mandarin Oriental, Tokyo'],
    middleEast: ['Emirates Palace Mandarin Oriental, Abu Dhabi', 'Mandarin Oriental, Doha']
}

const Navbar2 = ({ onOpenBooking }) => {
    const [isHeaderBookingOpen, setIsHeaderBookingOpen] = useState(false)
    const [selectedHotel, setSelectedHotel] = useState('Agra - The Oberoi Amarvilas')
    const [checkIn, setCheckIn] = useState('2026-10-15')
    const [checkOut, setCheckOut] = useState('2026-10-18')
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(2)
    const [promoCode, setPromoCode] = useState('')
    const [showPromoInput, setShowPromoInput] = useState(false)
    const [ratesView, setRatesView] = useState(false)
    const [confirmedRoom, setConfirmedRoom] = useState(null)
    const [guestName, setGuestName] = useState('')
    const [guestEmail, setGuestEmail] = useState('')

    // Drawer state
    const [drawerTab, setDrawerTab] = useState('oberoi') // 'oberoi' | 'mandarin'
    const [drawerSearch, setDrawerSearch] = useState('')

    const handleHeaderBookToggle = () => {
        setIsHeaderBookingOpen(!isHeaderBookingOpen)
        setRatesView(false)
        setConfirmedRoom(null)
    }

    const handleCheckRates = (e) => {
        e.preventDefault()
        setRatesView(true)
        setConfirmedRoom(null)
    }

    // Find base price of selected hotel
    let currentBase = 38500
    for (const country in HOTELS_GROUPED) {
        const found = HOTELS_GROUPED[country].find(h => h.name === selectedHotel)
        if (found) {
            currentBase = found.baseRate
            break
        }
    }

    const roomTiers = [
        {
            type: 'Premier Room with Private Terrace',
            size: '55 sq. m / 592 sq. ft',
            view: 'Garden / Courtyard Fountain View',
            inclusions: ['Complimentary High Speed Wi-Fi', 'Daily Morning Yoga', 'Personalized Butler Service'],
            rate: currentBase,
            memberRate: Math.round(currentBase * 0.85)
        },
        {
            type: 'Luxury Suite with Monument View',
            size: '85 sq. m / 915 sq. ft',
            view: 'Unobstructed Panoramic Taj / Palace View',
            inclusions: ['Complimentary Gourmet Breakfast', 'Airport Luxury Transfers', 'Cocktail Hour Privileges'],
            rate: Math.round(currentBase * 1.35),
            memberRate: Math.round(currentBase * 1.35 * 0.85)
        },
        {
            type: 'Kohinoor Royal Presidential Suite',
            size: '240 sq. m / 2,583 sq. ft',
            view: 'Grand Private Terrace & Temperature-Controlled Plunge Pool',
            inclusions: ['Dedicated 24-Hour Royal Butler', 'In-Suite Dining Chef Experience', 'Spa Credit of INR 10,000'],
            rate: Math.round(currentBase * 3.2),
            memberRate: Math.round(currentBase * 3.2 * 0.85)
        }
    ]

    const handleBookRoom = (room) => {
        setConfirmedRoom(room)
    }

    const handleCompleteReservation = (e) => {
        e.preventDefault()
        alert(`Reservation Confirmed for ${guestName || 'Valued Guest'}!\nBooking Reference: OBR-${Math.floor(100000 + Math.random() * 900000)}\nA confirmation email has been dispatched to ${guestEmail || 'your email'}.`)
        setIsHeaderBookingOpen(false)
        setRatesView(false)
        setConfirmedRoom(null)
    }

    return (
        <>
            <div className="container-fluid bg-white sticky-top shadow-sm py-1 main-navbar-wrap">
                <div className="row align-items-center px-lg-4 px-2">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center py-2">
                            {/* Left: Hamburger + Nav Links */}
                            <div className="d-flex align-items-center gap-3">
                                <button 
                                    className="btn p-1 border-0" 
                                    type="button" 
                                    data-bs-toggle="offcanvas" 
                                    data-bs-target="#luxuryOffcanvasDrawer" 
                                    aria-controls="luxuryOffcanvasDrawer"
                                    aria-label="Open Navigation Menu"
                                    style={{ color: '#171a2e' }}
                                >
                                    <div className="hamburger-lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                                
                                <div className="d-none d-xl-flex nav-main-links gap-4 ps-2">
                                    <NavLink to="/destinations">Destinations</NavLink>
                                    <NavLink to="/dining">Dining</NavLink>
                                    <NavLink to="/wellness">Wellness</NavLink>
                                    <NavLink to="/experiences">Experiences</NavLink>
                                </div>
                            </div>

                            {/* Center: Brand Logo */}
                            <Link to="/" className="navbar-brand m-0 text-center">
                                <img 
                                    src={logo} 
                                    alt="Oberoi Hotels & Resorts" 
                                    style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
                                />
                            </Link>

                            {/* Right: Nav Links + Book Button */}
                            <div className="d-flex align-items-center gap-4">
                                <div className="d-none d-xl-flex nav-main-links gap-4">
                                    <NavLink to="/offers">Offers</NavLink>
                                    <NavLink to="/events">Events</NavLink>
                                    <NavLink to="/awards">Awards</NavLink>
                                </div>

                                <button 
                                    type="button"
                                    onClick={handleHeaderBookToggle} 
                                    className={`book1-btn ${isHeaderBookingOpen ? 'active' : ''}`}
                                    title="Book your luxury stay"
                                >
                                    {isHeaderBookingOpen ? 'CLOSE ✕' : 'BOOK'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -----------------------------------------------
                   SLIDE-DOWN HEADER BOOKING ENGINE BAR (Oberoi Official Experience)
                ----------------------------------------------- */}
                {isHeaderBookingOpen && (
                    <div className="booking-engine-slide-wrap border-top bg-light py-3 px-lg-4 px-2 shadow-sm animate__animated animate__fadeInDown">
                        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                            <div>
                                <span className="fw-semibold text-uppercase" style={{ fontSize: '11px', letterSpacing: '2px', color: '#bfa15f' }}>
                                    <i className="fa-solid fa-calendar-check me-2"></i> Book Your Luxury Stay
                                </span>
                                <h4 className="mb-0 mt-1" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}>
                                    {selectedHotel}
                                </h4>
                            </div>
                            <button 
                                onClick={() => setIsHeaderBookingOpen(false)} 
                                className="btn btn-sm btn-link text-muted p-0 text-decoration-none"
                                aria-label="Close Booking Engine"
                            >
                                Close ✕
                            </button>
                        </div>

                        {!ratesView ? (
                            /* Step 1: Selection Form */
                            <form onSubmit={handleCheckRates}>
                                <div className="row g-2 align-items-end">
                                    {/* Hotel Dropdown */}
                                    <div className="col-lg-4 col-md-12">
                                        <label className="small fw-semibold text-muted d-block mb-1" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                                            DESTINATION / HOTEL
                                        </label>
                                        <select 
                                            className="form-select form-select-sm"
                                            value={selectedHotel}
                                            onChange={(e) => setSelectedHotel(e.target.value)}
                                        >
                                            <optgroup label="India">
                                                {HOTELS_GROUPED.india.map(h => (
                                                    <option key={h.id} value={h.name}>{h.name}</option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Egypt">
                                                {HOTELS_GROUPED.egypt.map(h => (
                                                    <option key={h.id} value={h.name}>{h.name}</option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Indonesia">
                                                {HOTELS_GROUPED.indonesia.map(h => (
                                                    <option key={h.id} value={h.name}>{h.name}</option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Mauritius">
                                                {HOTELS_GROUPED.mauritius.map(h => (
                                                    <option key={h.id} value={h.name}>{h.name}</option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Morocco">
                                                {HOTELS_GROUPED.morocco.map(h => (
                                                    <option key={h.id} value={h.name}>{h.name}</option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Saudi Arabia">
                                                {HOTELS_GROUPED.saudi.map(h => (
                                                    <option key={h.id} value={h.name}>{h.name}</option>
                                                ))}
                                            </optgroup>
                                        </select>
                                    </div>

                                    {/* Dates */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="row g-1">
                                            <div className="col-6">
                                                <label className="small fw-semibold text-muted d-block mb-1" style={{ fontSize: '11px', letterSpacing: '1px' }}>CHECK-IN</label>
                                                <input 
                                                    type="date" 
                                                    className="form-control form-control-sm"
                                                    value={checkIn}
                                                    onChange={(e) => setCheckIn(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-6">
                                                <label className="small fw-semibold text-muted d-block mb-1" style={{ fontSize: '11px', letterSpacing: '1px' }}>CHECK-OUT</label>
                                                <input 
                                                    type="date" 
                                                    className="form-control form-control-sm"
                                                    value={checkOut}
                                                    onChange={(e) => setCheckOut(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rooms & Guests */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="row g-1">
                                            <div className="col-6">
                                                <label className="small fw-semibold text-muted d-block mb-1" style={{ fontSize: '11px', letterSpacing: '1px' }}>ROOMS</label>
                                                <select 
                                                    className="form-select form-select-sm"
                                                    value={rooms}
                                                    onChange={(e) => setRooms(Number(e.target.value))}
                                                >
                                                    <option value="1">1 Room</option>
                                                    <option value="2">2 Rooms</option>
                                                    <option value="3">3 Rooms</option>
                                                    <option value="4">4+ Rooms</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label className="small fw-semibold text-muted d-block mb-1" style={{ fontSize: '11px', letterSpacing: '1px' }}>GUESTS</label>
                                                <select 
                                                    className="form-select form-select-sm"
                                                    value={adults}
                                                    onChange={(e) => setAdults(Number(e.target.value))}
                                                >
                                                    <option value="1">1 Adult</option>
                                                    <option value="2">2 Adults</option>
                                                    <option value="3">3 Adults</option>
                                                    <option value="4">4 Adults</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="col-lg-2 col-md-12">
                                        <button 
                                            type="submit" 
                                            className="book1-btn w-100 py-1 text-center"
                                            style={{ fontSize: '11.5px', height: '31px' }}
                                        >
                                            CHECK RATES
                                        </button>
                                    </div>
                                </div>

                                {/* Promo Code Toggle */}
                                <div className="mt-2 pt-1 d-flex align-items-center justify-content-between small text-muted">
                                    <span 
                                        className="text-decoration-underline" 
                                        style={{ cursor: 'pointer', fontSize: '11.5px', color: '#bfa15f' }}
                                        onClick={() => setShowPromoInput(!showPromoInput)}
                                    >
                                        <i className="fa-solid fa-plus-circle me-1"></i>
                                        {showPromoInput ? 'Hide Promo / Corporate Code' : 'Have a Promo or Corporate Code?'}
                                    </span>
                                    {showPromoInput && (
                                        <div className="d-flex align-items-center gap-2">
                                            <input 
                                                type="text" 
                                                placeholder="e.g. OBEROI15"
                                                className="form-control form-control-sm py-0"
                                                style={{ width: '130px', fontSize: '11px' }}
                                                value={promoCode}
                                                onChange={(e) => setPromoCode(e.target.value)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </form>
                        ) : confirmedRoom ? (
                            /* Step 3: Complete Booking / Guest Form */
                            <div className="p-3 bg-white border animate__animated animate__fadeIn">
                                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                                    <h5 className="mb-0" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}>
                                        Complete Your Reservation
                                    </h5>
                                    <button 
                                        type="button" 
                                        onClick={() => setConfirmedRoom(null)} 
                                        className="btn btn-sm btn-outline-secondary"
                                        style={{ fontSize: '11px' }}
                                    >
                                        ← Change Room Tier
                                    </button>
                                </div>

                                <div className="row g-3">
                                    <div className="col-md-7">
                                        <form onSubmit={handleCompleteReservation}>
                                            <div className="row g-2 mb-2">
                                                <div className="col-6">
                                                    <label className="small text-muted mb-1" style={{ fontSize: '11px' }}>First & Last Name</label>
                                                    <input 
                                                        type="text" 
                                                        required 
                                                        placeholder="Full Name" 
                                                        className="form-control form-control-sm"
                                                        value={guestName}
                                                        onChange={(e) => setGuestName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label className="small text-muted mb-1" style={{ fontSize: '11px' }}>Contact Phone</label>
                                                    <input type="tel" required placeholder="+91 98765 43210" className="form-control form-control-sm" />
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <label className="small text-muted mb-1" style={{ fontSize: '11px' }}>Email Address</label>
                                                <input 
                                                    type="email" 
                                                    required 
                                                    placeholder="guest@example.com" 
                                                    className="form-control form-control-sm"
                                                    value={guestEmail}
                                                    onChange={(e) => setGuestEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="small text-muted mb-1" style={{ fontSize: '11px' }}>Special In-Room Requests</label>
                                                <input type="text" placeholder="High floor, extra pillows, floral welcome..." className="form-control form-control-sm" />
                                            </div>
                                            <button type="submit" className="book1-btn w-100 py-2">
                                                CONFIRM & DISPATCH RESERVATION
                                            </button>
                                        </form>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="p-3 bg-light border">
                                            <span className="badge bg-warning text-dark mb-2" style={{ fontSize: '10.5px' }}>
                                                Oberoi One Privileges Applied
                                            </span>
                                            <h6 className="fw-bold mb-1" style={{ color: '#171a2e' }}>{confirmedRoom.type}</h6>
                                            <p className="text-muted small mb-2">{selectedHotel}</p>
                                            <div className="small mb-1 d-flex justify-content-between">
                                                <span>Dates:</span>
                                                <span className="fw-semibold">{checkIn} to {checkOut}</span>
                                            </div>
                                            <div className="small mb-1 d-flex justify-content-between">
                                                <span>Occupancy:</span>
                                                <span className="fw-semibold">{rooms} Room, {adults} Guests</span>
                                            </div>
                                            <div className="border-top pt-2 mt-2">
                                                <div className="d-flex justify-content-between fw-bold">
                                                    <span>Member Nightly Rate:</span>
                                                    <span style={{ color: '#bfa15f' }}>INR {confirmedRoom.memberRate.toLocaleString()}</span>
                                                </div>
                                                <small className="text-success d-block">You saved 15% (INR {(confirmedRoom.rate - confirmedRoom.memberRate).toLocaleString()})</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Step 2: Available Room Tiers */
                            <div className="animate__animated animate__fadeIn">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="small text-muted">
                                        Showing rates for <strong>{checkIn}</strong> to <strong>{checkOut}</strong> ({rooms} Room, {adults} Guests)
                                    </span>
                                    <button 
                                        type="button" 
                                        onClick={() => setRatesView(false)} 
                                        className="btn btn-sm btn-outline-dark py-0"
                                        style={{ fontSize: '11px' }}
                                    >
                                        Modify Search
                                    </button>
                                </div>

                                <div className="row g-3">
                                    {roomTiers.map((tier, idx) => (
                                        <div key={idx} className="col-md-4">
                                            <div className="room-rate-card p-3 bg-white border h-100 d-flex flex-column justify-content-between shadow-sm">
                                                <div>
                                                    <span className="badge bg-light text-dark border mb-2" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                                                        {tier.size}
                                                    </span>
                                                    <h6 className="fw-bold mb-1" style={{ color: '#171a2e', fontSize: '15px' }}>{tier.type}</h6>
                                                    <small className="text-muted d-block mb-2">{tier.view}</small>
                                                    <ul className="list-unstyled small text-muted mb-3" style={{ fontSize: '11.5px' }}>
                                                        {tier.inclusions.map((inc, i) => (
                                                            <li key={i} className="mb-1">
                                                                <i className="fa-solid fa-check text-success me-1"></i> {inc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="pt-2 border-top">
                                                    <div className="d-flex justify-content-between align-items-baseline mb-2">
                                                        <div>
                                                            <small className="text-decoration-line-through text-muted small d-block">
                                                                INR {tier.rate.toLocaleString()}
                                                            </small>
                                                            <span className="fs-5 fw-bold" style={{ color: '#bfa15f' }}>
                                                                INR {tier.memberRate.toLocaleString()}
                                                            </span>
                                                            <small className="text-muted d-block" style={{ fontSize: '10.5px' }}>per night + taxes</small>
                                                        </div>
                                                        <span className="badge bg-success" style={{ fontSize: '10px' }}>-15% Member</span>
                                                    </div>
                                                    <button 
                                                        onClick={() => handleBookRoom(tier)} 
                                                        className="book1-btn w-100 py-1 text-center"
                                                        style={{ fontSize: '11px' }}
                                                    >
                                                        BOOK THIS ROOM
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* -----------------------------------------------
               OFFCANVAS HAMBURGER DRAWER (Oberoi Official #menu)
            ----------------------------------------------- */}
            <div 
                className="offcanvas offcanvas-start luxury-offcanvas" 
                tabIndex="-1" 
                id="luxuryOffcanvasDrawer" 
                aria-labelledby="luxuryOffcanvasLabel"
            >
                {/* Header with Oberoi Logo and Close Button */}
                <div className="offcanvas-header border-bottom border-secondary border-opacity-25 p-3 d-flex justify-content-between align-items-center">
                    <Link to="/" data-bs-dismiss="offcanvas">
                        <img 
                            src={logo} 
                            alt="Oberoi Hotels" 
                            style={{ height: '38px', filter: 'brightness(0) invert(1)' }} 
                        />
                    </Link>
                    <button 
                        type="button" 
                        className="btn-close btn-close-white" 
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close"
                    ></button>
                </div>

                <div className="offcanvas-body p-3">
                    {/* Oberoi One Login Banner */}
                    <div className="p-3 mb-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 rounded-0 d-flex justify-content-between align-items-center">
                        <div>
                            <span className="d-block text-warning small fw-bold" style={{ color: '#bfa15f', letterSpacing: '1px' }}>
                                OBEROI ONE
                            </span>
                            <small className="text-white-50">Guest Recognition Programme</small>
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-outline-light rounded-0"
                            style={{ fontSize: '11px', letterSpacing: '1px' }}
                            data-bs-dismiss="offcanvas"
                            onClick={() => {
                                if (onOpenBooking) onOpenBooking()
                            }}
                        >
                            LOGIN / JOIN
                        </button>
                    </div>

                    {/* Search Input in Menu */}
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-transparent border-secondary text-white-50">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input 
                            type="text" 
                            placeholder="Type to search hotels..." 
                            className="form-control form-control-sm bg-transparent border-secondary text-white"
                            value={drawerSearch}
                            onChange={(e) => setDrawerSearch(e.target.value)}
                        />
                    </div>

                    {/* Brand Switch Tabs: Oberoi Hotels vs Mandarin Oriental Alliance */}
                    <div className="d-flex border-bottom border-secondary border-opacity-25 mb-3">
                        <button 
                            className={`btn flex-fill py-2 text-uppercase fw-semibold rounded-0 ${drawerTab === 'oberoi' ? 'text-warning border-bottom border-warning border-2' : 'text-white-50'}`}
                            style={{ fontSize: '11px', letterSpacing: '1px' }}
                            onClick={() => setDrawerTab('oberoi')}
                        >
                            Oberoi Hotels
                        </button>
                        <button 
                            className={`btn flex-fill py-2 text-uppercase fw-semibold rounded-0 ${drawerTab === 'mandarin' ? 'text-warning border-bottom border-warning border-2' : 'text-white-50'}`}
                            style={{ fontSize: '11px', letterSpacing: '1px' }}
                            onClick={() => setDrawerTab('mandarin')}
                        >
                            Mandarin Oriental Alliance
                        </button>
                    </div>

                    {/* Tab 1: Oberoi Hotels & Resorts List */}
                    {drawerTab === 'oberoi' ? (
                        <>
                            {/* Destinations Detailed Accordion */}
                            <div className="drawer-section mb-3">
                                <span className="drawer-category-title">
                                    <i className="fa-solid fa-hotel me-2"></i> DESTINATIONS
                                </span>
                                
                                {/* India Section */}
                                <div className="mt-2">
                                    <span className="small fw-bold text-white text-uppercase d-block mb-1" style={{ color: '#bfa15f', fontSize: '11.5px' }}>
                                        India
                                    </span>
                                    <div className="ps-2 d-flex flex-column">
                                        {HOTELS_GROUPED.india
                                            .filter(h => h.name.toLowerCase().includes(drawerSearch.toLowerCase()))
                                            .map(h => (
                                                <Link 
                                                    key={h.id} 
                                                    to="/destinations" 
                                                    className="drawer-nav-item py-1"
                                                    style={{ fontSize: '12.5px' }}
                                                    data-bs-dismiss="offcanvas"
                                                >
                                                    {h.name}
                                                </Link>
                                            ))}
                                    </div>
                                </div>

                                {/* International Section */}
                                <div className="mt-3">
                                    <span className="small fw-bold text-white text-uppercase d-block mb-1" style={{ color: '#bfa15f', fontSize: '11.5px' }}>
                                        International Resorts
                                    </span>
                                    <div className="ps-2 d-flex flex-column">
                                        <Link to="/destinations" className="drawer-nav-item py-1" style={{ fontSize: '12.5px' }} data-bs-dismiss="offcanvas">
                                            Egypt - The Oberoi, Sahl Hasheesh
                                        </Link>
                                        <Link to="/destinations" className="drawer-nav-item py-1" style={{ fontSize: '12.5px' }} data-bs-dismiss="offcanvas">
                                            Egypt - Nile Cruisers Zahra & Philae
                                        </Link>
                                        <Link to="/destinations" className="drawer-nav-item py-1" style={{ fontSize: '12.5px' }} data-bs-dismiss="offcanvas">
                                            Indonesia - Bali & Lombok
                                        </Link>
                                        <Link to="/destinations" className="drawer-nav-item py-1" style={{ fontSize: '12.5px' }} data-bs-dismiss="offcanvas">
                                            Mauritius - Turtle Bay
                                        </Link>
                                        <Link to="/destinations" className="drawer-nav-item py-1" style={{ fontSize: '12.5px' }} data-bs-dismiss="offcanvas">
                                            Morocco - The Oberoi, Marrakech
                                        </Link>
                                        <Link to="/destinations" className="drawer-nav-item py-1" style={{ fontSize: '12.5px' }} data-bs-dismiss="offcanvas">
                                            Saudi Arabia - Wadi Safar
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Main Categories */}
                            <div className="drawer-section mb-3">
                                <span className="drawer-category-title">EXPERIENCES & DINING</span>
                                <div className="ps-2">
                                    <Link to="/dining" className="drawer-nav-item" data-bs-dismiss="offcanvas">Signature Dining & Bars</Link>
                                    <Link to="/wellness" className="drawer-nav-item" data-bs-dismiss="offcanvas">Oberoi Spa & Wellness</Link>
                                    <Link to="/experiences" className="drawer-nav-item" data-bs-dismiss="offcanvas">Curated Experiences</Link>
                                </div>
                            </div>

                            <div className="drawer-section mb-3">
                                <span className="drawer-category-title">OFFERS & CELEBRATIONS</span>
                                <div className="ps-2">
                                    <Link to="/offers" className="drawer-nav-item" data-bs-dismiss="offcanvas">Special Offers & Packages</Link>
                                    <Link to="/events" className="drawer-nav-item" data-bs-dismiss="offcanvas">Meetings & Celebrations</Link>
                                    <a href="https://www.theoberoiconcours.com/" target="_blank" rel="noreferrer" className="drawer-nav-item" data-bs-dismiss="offcanvas">The Oberoi Concours d'Elegance</a>
                                </div>
                            </div>

                            <div className="drawer-section mb-3">
                                <span className="drawer-category-title">ABOUT US & ASSISTANCE</span>
                                <div className="ps-2">
                                    <Link to="/awards" className="drawer-nav-item" data-bs-dismiss="offcanvas">Awards & Accolades</Link>
                                    <Link to="/contact" className="drawer-nav-item" data-bs-dismiss="offcanvas">Contact Us & Helplines</Link>
                                    <Link to="/" className="drawer-nav-item" data-bs-dismiss="offcanvas">Our Story & Heritage</Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        /* Tab 2: Mandarin Oriental Alliance */
                        <div className="drawer-section mb-3">
                            <span className="drawer-category-title">MANDARIN ORIENTAL GLOBAL NETWORK</span>
                            
                            <div className="mt-2">
                                <span className="small fw-bold text-white text-uppercase d-block mb-1" style={{ color: '#bfa15f', fontSize: '11px' }}>The Americas</span>
                                <ul className="list-unstyled ps-2 mb-3">
                                    {MANDARIN_ALLIANCE.americas.map((m, i) => (
                                        <li key={i} className="text-white-50 small py-1">{m}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-2">
                                <span className="small fw-bold text-white text-uppercase d-block mb-1" style={{ color: '#bfa15f', fontSize: '11px' }}>Europe</span>
                                <ul className="list-unstyled ps-2 mb-3">
                                    {MANDARIN_ALLIANCE.europe.map((m, i) => (
                                        <li key={i} className="text-white-50 small py-1">{m}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-2">
                                <span className="small fw-bold text-white text-uppercase d-block mb-1" style={{ color: '#bfa15f', fontSize: '11px' }}>Asia-Pacific</span>
                                <ul className="list-unstyled ps-2 mb-3">
                                    {MANDARIN_ALLIANCE.asia.map((m, i) => (
                                        <li key={i} className="text-white-50 small py-1">{m}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-2">
                                <a 
                                    href="https://www.oberoihotels.com/omoalliance/" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="btn btn-outline-warning w-100 rounded-0 mt-2 py-2 small"
                                    style={{ fontSize: '11px', letterSpacing: '1px' }}
                                >
                                    EXPLORE ALLIANCE <i className="fa-solid fa-angle-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Drawer Bottom Action & Socials */}
                    <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                        <button 
                            type="button"
                            onClick={() => {
                                setIsHeaderBookingOpen(true)
                            }} 
                            className="book1-btn w-100 py-2 fs-6 text-center"
                            data-bs-dismiss="offcanvas"
                        >
                            BOOK YOUR STAY
                        </button>

                        <div className="d-flex justify-content-center gap-3 mt-3 text-white-50 fs-5">
                            <a href="https://twitter.com/oberoihotels" target="_blank" rel="noreferrer" className="text-white-50" aria-label="X Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="https://facebook.com/oberoihotels" target="_blank" rel="noreferrer" className="text-white-50" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://instagram.com/oberoihotels" target="_blank" rel="noreferrer" className="text-white-50" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://youtube.com/user/OberoiHotels" target="_blank" rel="noreferrer" className="text-white-50" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar2