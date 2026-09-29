import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'

// Pages
import Home from './Home'
import DestinationsPage from './pages/DestinationsPage'
import DiningPage from './pages/DiningPage'
import WellnessPage from './pages/WellnessPage'
import ExperiencesPage from './pages/ExperiencesPage'
import OffersPage from './pages/OffersPage'
import EventsPage from './pages/EventsPage'
import AwardsPage from './pages/AwardsPage'
import ContactPage from './pages/ContactPage'

// Searchable directory for live instant search
const SEARCH_DIRECTORY = [
    { name: 'The Oberoi Amarvilas', city: 'Agra', category: 'Destination / Resort', path: '/destinations', desc: 'Uninterrupted Taj Mahal views from every room and suite.' },
    { name: 'The Oberoi Udaivilas', city: 'Udaipur', category: 'Destination / Palace', path: '/destinations', desc: 'Palace resort on the banks of Lake Pichola with domed pavilions.' },
    { name: 'The Oberoi Rajvilas', city: 'Jaipur', category: 'Destination / Resort', path: '/destinations', desc: 'Royal 32-acre fort setting with luxury tents and private pools.' },
    { name: 'Wildflower Hall, An Oberoi Resort', city: 'Shimla', category: 'Destination / Resort', path: '/destinations', desc: 'Alpine retreat at 8,250 feet in fragrant cedar forests.' },
    { name: 'The Oberoi Sukhvilas', city: 'New Chandigarh', category: 'Destination / Spa Retreat', path: '/destinations', desc: 'Ayurvedic wellness retreat in 8,000-acre Siswan Forest.' },
    { name: 'The Oberoi Vindhyavilas', city: 'Bandhavgarh', category: 'Destination / Wildlife Lodge', path: '/destinations', desc: 'Wilderness luxury in tiger country with private game safaris.' },
    { name: 'The Oberoi, Mumbai', city: 'Mumbai', category: 'Destination / City Hotel', path: '/destinations', desc: 'Waterfront sanctuary on Marine Drive in South Mumbai.' },
    { name: 'The Oberoi, Bengaluru', city: 'Bengaluru', category: 'Destination / City Hotel', path: '/destinations', desc: 'Lush tropical grounds with century-old rain trees on MG Road.' },
    { name: 'The Oberoi, Gurgaon', city: 'Gurgaon', category: 'Destination / City Hotel', path: '/destinations', desc: 'Contemporary architecture and 36,000 sq ft reflecting pool.' },
    { name: 'The Oberoi, New Delhi', city: 'New Delhi', category: 'Destination / City Hotel', path: '/destinations', desc: 'Overlooking Delhi Golf Course with state-of-the-art clean air systems.' },
    { name: 'The Oberoi Beach Resort, Bali', city: 'Bali', category: 'International / Beach Resort', path: '/destinations', desc: 'Seminyak Beach resort set within 15 acres of tropical gardens.' },
    { name: 'The Oberoi Beach Resort, Mauritius', city: 'Mauritius', category: 'International / Beach Resort', path: '/destinations', desc: 'Turtle Bay marine park beachfront with sunset views.' },
    { name: 'The Oberoi, Marrakech', city: 'Marrakech', category: 'International / Palace', path: '/destinations', desc: 'Andalusian palace amidst citrus orchards with Atlas Mountain views.' },
    { name: 'The Oberoi Sahl Hasheesh', city: 'Egypt', category: 'International / Red Sea Resort', path: '/destinations', desc: 'Underwater marine reefs and private courtyard suites.' },
    { name: 'The Oberoi Philae & Zahra Nile Cruisers', city: 'Egypt', category: 'International / Luxury Nile Cruise', path: '/destinations', desc: 'Bespoke 4, 5, and 7 night luxury Nile cruises between Luxor and Aswan.' },
    { name: 'Mewar by Vineet', city: 'Udaipur', category: 'Signature Dining', path: '/dining', desc: 'Mentor Chef Vineet Bhatia MBE reimagines Mewari royal heritage cuisine.' },
    { name: 'Madam Chow', city: 'Gurgaon', category: 'Signature Dining', path: '/dining', desc: 'Authentic Cantonese and Sichuan fine dining with master Chinese chefs.' },
    { name: 'Lord Vesper', city: 'Gurgaon', category: 'Bar & Lounge', path: '/dining', desc: 'High-energy cocktail bar with global cuisine and water reflections.' },
    { name: 'Dhilli', city: 'New Delhi', category: 'Signature Dining', path: '/dining', desc: 'Michelin-starred Chef Vineet Bhatia celebrates Delhi’s culinary history.' },
    { name: 'Eau Bar', city: 'Mumbai', category: 'Bar & Lounge', path: '/dining', desc: 'Oceanfront art-deco bar with craft cocktails and live music.' },
    { name: 'Wabi Sabi', city: 'Bengaluru', category: 'Signature Dining', path: '/dining', desc: 'Japanese omakase, sushi, and robata amid zen gardens.' },
    { name: 'Oberoi Spa & Ayurvedic Rituals', city: 'All Properties', category: 'Wellness & Spa', path: '/wellness', desc: 'Holistic therapies, Eastern & Western massages, and sound healing.' },
    { name: 'Forest Bathing in Siswan Forest', city: 'New Chandigarh', category: 'Curated Experience', path: '/experiences', desc: 'Guided nature immersion and mindfulness in protected forests.' },
    { name: 'Dine Under the Stars by Taj Mahal', city: 'Agra', category: 'Curated Experience', path: '/experiences', desc: 'Terrace dinner overlooking the illuminated Taj Mahal.' },
    { name: '15% Exceptional Savings - Oberoi One', city: 'Worldwide', category: 'Special Offer', path: '/offers', desc: 'Exclusive member savings plus INR 5,000 hotel credit per stay.' }
]

