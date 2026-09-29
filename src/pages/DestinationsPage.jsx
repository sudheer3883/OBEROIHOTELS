import { useState } from 'react'
import h1 from '../assets/img/homes1.webp'
import h2 from '../assets/img/homes2.webp'
import h3 from '../assets/img/homes3.webp'
import h4 from '../assets/img/homes4.webp'
import h5 from '../assets/img/homes5.webp'
import h6 from '../assets/img/homes6.webp'
import h7 from '../assets/img/homes7.jpg'
import h8 from '../assets/img/homes8.webp'
import h9 from '../assets/img/homes9.webp'
import h10 from '../assets/img/homes10.webp'

const ALL_DESTINATIONS = [
    {
        id: 'amarvilas',
        country: 'india',
        name: 'The Oberoi Amarvilas',
        city: 'Agra',
        state: 'Uttar Pradesh',
        highlight: 'Uninterrupted Taj Mahal Views from Every Room',
        desc: 'Inspired by Mughal palace designs with fountains, terraced lawns, reflection pools and pavilions, the resort offers unrestricted views of the Taj Mahal just 600 metres away.',
        img: h1
    },
    {
        id: 'udaivilas',
        country: 'india',
        name: 'The Oberoi Udaivilas',
        city: 'Udaipur',
        state: 'Rajasthan',
        highlight: 'Palace Resort on the Banks of Lake Pichola',
        desc: 'Set on the tranquil banks of Lake Pichola, this palace retreat captures the romance and grandeur of Rajasthan with hand-painted domes, reflection pools, and peacocks on expansive lawns.',
        img: h10
    },
    {
        id: 'rajvilas',
        country: 'india',
        name: 'The Oberoi Rajvilas',
        city: 'Jaipur',
        state: 'Rajasthan',
        highlight: 'Royal Fort Setting with Luxury Tents & Villas',
        desc: 'Recreating princely Rajasthan in a beautiful 32-acre fort setting with lush gardens, tranquil reflection pools, and 280-year-old Shiva temple.',
        img: h5
    },
    {
        id: 'wildflower',
        country: 'india',
        name: 'Wildflower Hall, An Oberoi Resort',
        city: 'Shimla',
        state: 'Himachal Pradesh',
        highlight: 'Alpine Romance at 8,250 Feet in Cedar Forests',
        desc: 'Former residence of Lord Kitchener, set within 23 acres of fragrant cedar forest with magnificent views of the snow-capped Himalayan ranges and an outdoor heated infinity whirlpool.',
        img: h8
    },
    {
        id: 'sukhvilas',
        country: 'india',
        name: 'The Oberoi Sukhvilas',
        city: 'New Chandigarh',
        state: 'Punjab',
        highlight: 'Ayurvedic Wellness Retreat in Siswan Forest',
        desc: 'A tranquil sanctuary surrounded by over 8,000 acres of protected natural forest at the Himalayan foothills, offering personalized Ayurvedic rejuvenation programmes.',
        img: h4
    },
    {
        id: 'vindhyavilas',
        country: 'india',
        name: 'The Oberoi Vindhyavilas Wildlife Resort',
        city: 'Bandhavgarh',
        state: 'Madhya Pradesh',
        highlight: 'Wilderness Luxury at the Heart of Tiger Country',
        desc: 'An oasis of luxury nestled in Madhya Pradesh and surrounded by the serene wilderness, offering private safari jeeps and naturalists for Bengal tiger expeditions.',
        img: h2
    },
    {
        id: 'bengaluru',
        country: 'india',
        name: 'The Oberoi, Bengaluru',
        city: 'Bengaluru',
        state: 'Karnataka',
        highlight: 'Centenary Rain Trees & Lush Tropical Gardens',
        desc: 'Nestled in lush, tropical grounds on MG Road, equipped with state-of-the-art technology, harmonising Bengaluru\'s dual personality as the Garden City and India\'s technology capital.',
        img: h3
    },
    {
        id: 'gurgaon',
        country: 'india',
        name: 'The Oberoi, Gurgaon',
        city: 'Gurgaon',
        state: 'NCR Delhi',
        highlight: 'Striking Contemporary Architecture & Water Bodies',
        desc: 'A striking example of contemporary design minutes from Delhi international airport, offering a serene sense of calm with 36,000 sq ft reflecting pool and vertical green gardens.',
        img: h4
    },
    {
        id: 'mumbai',
        country: 'india',
        name: 'The Oberoi, Mumbai',
        city: 'Mumbai',
        state: 'Maharashtra',
        highlight: 'Marine Drive Waterfront & Ocean Views',
        desc: 'Located on fashionable Marine Drive in South Mumbai, enjoying an enviable location close to corporate hubs, cultural landmarks, and high-end shopping destinations.',
        img: h9
    },
    {
        id: 'naila',
        country: 'india',
        name: 'Naila Fort, An Oberoi Luxury Residence',
        city: 'Jaipur',
        state: 'Rajasthan',
        highlight: 'Exclusive 4-Bedroom Royal Heritage Fort',
        desc: 'An intimate royal retreat rooted in Rajasthan\'s heritage high in the Aravalli Ranges, offered exclusively for private family stays and bespoke buyouts.',
        img: h6
    },
    {
        id: 'rajgarh',
        country: 'india',
        name: 'The Oberoi Rajgarh Palace',
        city: 'Khajuraho',
        state: 'Madhya Pradesh',
        highlight: '350-Year-Old Historic Bundelkhand Palace',
        desc: 'Perched atop the Maniyargh Hills near the UNESCO temples of Khajuraho, adorned with vaulted arches and rare 17th-century frescoes.',
        img: h7
    },
    {
        id: 'sahlhasheesh',
        country: 'egypt',
        name: 'The Oberoi Beach Resort, Sahl Hasheesh',
        city: 'Hurghada',
        state: 'Red Sea, Egypt',
        highlight: 'All-Suite Red Sea Resort with Private Coral Reef',
        desc: 'Nestled along the shores of the Red Sea with traditional Arabic domes, courtyards, and direct access to protected coral gardens.',
        img: h1
    },
    {
        id: 'philae',
        country: 'egypt',
        name: 'The Oberoi Philae, Luxury Nile Cruiser',
        city: 'Luxor - Aswan',
        state: 'River Nile, Egypt',
        highlight: 'Bespoke 4 & 6-Night Historical Nile Cruises',
        desc: 'Cruise along the River Nile on this award-winning luxury vessel and discover the secrets of ancient Egypt from the Valley of the Kings to Philae Temple.',
        img: h2
    },
    {
        id: 'bali',
        country: 'indonesia',
        name: 'The Oberoi Beach Resort, Bali',
        city: 'Seminyak',
        state: 'Bali, Indonesia',
        highlight: 'Beachfront Thatched Lanai Villas & Sunsets',
        desc: 'Located directly on Seminyak Beach set within 15 acres of tropical gardens, featuring a natural amphitheatre for Balinese dance performances.',
        img: h4
    },
    {
        id: 'lombok',
        country: 'indonesia',
        name: 'The Oberoi Beach Resort, Lombok',
        city: 'Medana Bay',
        state: 'Lombok, Indonesia',
        highlight: 'Tranquil Medana Bay Island Escape',
        desc: 'Set on the peaceful shores of Medana Bay across from the Gili Islands, where infinity pools blend seamlessly into crystal turquoise ocean waters.',
        img: h5
    },
    {
        id: 'mauritius',
        country: 'mauritius',
        name: 'The Oberoi Beach Resort, Mauritius',
        city: 'Turtle Bay',
        state: 'Pointe Aux Piments, Mauritius',
        highlight: 'Natural Marine Park & Sunset Pavilions',
        desc: 'Spread over 20 acres of lush sub-tropical garden on the white sandy shores of Turtle Bay with dramatic sunset vistas and sunken marble baths.',
        img: h6
    },
    {
        id: 'marrakech',
        country: 'morocco',
        name: 'The Oberoi, Marrakech',
        city: 'Marrakech',
        state: 'Morocco',
        highlight: 'Citrus Groves & Andalusian Palace Architecture',
        desc: 'Set within 28 acres of Mediterranean orchards and centuries-old olive groves with grand courtyard views of the snow-peaked Atlas Mountains.',
        img: h7
    }
]

