import { useState, useRef } from 'react'
import video from "../assets/img/hotel-video.mp4"

const HOTELS_LIST = [
    { id: 'amarvilas', name: 'The Oberoi Amarvilas', city: 'Agra', country: 'India' },
    { id: 'udaivilas', name: 'The Oberoi Udaivilas', city: 'Udaipur', country: 'India' },
    { id: 'rajvilas', name: 'The Oberoi Rajvilas', city: 'Jaipur', country: 'India' },
    { id: 'wildflower', name: 'Wildflower Hall, An Oberoi Resort', city: 'Shimla', country: 'India' },
    { id: 'sukhvilas', name: 'The Oberoi Sukhvilas', city: 'New Chandigarh', country: 'India' },
    { id: 'vanyavilas', name: 'The Oberoi Vanyavilas', city: 'Ranthambhore', country: 'India' },
    { id: 'bengaluru', name: 'The Oberoi, Bengaluru', city: 'Bengaluru', country: 'India' },
    { id: 'gurgaon', name: 'The Oberoi, Gurgaon', city: 'Gurgaon', country: 'India' },
    { id: 'mumbai', name: 'The Oberoi, Mumbai', city: 'Mumbai', country: 'India' },
    { id: 'newdelhi', name: 'The Oberoi, New Delhi', city: 'New Delhi', country: 'India' },
    { id: 'bali', name: 'The Oberoi Beach Resort, Bali', city: 'Bali', country: 'Indonesia' },
    { id: 'marrakech', name: 'The Oberoi, Marrakech', city: 'Marrakech', country: 'Morocco' },
    { id: 'sahlhasheesh', name: 'The Oberoi Beach Resort', city: 'Sahl Hasheesh', country: 'Egypt' },
    { id: 'philae', name: 'The Oberoi Philae, Luxury Nile Cruiser', city: 'Nile River', country: 'Egypt' },
    { id: 'mauritius', name: 'The Oberoi Beach Resort, Mauritius', city: 'Turtle Bay', country: 'Mauritius' }
]