// Inner App Content with Access to useNavigate
const MainLayout = () => {
    const navigate = useNavigate()

    // Global Modal & Interactive States
    const [isBookingOpen, setIsBookingOpen] = useState(false)
    const [bookingDetails, setBookingDetails] = useState({
        hotelName: 'The Oberoi Amarvilas, Agra',
        checkIn: '2026-10-15',
        checkOut: '2026-10-18',
        rooms: 1,
        adults: 2,
        promoCode: '',
        roomType: 'Premier Room with Private Balcony'
    })
    const [bookingSuccess, setBookingSuccess] = useState(false)
    const [bookingRefCode, setBookingRefCode] = useState('')

    // Login Modal
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [loginTab, setLoginTab] = useState('login')

    // Live Instant Search Modal
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    // Table Reservation Modal
    const [isTableResOpen, setIsTableResOpen] = useState(false)
    const [tableResData, setTableResData] = useState({
        restaurant: 'Mewar by Vineet',
        hotel: 'The Oberoi Udaivilas, Udaipur',
        date: '2026-10-16',
        time: '7:30 PM',
        guests: 2,
        dietary: 'Vegetarian Preferences',
        name: '',
        email: '',
        phone: ''
    })
    const [tableResSuccess, setTableResSuccess] = useState(false)
    const [tableResCode, setTableResCode] = useState('')

    // Event Proposal Modal
    const [isProposalOpen, setIsProposalOpen] = useState(false)
    const [proposalData, setProposalData] = useState({
        eventType: 'Royal Destination Wedding',
        venue: 'Roshnara & Jahanara Ballrooms',
        hotel: 'The Oberoi Amarvilas, Agra',
        date: '2026-11-20',
        guests: '150 Guests',
        name: '',
        email: '',
        phone: '',
        requirements: ''
    })
    const [proposalSuccess, setProposalSuccess] = useState(false)
    const [proposalCode, setProposalCode] = useState('')

    // Contact Modal
    const [isContactOpen, setIsContactOpen] = useState(false)

    // Concierge Chat State
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [chatInput, setChatInput] = useState('')
    const [chatMessages, setChatMessages] = useState([
        {
            sender: 'bot',
            time: 'Just now',
            text: 'Namaste and warm greetings from Oberoi Hotels & Resorts. How may our Concierge officer assist your journey today?'
        }
    ])

    // Scroll to top
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowBackToTop(true)
            } else {
                setShowBackToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const openBookingModal = (data = {}) => {
        setBookingDetails(prev => ({
            ...prev,
            ...(data.hotel ? { hotelName: `${data.hotel.name}, ${data.hotel.city}` } : {}),
            ...(data.hotelName ? { hotelName: data.hotelName } : {}),
            ...(data.checkIn ? { checkIn: data.checkIn } : {}),
            ...(data.checkOut ? { checkOut: data.checkOut } : {}),
            ...(data.rooms ? { rooms: data.rooms } : {}),
            ...(data.adults ? { adults: data.adults } : {}),
            ...(data.promoCode ? { promoCode: data.promoCode } : {})
        }))
        setBookingSuccess(false)
        setIsBookingOpen(true)
    }

    const handleConfirmBooking = (e) => {
        e.preventDefault()
        const code = `OBR-${Math.floor(100000 + Math.random() * 900000)}`
        setBookingRefCode(code)
        setBookingSuccess(true)
    }

    const openTableReservation = (data = {}) => {
        setTableResData(prev => ({
            ...prev,
            ...(data.restaurant ? { restaurant: data.restaurant } : {}),
            ...(data.hotel ? { hotel: data.hotel } : {})
        }))
        setTableResSuccess(false)
        setIsTableResOpen(true)
    }

    const handleConfirmTableRes = (e) => {
        e.preventDefault()
        const code = `TBL-${Math.floor(10000 + Math.random() * 90000)}`
        setTableResCode(code)
        setTableResSuccess(true)
    }

    const openProposal = (data = {}) => {
        setProposalData(prev => ({
            ...prev,
            ...(data.venue ? { venue: data.venue } : {}),
            ...(data.hotel ? { hotel: data.hotel } : {})
        }))
        setProposalSuccess(false)
        setIsProposalOpen(true)
    }

    const handleConfirmProposal = (e) => {
        e.preventDefault()
        const code = `EVT-${Math.floor(10000 + Math.random() * 90000)}`
        setProposalCode(code)
        setProposalSuccess(true)
    }

    // Chat bot reply generator
    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!chatInput.trim()) return

        const userMsg = chatInput.trim()
        const newMessages = [...chatMessages, { sender: 'user', time: 'Now', text: userMsg }]
        setChatMessages(newMessages)
        setChatInput('')

        // Bot Response
        setTimeout(() => {
            const lower = userMsg.toLowerCase()
            let reply = ''
            if (lower.includes('room') || lower.includes('book') || lower.includes('price') || lower.includes('rate') || lower.includes('availab')) {
                reply = 'I would be delighted to assist with your room reservation. You can click "Check Room Availability" or use our booking engine above. Oberoi One members receive 15% savings and an extra INR 5,000 hotel credit.'
            } else if (lower.includes('dine') || lower.includes('dining') || lower.includes('restaurant') || lower.includes('food') || lower.includes('table')) {
                reply = 'Oberoi Hotels features award-winning signature dining, including Mewar by Vineet (Udaipur), Madam Chow (Gurgaon), and Dhilli (New Delhi). Would you like to reserve a table at one of our restaurants?'
            } else if (lower.includes('spa') || lower.includes('wellness') || lower.includes('ayurved')) {
                reply = 'Our Oberoi Spas combine holistic Ayurvedic wellness, signature Eastern & Western massage therapies, and private yoga pavilions. The Oberoi Sukhvilas offers specialized multi-day wellness retreats.'
            } else if (lower.includes('wedding') || lower.includes('event') || lower.includes('banquet') || lower.includes('meeting')) {
                reply = 'Our dedicated events and celebrations team curates unforgettable royal weddings and executive summits. You can request a personalized proposal with our event planners.'
            } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('call') || lower.includes('number')) {
                reply = 'You may connect with our Worldwide Reservations Concierge 24/7 at +91-11-6911-0606 or toll-free at 1800-11-2030, or email reservations@oberoihotels.com.'
            } else {
                reply = 'Thank you for your message. An Oberoi guest service executive is here to ensure your journey is seamless. Let us know if you need assistance with destinations, bespoke experiences, or member privileges.'
            }

            setChatMessages(prev => [...prev, { sender: 'bot', time: 'Now', text: reply }])
        }, 700)
    }

    // Live search filtered results
    const filteredSearchResults = searchQuery.trim()
        ? SEARCH_DIRECTORY.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : []

    return (
        <div className="d-flex flex-column min-vh-100 position-relative">
            <ScrollToTop />

            {/* Top Bar with Home, Login/Join Now Popover, Partner Login, Contact Us, Search */}
            <Navbar1 
                onOpenLogin={(tab = 'login') => { setLoginTab(tab); setIsLoginOpen(true); }}
                onOpenSearch={() => setIsSearchOpen(true)}
            />

            {/* Main Luxury Header with Navigation Links & Slide-Down Booking Engine */}
            <Navbar2 
                onOpenBooking={() => openBookingModal()}
            />

            {/* Route Content Area */}
            <main className="flex-grow-1">
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <Home 
                                onOpenBooking={openBookingModal} 
                                onOpenLogin={(tab) => { setLoginTab(tab); setIsLoginOpen(true); }} 
                                onOpenTableReservation={openTableReservation}
                                onOpenProposal={openProposal}
                            />
                        } 
                    />
                    <Route 
                        path="/destinations" 
                        element={<DestinationsPage onOpenBooking={openBookingModal} />} 
                    />
                    <Route 
                        path="/dining" 
                        element={<DiningPage onOpenBooking={openBookingModal} onOpenTableReservation={openTableReservation} />} 
                    />
                    <Route 
                        path="/wellness" 
                        element={<WellnessPage onOpenBooking={openBookingModal} />} 
                    />
                    <Route 
                        path="/experiences" 
                        element={<ExperiencesPage onOpenBooking={openBookingModal} />} 
                    />
                    <Route 
                        path="/offers" 
                        element={<OffersPage onOpenBooking={openBookingModal} />} 
                    />
                    <Route 
                        path="/events" 
                        element={<EventsPage onOpenBooking={openBookingModal} onOpenProposal={openProposal} />} 
                    />
                    <Route 
                        path="/awards" 
                        element={<AwardsPage onOpenBooking={openBookingModal} />} 
                    />
                    <Route 
                        path="/contact" 
                        element={<ContactPage />} 
                    />
                    {/* Fallback to Home */}
                    <Route 
                        path="*" 
                        element={
                            <Home 
                                onOpenBooking={openBookingModal} 
                                onOpenLogin={(tab) => { setLoginTab(tab); setIsLoginOpen(true); }} 
                                onOpenTableReservation={openTableReservation}
                                onOpenProposal={openProposal}
                            />
                        } 
                    />
                </Routes>
            </main>

            {/* Global Luxury Footer */}
            <Footer 
                onOpenContact={() => setIsContactOpen(true)}
                onOpenBooking={() => openBookingModal()}
            />

            {/* -----------------------------------------------
               FLOATING BUTTONS
            ----------------------------------------------- */}
            {/* Concierge Chat Floating Button */}
            <button 
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="floating-concierge-btn border-0"
                title="Chat with Oberoi Concierge"
            >
                <i className="fa-regular fa-comment-dots fs-5"></i>
                <span>How may I help you?</span>
            </button>

            {/* Back to Top Floating Button */}
            {showBackToTop && (
                <button 
                    onClick={scrollToTop}
                    className="floating-back-top"
                    title="Back to Top"
                    aria-label="Back to Top"
                >
                    <i className="fa-solid fa-chevron-up"></i>
                </button>
            )}

            {/* -----------------------------------------------
               INTERACTIVE MODALS
            ----------------------------------------------- */}

            {/* 1. BOOKING ENGINE MODAL */}
            {isBookingOpen && (
                <div className="luxury-modal-backdrop" onClick={() => setIsBookingOpen(false)}>
                    <div className="luxury-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="luxury-modal-close" onClick={() => setIsBookingOpen(false)}>✕</button>
                        
                        <div className="text-center mb-4">
                            <span className="section-eyebrow">RESERVATIONS</span>
                            <h3 className="section-main-title" style={{ fontSize: '28px' }}>
                                Book Your Luxury Stay
                            </h3>
                        </div>

                        {bookingSuccess ? (
                            <div className="text-center py-4">
                                <div className="mb-3" style={{ fontSize: '48px', color: '#bfa15f' }}>
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}>Reservation Request Received</h4>
                                <div className="badge bg-warning text-dark py-2 px-3 my-2" style={{ fontSize: '13px', letterSpacing: '1px' }}>
                                    REFERENCE: {bookingRefCode}
                                </div>
                                <p className="text-muted small mt-2">
                                    Thank you for choosing Oberoi Hotels &amp; Resorts. We have reserved your requested stay at <strong>{bookingDetails.hotelName}</strong> for <strong>{bookingDetails.checkIn}</strong> to <strong>{bookingDetails.checkOut}</strong>.
                                </p>
                                <p className="small text-muted">
                                    Our worldwide reservations desk has dispatched your complete booking confirmation, check-in instructions, and personal butler request details to your registered email.
                                </p>
                                <button 
                                    className="gold-cta-btn mx-auto mt-3 border-0"
                                    onClick={() => setIsBookingOpen(false)}
                                >
                                    DONE
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleConfirmBooking}>
                                <div className="mb-3">
                                    <label className="booking-label">Selected Destination / Hotel</label>
                                    <select 
                                        className="form-select"
                                        value={bookingDetails.hotelName}
                                        onChange={(e) => setBookingDetails({ ...bookingDetails, hotelName: e.target.value })}
                                    >
                                        <option value="The Oberoi Amarvilas, Agra">The Oberoi Amarvilas, Agra</option>
                                        <option value="The Oberoi Udaivilas, Udaipur">The Oberoi Udaivilas, Udaipur</option>
                                        <option value="The Oberoi Rajvilas, Jaipur">The Oberoi Rajvilas, Jaipur</option>
                                        <option value="Wildflower Hall, Shimla">Wildflower Hall, Shimla</option>
                                        <option value="The Oberoi Sukhvilas, New Chandigarh">The Oberoi Sukhvilas, New Chandigarh</option>
                                        <option value="The Oberoi, Mumbai">The Oberoi, Mumbai</option>
                                        <option value="The Oberoi, Bengaluru">The Oberoi, Bengaluru</option>
                                        <option value="The Oberoi, Gurgaon">The Oberoi, Gurgaon</option>
                                        <option value="The Oberoi, New Delhi">The Oberoi, New Delhi</option>
                                        <option value="The Oberoi Beach Resort, Bali">The Oberoi Beach Resort, Bali</option>
                                        <option value="The Oberoi, Marrakech">The Oberoi, Marrakech</option>
                                        <option value="The Oberoi Beach Resort, Mauritius">The Oberoi Beach Resort, Mauritius</option>
                                    </select>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">Check-In Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            value={bookingDetails.checkIn}
                                            onChange={(e) => setBookingDetails({ ...bookingDetails, checkIn: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Check-Out Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            value={bookingDetails.checkOut}
                                            onChange={(e) => setBookingDetails({ ...bookingDetails, checkOut: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">Number of Rooms</label>
                                        <select 
                                            className="form-select"
                                            value={bookingDetails.rooms}
                                            onChange={(e) => setBookingDetails({ ...bookingDetails, rooms: Number(e.target.value) })}
                                        >
                                            <option value="1">1 Room</option>
                                            <option value="2">2 Rooms</option>
                                            <option value="3">3 Rooms</option>
                                            <option value="4">4+ Rooms</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Guests (Adults)</label>
                                        <select 
                                            className="form-select"
                                            value={bookingDetails.adults}
                                            onChange={(e) => setBookingDetails({ ...bookingDetails, adults: Number(e.target.value) })}
                                        >
                                            <option value="1">1 Adult</option>
                                            <option value="2">2 Adults</option>
                                            <option value="3">3 Adults</option>
                                            <option value="4">4 Adults</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="booking-label">Room Tier Preference</label>
                                    <select 
                                        className="form-select"
                                        value={bookingDetails.roomType}
                                        onChange={(e) => setBookingDetails({ ...bookingDetails, roomType: e.target.value })}
                                    >
                                        <option value="Premier Room with Private Balcony">Premier Room with Private Balcony (INR 34,000/night)</option>
                                        <option value="Luxury Suite with Monument / Lake View">Luxury Suite with Monument / Lake View (INR 48,000/night)</option>
                                        <option value="Kohinoor Royal Presidential Suite">Kohinoor Royal Presidential Suite with Butler (INR 125,000/night)</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="booking-label">Promo / Corporate Code (Optional)</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. OBEROI15"
                                        className="form-control"
                                        value={bookingDetails.promoCode}
                                        onChange={(e) => setBookingDetails({ ...bookingDetails, promoCode: e.target.value })}
                                    />
                                    <small className="text-muted">Oberoi One member privileges automatically calculated.</small>
                                </div>

                                <div className="p-3 bg-light mb-4 border">
                                    <div className="d-flex justify-content-between mb-1 small">
                                        <span>Estimated Standard Rate:</span>
                                        <span>INR 38,500</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-1 small text-success">
                                        <span>Oberoi One Member Saving (15%):</span>
                                        <span>- INR 5,775</span>
                                    </div>
                                    <div className="d-flex justify-content-between fw-bold pt-2 border-top">
                                        <span>Net Rate Per Night:</span>
                                        <span style={{ color: '#bfa15f' }}>INR 32,725</span>
                                    </div>
                                </div>

                                <button type="submit" className="book-now-cta-btn">
                                    CONFIRM RESERVATION
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* 2. OBEROI ONE LOGIN / JOIN MODAL */}
            {isLoginOpen && (
                <div className="luxury-modal-backdrop" onClick={() => setIsLoginOpen(false)}>
                    <div className="luxury-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="luxury-modal-close" onClick={() => setIsLoginOpen(false)}>✕</button>

                        <div className="text-center mb-3">
                            <span className="section-eyebrow">GUEST RECOGNITION</span>
                            <h3 className="section-main-title" style={{ fontSize: '26px' }}>Oberoi One</h3>
                            <p className="small text-muted mb-0">Our distinctive guest recognition programme.</p>
                        </div>

                        {/* Tabs */}
                        <div className="d-flex border-bottom mb-4">
                            <button 
                                className={`btn flex-fill rounded-0 py-2 fw-semibold ${loginTab === 'login' ? 'border-bottom border-warning border-3 text-dark' : 'text-muted'}`}
                                onClick={() => setLoginTab('login')}
                            >
                                Member Sign In
                            </button>
                            <button 
                                className={`btn flex-fill rounded-0 py-2 fw-semibold ${loginTab === 'join' ? 'border-bottom border-warning border-3 text-dark' : 'text-muted'}`}
                                onClick={() => setLoginTab('join')}
                            >
                                Join Oberoi One
                            </button>
                        </div>

                        {loginTab === 'login' ? (
                            <form onSubmit={(e) => { e.preventDefault(); alert('Signed in successfully as Oberoi One Member!'); setIsLoginOpen(false); }}>
                                <div className="mb-3">
                                    <label className="booking-label">Email Address</label>
                                    <input type="email" required placeholder="name@example.com" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="booking-label">Password</label>
                                    <input type="password" required placeholder="••••••••" className="form-control" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" defaultChecked />
                                        <label className="form-check-label small" htmlFor="rememberMe">Remember me</label>
                                    </div>
                                    <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('A password reset link has been dispatched to your email.'); }} className="small text-muted">Forgot Password?</a>
                                </div>
                                <button type="submit" className="book-now-cta-btn mb-3">
                                    SIGN IN
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={(e) => { e.preventDefault(); alert('Welcome to Oberoi One! Your membership has been activated with 15% instant savings privilege.'); setIsLoginOpen(false); }}>
                                <div className="row g-2 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">First Name</label>
                                        <input type="text" required placeholder="First Name" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Last Name</label>
                                        <input type="text" required placeholder="Last Name" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="booking-label">Email Address</label>
                                    <input type="email" required placeholder="name@example.com" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="booking-label">Phone Number</label>
                                    <input type="tel" required placeholder="+91 98765 43210" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="booking-label">Create Password</label>
                                    <input type="password" required placeholder="Minimum 8 characters" className="form-control" />
                                </div>
                                <button type="submit" className="book-now-cta-btn mb-3">
                                    COMPLETE REGISTRATION
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* 3. LIVE SEARCH MODAL (Authentic Oberoi Instant Search) */}
            {isSearchOpen && (
                <div className="luxury-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
                    <div className="luxury-modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <span className="section-eyebrow">DISCOVER OBEROI</span>
                                <h3 className="section-main-title mb-0" style={{ fontSize: '24px' }}>Search Hotels &amp; Experiences</h3>
                            </div>
                            <button className="luxury-modal-close" onClick={() => setIsSearchOpen(false)}>✕</button>
                        </div>

                        {/* Search Input Bar */}
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-white border-end-0">
                                <i className="fa-solid fa-magnifying-glass text-muted"></i>
                            </span>
                            <input 
                                type="text" 
                                autoFocus
                                placeholder="Type destination, dining, spa or experience..." 
                                className="form-control border-start-0 py-2"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button 
                                    className="btn btn-outline-secondary border-start-0"
                                    type="button"
                                    onClick={() => setSearchQuery('')}
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        {/* Search Results Filtered in Real Time */}
                        {searchQuery.trim() ? (
                            <div className="search-results-list" style={{ maxHeight: '350px', overflowY: 'auto' }}>
                                <div className="text-muted small mb-2 fw-semibold">
                                    Found {filteredSearchResults.length} matching result{filteredSearchResults.length === 1 ? '' : 's'}:
                                </div>
                                {filteredSearchResults.length > 0 ? (
                                    <div className="d-flex flex-column gap-2">
                                        {filteredSearchResults.map((res, i) => (
                                            <div 
                                                key={i} 
                                                className="p-2 border bg-light d-flex justify-content-between align-items-center rounded-0 hover-lift"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setIsSearchOpen(false)
                                                    navigate(res.path)
                                                }}
                                            >
                                                <div>
                                                    <span className="badge bg-secondary mb-1" style={{ fontSize: '9px', textTransform: 'uppercase' }}>
                                                        {res.category}
                                                    </span>
                                                    <h6 className="mb-0 fw-bold" style={{ color: '#171a2e', fontSize: '14px' }}>{res.name}</h6>
                                                    <small className="text-muted">{res.city} — {res.desc}</small>
                                                </div>
                                                <i className="fa-solid fa-angle-right ms-3" style={{ color: '#bfa15f' }}></i>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-4 text-center text-muted">
                                        <i className="fa-solid fa-compass fs-2 mb-2 text-warning"></i>
                                        <p className="mb-1">No exact matches found for "{searchQuery}".</p>
                                        <small>Try searching for "Agra", "Udaipur", "Dining", "Spa", or "Bali".</small>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="py-2">
                                <span className="text-uppercase fw-semibold text-muted d-block mb-2" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                                    Popular &amp; Recent Searches:
                                </span>
                                <div className="d-flex flex-wrap gap-2">
                                    {[
                                        { name: 'The Oberoi Amarvilas, Agra', path: '/destinations' },
                                        { name: 'The Oberoi Udaivilas, Udaipur', path: '/destinations' },
                                        { name: 'Mewar by Vineet (Dining)', path: '/dining' },
                                        { name: 'Wildflower Hall, Shimla', path: '/destinations' },
                                        { name: 'The Oberoi Beach Resort, Bali', path: '/destinations' },
                                        { name: 'Holistic Spa & Ayurveda', path: '/wellness' },
                                        { name: 'Curated Experiences', path: '/experiences' },
                                        { name: 'Special Offers (15% Savings)', path: '/offers' }
                                    ].map((item, idx) => (
                                        <button 
                                            key={idx} 
                                            className="btn btn-sm btn-light border py-1 px-2"
                                            style={{ fontSize: '12px' }}
                                            onClick={() => {
                                                setIsSearchOpen(false)
                                                navigate(item.path)
                                            }}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* 4. TABLE RESERVATION MODAL (Dining) */}
            {isTableResOpen && (
                <div className="luxury-modal-backdrop" onClick={() => setIsTableResOpen(false)}>
                    <div className="luxury-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="luxury-modal-close" onClick={() => setIsTableResOpen(false)}>✕</button>

                        <div className="text-center mb-3">
                            <span className="section-eyebrow">SIGNATURE DINING</span>
                            <h3 className="section-main-title" style={{ fontSize: '26px' }}>Reserve Your Table</h3>
                            <p className="text-muted small mb-0">{tableResData.restaurant} — {tableResData.hotel}</p>
                        </div>

                        {tableResSuccess ? (
                            <div className="text-center py-4">
                                <div className="mb-3" style={{ fontSize: '48px', color: '#bfa15f' }}>
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}>Table Confirmed</h4>
                                <div className="badge bg-warning text-dark py-2 px-3 my-2" style={{ fontSize: '13px', letterSpacing: '1px' }}>
                                    REFERENCE: {tableResCode}
                                </div>
                                <p className="text-muted small mt-2">
                                    We look forward to welcoming you at <strong>{tableResData.restaurant}</strong> on <strong>{tableResData.date}</strong> at <strong>{tableResData.time}</strong> for {tableResData.guests} guests.
                                </p>
                                <button className="gold-cta-btn mx-auto mt-3 border-0" onClick={() => setIsTableResOpen(false)}>
                                    DONE
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleConfirmTableRes}>
                                <div className="row g-2 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">Reservation Date</label>
                                        <input 
                                            type="date" 
                                            required 
                                            className="form-control form-control-sm"
                                            value={tableResData.date}
                                            onChange={(e) => setTableResData({ ...tableResData, date: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Time Slot</label>
                                        <select 
                                            className="form-select form-select-sm"
                                            value={tableResData.time}
                                            onChange={(e) => setTableResData({ ...tableResData, time: e.target.value })}
                                        >
                                            <optgroup label="Lunch">
                                                <option value="12:30 PM">12:30 PM</option>
                                                <option value="1:15 PM">1:15 PM</option>
                                                <option value="2:00 PM">2:00 PM</option>
                                            </optgroup>
                                            <optgroup label="Dinner">
                                                <option value="7:00 PM">7:00 PM</option>
                                                <option value="7:45 PM">7:45 PM</option>
                                                <option value="8:30 PM">8:30 PM</option>
                                                <option value="9:15 PM">9:15 PM</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>

                                <div className="row g-2 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">Number of Guests</label>
                                        <select 
                                            className="form-select form-select-sm"
                                            value={tableResData.guests}
                                            onChange={(e) => setTableResData({ ...tableResData, guests: Number(e.target.value) })}
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(n => (
                                                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Dietary Preference</label>
                                        <select 
                                            className="form-select form-select-sm"
                                            value={tableResData.dietary}
                                            onChange={(e) => setTableResData({ ...tableResData, dietary: e.target.value })}
                                        >
                                            <option value="Chef Selection">Chef's Signature Selection</option>
                                            <option value="Vegetarian Menu">Royal Vegetarian</option>
                                            <option value="Non-Vegetarian">Royal Non-Vegetarian</option>
                                            <option value="Gluten-Free">Gluten-Free / Allergen Friendly</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row g-2 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">Guest Full Name</label>
                                        <input 
                                            type="text" 
                                            required 
                                            placeholder="Your Name" 
                                            className="form-control form-control-sm"
                                            value={tableResData.name}
                                            onChange={(e) => setTableResData({ ...tableResData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Contact Phone</label>
                                        <input 
                                            type="tel" 
                                            required 
                                            placeholder="+91 98765 43210" 
                                            className="form-control form-control-sm"
                                            value={tableResData.phone}
                                            onChange={(e) => setTableResData({ ...tableResData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="booking-label">Email Address</label>
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="guest@example.com" 
                                        className="form-control form-control-sm"
                                        value={tableResData.email}
                                        onChange={(e) => setTableResData({ ...tableResData, email: e.target.value })}
                                    />
                                </div>

                                <button type="submit" className="book-now-cta-btn">
                                    CONFIRM TABLE RESERVATION
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* 5. REQUEST A PROPOSAL MODAL (Events & Weddings) */}
            {isProposalOpen && (
                <div className="luxury-modal-backdrop" onClick={() => setIsProposalOpen(false)}>
                    <div className="luxury-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="luxury-modal-close" onClick={() => setIsProposalOpen(false)}>✕</button>

                        <div className="text-center mb-3">
                            <span className="section-eyebrow">MEETINGS &amp; CELEBRATIONS</span>
                            <h3 className="section-main-title" style={{ fontSize: '26px' }}>Request a Proposal</h3>
                            <p className="text-muted small mb-0">{proposalData.venue} — {proposalData.hotel}</p>
                        </div>

                        {proposalSuccess ? (
                            <div className="text-center py-4">
                                <div className="mb-3" style={{ fontSize: '48px', color: '#bfa15f' }}>
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}>Proposal Request Logged</h4>
                                <div className="badge bg-warning text-dark py-2 px-3 my-2" style={{ fontSize: '13px', letterSpacing: '1px' }}>
                                    INQUIRY REFERENCE: {proposalCode}
                                </div>
                                <p className="text-muted small mt-2">
                                    Thank you for your interest in hosting your celebration at Oberoi Hotels &amp; Resorts. Our dedicated luxury event specialist will reach out to you within 24 hours with custom floorplans, menus, and proposal quotation.
                                </p>
                                <button className="gold-cta-btn mx-auto mt-3 border-0" onClick={() => setIsProposalOpen(false)}>
                                    DONE
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleConfirmProposal}>
                                <div className="row g-2 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">Event Category</label>
                                        <select 
                                            className="form-select form-select-sm"
                                            value={proposalData.eventType}
                                            onChange={(e) => setProposalData({ ...proposalData, eventType: e.target.value })}
                                        >
                                            <option value="Royal Destination Wedding">Royal Destination Wedding</option>
                                            <option value="High-Level Corporate Summit">High-Level Corporate Summit</option>
                                            <option value="Milestone Gala Celebration">Milestone Gala Celebration</option>
                                            <option value="Executive Boardroom Meeting">Executive Boardroom Meeting</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Tentative Date</label>
                                        <input 
                                            type="date" 
                                            required 
                                            className="form-control form-control-sm"
                                            value={proposalData.date}
                                            onChange={(e) => setProposalData({ ...proposalData, date: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="row g-2 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">Expected Guest Count</label>
                                        <select 
                                            className="form-select form-select-sm"
                                            value={proposalData.guests}
                                            onChange={(e) => setProposalData({ ...proposalData, guests: e.target.value })}
                                        >
                                            <option value="20-50 Guests">20 - 50 Guests</option>
                                            <option value="50-100 Guests">50 - 100 Guests</option>
                                            <option value="100-250 Guests">100 - 250 Guests</option>
                                            <option value="250-600+ Guests">250 - 600+ Guests</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Full Name</label>
                                        <input 
                                            type="text" 
                                            required 
                                            placeholder="Your Name" 
                                            className="form-control form-control-sm"
                                            value={proposalData.name}
                                            onChange={(e) => setProposalData({ ...proposalData, name: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="row g-2 mb-3">
                                    <div className="col-6">
                                        <label className="booking-label">Email</label>
                                        <input 
                                            type="email" 
                                            required 
                                            placeholder="name@example.com" 
                                            className="form-control form-control-sm"
                                            value={proposalData.email}
                                            onChange={(e) => setProposalData({ ...proposalData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="booking-label">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            required 
                                            placeholder="+91 98765 43210" 
                                            className="form-control form-control-sm"
                                            value={proposalData.phone}
                                            onChange={(e) => setProposalData({ ...proposalData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="booking-label">Additional Event Requirements</label>
                                    <textarea 
                                        rows="2" 
                                        placeholder="Catering, entertainment, audio-visual, luxury suite blocks..."
                                        className="form-control form-control-sm"
                                        value={proposalData.requirements}
                                        onChange={(e) => setProposalData({ ...proposalData, requirements: e.target.value })}
                                    ></textarea>
                                </div>

                                <button type="submit" className="book-now-cta-btn">
                                    SUBMIT PROPOSAL REQUEST
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* 6. CONTACT US MODAL */}
            {isContactOpen && (
                <div className="luxury-modal-backdrop" onClick={() => setIsContactOpen(false)}>
                    <div className="luxury-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="luxury-modal-close" onClick={() => setIsContactOpen(false)}>✕</button>

                        <div className="text-center mb-4">
                            <span className="section-eyebrow">24X7 ASSISTANCE</span>
                            <h3 className="section-main-title" style={{ fontSize: '26px' }}>Contact Oberoi Hotels</h3>
                        </div>

                        <div className="p-3 bg-light mb-4 border">
                            <div className="d-flex align-items-center mb-2">
                                <i className="fa-solid fa-phone me-3 fs-5" style={{ color: '#bfa15f' }}></i>
                                <div>
                                    <div className="fw-semibold">Global Reservations Toll-Free:</div>
                                    <div className="fs-6 fw-bold" style={{ color: '#171a2e' }}>+91-11-6911-0606 / 1800-11-2030</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-envelope me-3 fs-5" style={{ color: '#bfa15f' }}></i>
                                <div>
                                    <div className="fw-semibold">Email Reservations:</div>
                                    <div className="small text-muted">reservations@oberoihotels.com</div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); alert('Thank you. Your message has been sent to our guest relations team.'); setIsContactOpen(false); }}>
                            <div className="mb-3">
                                <label className="booking-label">Your Name</label>
                                <input type="text" required placeholder="Full Name" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="booking-label">Your Email</label>
                                <input type="email" required placeholder="name@example.com" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="booking-label">Enquiry Details</label>
                                <textarea required rows="3" placeholder="Tell us how we may assist you..." className="form-control"></textarea>
                            </div>
                            <button type="submit" className="book-now-cta-btn">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* 7. LIVE CONCIERGE CHAT WINDOW */}
            {isChatOpen && (
                <div 
                    className="position-fixed shadow-lg bg-white border animate__animated animate__fadeInUp"
                    style={{
                        bottom: '85px',
                        right: '25px',
                        width: '360px',
                        height: '460px',
                        zIndex: 1050,
                        borderRadius: '4px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div className="p-3 text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: '#171a2e' }}>
                        <div>
                            <span className="fw-bold d-block" style={{ fontSize: '13px' }}>Oberoi Concierge</span>
                            <small className="text-white-50" style={{ fontSize: '11px' }}>● Online 24/7 Concierge</small>
                        </div>
                        <button 
                            onClick={() => setIsChatOpen(false)} 
                            className="btn btn-sm text-white p-0 border-0"
                            style={{ fontSize: '16px' }}
                            aria-label="Close Chat"
                        >✕</button>
                    </div>

                    <div className="p-3 flex-grow-1 overflow-auto" style={{ backgroundColor: '#f9f9f9', fontSize: '13px' }}>
                        {chatMessages.map((msg, i) => (
                            <div 
                                key={i} 
                                className={`p-2 mb-2 rounded shadow-sm ${msg.sender === 'user' ? 'bg-dark text-white ms-auto text-end' : 'bg-white'}`}
                                style={{ 
                                    maxWidth: '85%',
                                    borderLeft: msg.sender === 'bot' ? '3px solid #bfa15f' : 'none'
                                }}
                            >
                                <p className="mb-0" style={{ fontSize: '12.5px' }}>{msg.text}</p>
                                <small className={msg.sender === 'user' ? 'text-white-50' : 'text-muted'} style={{ fontSize: '9px' }}>{msg.time}</small>
                            </div>
                        ))}

                        <div className="mt-3">
                            <span className="small text-muted d-block mb-1" style={{ fontSize: '11px' }}>Suggested Inquiries:</span>
                            <div className="d-flex flex-column gap-1">
                                <button 
                                    className="btn btn-sm btn-outline-secondary text-start py-1 px-2"
                                    style={{ fontSize: '11.5px' }}
                                    onClick={() => { setIsChatOpen(false); openBookingModal(); }}
                                >
                                    <i className="fa-solid fa-calendar-check me-2" style={{ color: '#bfa15f' }}></i>
                                    Check Room Availability
                                </button>
                                <button 
                                    className="btn btn-sm btn-outline-secondary text-start py-1 px-2"
                                    style={{ fontSize: '11.5px' }}
                                    onClick={() => { setIsChatOpen(false); setIsLoginOpen(true); }}
                                >
                                    <i className="fa-solid fa-star me-2" style={{ color: '#bfa15f' }}></i>
                                    Oberoi One 15% Savings
                                </button>
                                <button 
                                    className="btn btn-sm btn-outline-secondary text-start py-1 px-2"
                                    style={{ fontSize: '11.5px' }}
                                    onClick={() => { setIsChatOpen(false); navigate('/dining'); }}
                                >
                                    <i className="fa-solid fa-utensils me-2" style={{ color: '#bfa15f' }}></i>
                                    Signature Dining &amp; Tables
                                </button>
                                <button 
                                    className="btn btn-sm btn-outline-secondary text-start py-1 px-2"
                                    style={{ fontSize: '11.5px' }}
                                    onClick={() => { setIsChatOpen(false); navigate('/contact'); }}
                                >
                                    <i className="fa-solid fa-phone me-2" style={{ color: '#bfa15f' }}></i>
                                    Speak with Reservations
                                </button>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSendMessage} className="p-2 border-top bg-white d-flex gap-2">
                        <input 
                            type="text" 
                            placeholder="Ask concierge a question..." 
                            className="form-control form-control-sm"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                        />
                        <button type="submit" className="btn btn-sm" style={{ backgroundColor: '#bfa15f', color: '#fff' }}>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    )
}

export default App