const DestinationsPage = ({ onOpenBooking }) => {
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredDestinations = ALL_DESTINATIONS.filter(item => {
        const matchesCountry = selectedFilter === 'all' || item.country === selectedFilter
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.desc.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCountry && matchesSearch
    })

    return (
        <div className="destinations-page-wrapper">
            {/* Page Hero Header */}
            <div className="py-5 bg-dark text-white text-center position-relative" style={{ backgroundColor: '#171a2e' }}>
                <div className="container py-4">
                    <span className="section-eyebrow" style={{ color: '#bfa15f' }}>EXPLORE OUR WORLD</span>
                    <h1 className="big-text text-white display-5 mb-3">Destinations & Luxury Resorts</h1>
                    <p className="mx-auto text-white-50" style={{ maxWidth: '750px', fontSize: '15px', lineHeight: '1.8' }}>
                        Experience the signature Oberoi service in majestic palaces, serene beachfronts, and alpine mountain sanctuaries across India, Egypt, Indonesia, Mauritius, and Morocco.
                    </p>
                </div>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="container-fluid px-lg-5 px-3 py-4 border-bottom bg-white sticky-top" style={{ top: '65px', zIndex: 990 }}>
                <div className="row align-items-center g-3">
                    <div className="col-lg-8">
                        <div className="d-flex gap-2 flex-wrap">
                            {[
                                { key: 'all', label: 'All Destinations' },
                                { key: 'india', label: 'India' },
                                { key: 'egypt', label: 'Egypt' },
                                { key: 'indonesia', label: 'Indonesia' },
                                { key: 'mauritius', label: 'Mauritius' },
                                { key: 'morocco', label: 'Morocco' }
                            ].map(tab => (
                                <button
                                    key={tab.key}
                                    className={`btn btn-sm px-3 py-2 rounded-0 ${selectedFilter === tab.key ? 'btn-dark' : 'btn-outline-secondary'}`}
                                    style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', borderColor: selectedFilter === tab.key ? '#bfa15f' : '#ccc' }}
                                    onClick={() => setSelectedFilter(tab.key)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <i className="fa-solid fa-magnifying-glass text-muted"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Search by hotel or city..."
                                className="form-control form-control-sm border-start-0"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Destinations Grid */}
            <div className="container-fluid px-lg-5 px-3 py-5">
                <div className="row g-4">
                    {filteredDestinations.map(hotel => (
                        <div key={hotel.id} className="col-lg-4 col-md-6">
                            <div className="card h-100 border rounded-0 shadow-sm overflow-hidden">
                                <div className="slider-zoom position-relative" style={{ height: '260px' }}>
                                    <img src={hotel.img} alt={hotel.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    <span className="position-absolute bottom-0 start-0 m-3 px-2 py-1 bg-dark bg-opacity-75 text-white small" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                                        {hotel.city}, {hotel.state}
                                    </span>
                                </div>
                                <div className="card-body p-4 d-flex flex-column">
                                    <span className="text-uppercase fw-semibold" style={{ fontSize: '11px', color: '#bfa15f', letterSpacing: '1px' }}>
                                        {hotel.highlight}
                                    </span>
                                    <h3 className="card-title-text mt-1 mb-2" style={{ fontSize: '22px' }}>
                                        {hotel.name}
                                    </h3>
                                    <p className="card-body-text flex-grow-1" style={{ fontSize: '13px' }}>
                                        {hotel.desc}
                                    </p>
                                    <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                                        <button
                                            onClick={() => onOpenBooking && onOpenBooking({ hotelName: `${hotel.name}, ${hotel.city}` })}
                                            className="book1-btn py-2 px-3"
                                            style={{ fontSize: '11px' }}
                                        >
                                            BOOK NOW
                                        </button>
                                        <span className="text-muted small">From INR 35,000/night</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredDestinations.length === 0 && (
                        <div className="col-12 text-center py-5">
                            <i className="fa-solid fa-hotel fs-1 text-muted mb-3"></i>
                            <h4>No destinations match your search.</h4>
                            <button className="btn btn-outline-dark mt-2" onClick={() => { setSelectedFilter('all'); setSearchQuery(''); }}>
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DestinationsPage