const Video = ({ onOpenBooking }) => {
    const videoRef = useRef(null)
    const [isMuted, setIsMuted] = useState(true)
    const [selectedHotel, setSelectedHotel] = useState(HOTELS_LIST[0])
    const [checkIn, setCheckIn] = useState('2026-10-15')
    const [checkOut, setCheckOut] = useState('2026-10-18')
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(2)
    const [promoCode, setPromoCode] = useState('')
    const [showHotelDropdown, setShowHotelDropdown] = useState(false)
    const [showGuestDropdown, setShowGuestDropdown] = useState(false)
    const [showPromoInput, setShowPromoInput] = useState(false)

    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setIsMuted(videoRef.current.muted)
        }
    }

    const handleBookClick = (e) => {
        e.preventDefault()
        if (onOpenBooking) {
            onOpenBooking({
                hotel: selectedHotel,
                checkIn,
                checkOut,
                rooms,
                adults,
                promoCode
            })
        }
    }

    return (
        <div className="container-fluid p-0 position-relative">
            {/* Background Video Banner */}
            <div className="bg-video-wrapper">
                <video 
                    ref={videoRef}
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-100 h-100"
                >
                    <source src={video} type="video/mp4" />
                </video>
                <div className="video-overlay-gradient"></div>

                {/* Sound Toggle Button */}
                <button 
                    onClick={toggleSound} 
                    className="video-sound-toggle"
                    title={isMuted ? "Unmute Video" : "Mute Video"}
                >
                    <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'} me-2`}></i>
                    {isMuted ? 'SOUND ON' : 'MUTE'}
                </button>

                {/* Subtitle tag */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x pb-5 text-center text-white d-none d-md-block" style={{ marginBottom: '55px', zIndex: 10 }}>
                    <p className="mb-1" style={{ letterSpacing: '4px', fontSize: '11px', textTransform: 'uppercase', color: '#bfa15f', fontWeight: '600' }}>
                        Heart. Felt.
                    </p>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', fontWeight: '400', letterSpacing: '1px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        Unforgettable Luxury Across The World
                    </h1>
                </div>
            </div>

            {/* Luxury Floating Booking Bar */}
            <div className="video-control-widget mx-auto">
                <div className="row g-0 align-items-center">
                    {/* Destination / Hotel Selector */}
                    <div className="col-lg-4 col-md-6 booking-col" onClick={() => { setShowHotelDropdown(!showHotelDropdown); setShowGuestDropdown(false); }}>
                        <span className="booking-label">Destination or Hotel</span>
                        <div className="booking-value">
                            <span className="text-truncate pe-2">
                                {selectedHotel.city} - {selectedHotel.name}
                            </span>
                            <i className={`fa-solid ${showHotelDropdown ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                        </div>

                        {showHotelDropdown && (
                            <div className="booking-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                <div className="px-3 py-1 mb-2 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#bfa15f', letterSpacing: '1.5px' }}>
                                    Select A Destination
                                </div>
                                {HOTELS_LIST.map((h) => (
                                    <div 
                                        key={h.id} 
                                        className={`booking-dropdown-item ${selectedHotel.id === h.id ? 'active' : ''}`}
                                        onClick={() => {
                                            setSelectedHotel(h)
                                            setShowHotelDropdown(false)
                                        }}
                                    >
                                        <div className="fw-semibold">{h.name}</div>
                                        <small className="text-muted">{h.city}, {h.country}</small>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Check-In & Check-Out Dates */}
                    <div className="col-lg-3 col-md-6 booking-col">
                        <div className="row g-2">
                            <div className="col-6">
                                <span className="booking-label">Check-In</span>
                                <input 
                                    type="date" 
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="form-control border-0 p-0 fw-semibold text-dark"
                                    style={{ fontSize: '14px', background: 'transparent', cursor: 'pointer' }}
                                />
                            </div>
                            <div className="col-6 border-start ps-2">
                                <span className="booking-label">Check-Out</span>
                                <input 
                                    type="date" 
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="form-control border-0 p-0 fw-semibold text-dark"
                                    style={{ fontSize: '14px', background: 'transparent', cursor: 'pointer' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Rooms & Guests Selector */}
                    <div className="col-lg-3 col-md-6 booking-col" onClick={() => { setShowGuestDropdown(!showGuestDropdown); setShowHotelDropdown(false); }}>
                        <span className="booking-label">Rooms & Guests</span>
                        <div className="booking-value">
                            <span>{rooms} Room{rooms > 1 ? 's' : ''}, {adults} Adult{adults > 1 ? 's' : ''}</span>
                            <i className={`fa-solid ${showGuestDropdown ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                        </div>

                        {showGuestDropdown && (
                            <div className="booking-dropdown-menu p-3" onClick={(e) => e.stopPropagation()}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="small fw-semibold">Rooms</span>
                                    <div className="d-flex align-items-center gap-2">
                                        <button 
                                            className="btn btn-sm btn-outline-secondary py-0 px-2"
                                            onClick={() => setRooms(Math.max(1, rooms - 1))}
                                        >-</button>
                                        <span className="fw-bold px-1">{rooms}</span>
                                        <button 
                                            className="btn btn-sm btn-outline-secondary py-0 px-2"
                                            onClick={() => setRooms(Math.min(5, rooms + 1))}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="small fw-semibold">Adults</span>
                                    <div className="d-flex align-items-center gap-2">
                                        <button 
                                            className="btn btn-sm btn-outline-secondary py-0 px-2"
                                            onClick={() => setAdults(Math.max(1, adults - 1))}
                                        >-</button>
                                        <span className="fw-bold px-1">{adults}</span>
                                        <button 
                                            className="btn btn-sm btn-outline-secondary py-0 px-2"
                                            onClick={() => setAdults(Math.min(10, adults + 1))}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="text-end pt-2 border-top">
                                    <button 
                                        className="btn btn-sm btn-dark px-3 py-1"
                                        style={{ fontSize: '11px', letterSpacing: '1px' }}
                                        onClick={() => setShowGuestDropdown(false)}
                                    >DONE</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Book Action Button */}
                    <div className="col-lg-2 col-md-6 p-0">
                        <button 
                            onClick={handleBookClick} 
                            className="book-now-cta-btn"
                        >
                            <span>BOOK</span>
                            <i className="fa-solid fa-arrow-right-long fs-6"></i>
                        </button>
                    </div>
                </div>

                {/* Promo Code Toggle Line */}
                <div className="px-3 py-2 bg-light d-flex justify-content-between align-items-center border-top">
                    <div>
                        <span 
                            className="promo-toggle-link"
                            onClick={() => setShowPromoInput(!showPromoInput)}
                        >
                            <i className="fa-solid fa-tag me-1"></i>
                            {showPromoInput ? 'Hide Promo Code' : 'Have a Promo / Corporate Code?'}
                        </span>
                    </div>

                    {showPromoInput && (
                        <div className="d-flex align-items-center gap-2">
                            <input 
                                type="text" 
                                placeholder="Enter Code" 
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                className="form-control form-control-sm py-1"
                                style={{ width: '130px', fontSize: '11px' }}
                            />
                            <button 
                                className="btn btn-sm btn-dark py-1 px-2"
                                style={{ fontSize: '10px', letterSpacing: '1px' }}
                                onClick={() => alert(`Promo code applied: ${promoCode || 'DEFAULT'}`)}
                            >APPLY</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Video