import { useState } from 'react'
import d1 from '../assets/img/dining1.webp'
import d2 from '../assets/img/dining2.webp'
import d3 from '../assets/img/dining3.webp'
import d4 from '../assets/img/dining4.webp'
import d5 from '../assets/img/dining5.webp'
import d6 from '../assets/img/dining6.webp'
import d7 from '../assets/img/dining7.webp'
import d8 from '../assets/img/dining8.webp'
import d9 from '../assets/img/dining9.webp'
import d10 from '../assets/img/dining10.webp'

const ALL_RESTAURANTS = [
    {
        id: 'mewar',
        name: 'Mewar by Vineet',
        hotel: 'The Oberoi Udaivilas',
        city: 'Udaipur, Rajasthan',
        cuisine: 'Reimagined Indian Heritage',
        chef: 'Mentored by Michelin-starred Chef Vineet Bhatia MBE',
        desc: 'Drawing inspiration from regional Mewari royal households to rustic rural kitchens, reimagining age-old royal recipes with contemporary Michelin-level finesse and lakeside charm.',
        timings: 'Lunch: 12:30 PM – 3:00 PM | Dinner: 7:00 PM – 11:00 PM',
        img: d1
    },
    {
        id: 'madamchow',
        name: 'Madam Chow',
        hotel: 'The Oberoi, Gurgaon',
        city: 'NCR New Delhi',
        cuisine: 'Cantonese & Sichuan Gastronomy',
        chef: 'Master Chinese Culinary Artisans',
        desc: 'Celebrates China’s rich regional culinary culture, showcasing masterful dim sum, wok-fired delicacies, Peking duck, and intricate Sichuan flavors in a dramatic contemporary pavilion.',
        timings: 'Lunch: 12:00 PM – 3:30 PM | Dinner: 7:00 PM – 11:30 PM',
        img: d2
    },
    {
        id: 'lordvesper',
        name: 'Lord Vesper',
        hotel: 'The Oberoi, Gurgaon',
        city: 'NCR New Delhi',
        cuisine: 'Craft Cocktails & Global Tapas',
        chef: 'Master Mixologists',
        desc: 'A high-energy bar that redefines evenings with artisanal cocktails, rare single malts, international tapas, and live DJ sets alongside our peaceful water reflection bodies.',
        timings: 'Open Daily: 5:00 PM – 1:00 AM',
        img: d3
    },
    {
        id: 'dhilli',
        name: 'Dhilli',
        hotel: 'The Oberoi, New Delhi',
        city: 'New Delhi',
        cuisine: 'Iconic Delhi Heritage Flavours',
        chef: 'Chef Vineet Bhatia MBE',
        desc: 'Mentored by Michelin-starred Chef Vineet Bhatia, Dhilli pays homage to the legendary food lanes of Chandni Chowk, Jama Masjid, Nizamuddin, and CR Park.',
        timings: 'Dinner: 7:00 PM – 11:30 PM',
        img: d4
    },
    {
        id: 'eaubar',
        name: 'Eau Bar',
        hotel: 'The Oberoi, Mumbai',
        city: 'Marine Drive, Mumbai',
        cuisine: 'Cocktail Lounge & Global Bites',
        chef: 'Resident Sommelier & Mixologist',
        desc: 'With art-deco themed interiors, an open-air deck, sweeping panoramic ocean views, exclusive craft cocktails, and sunset jazz overlooking the Queen’s Necklace.',
        timings: 'Open Daily: 5:00 PM – 1:30 AM',
        img: d5
    },
    {
        id: 'wabisabi',
        name: 'Wabi Sabi',
        hotel: 'The Oberoi, Bengaluru',
        city: 'Bengaluru, Karnataka',
        cuisine: 'Contemporary Japanese & Sushi',
        chef: 'Expatriate Japanese Master Chef',
        desc: 'Honouring the Japanese philosophy of organic beauty. Features live sushi and sashimi bars, teppanyaki grills, and robatayaki amidst a soothing waterfall soundscape.',
        timings: 'Lunch: 12:30 PM – 3:00 PM | Dinner: 7:00 PM – 11:00 PM',
        img: d6
    },
    {
        id: 'rivayat',
        name: 'Rivayat',
        hotel: 'The Oberoi, Marrakech',
        city: 'Marrakech, Morocco',
        cuisine: 'Fine Indian Dining in North Africa',
        chef: 'Michelin-starred Chef Rohit Ghai',
        desc: 'An ode to India’s grand culinary traditions refined to unprecedented levels by Chef Rohit Ghai in an Andalusian courtyard palace setting overlooking citrus groves.',
        timings: 'Dinner: 7:30 PM – 11:00 PM',
        img: d7
    },
    {
        id: 'travertino',
        name: 'Travertino',
        hotel: 'The Oberoi, New Delhi',
        city: 'New Delhi',
        cuisine: 'Authentic Italian Gastronomy',
        chef: 'Chef de Cuisine from Rome',
        desc: 'Classic Italian dishes prepared using seasonal produce sourced directly from Italy, paired with an extensive collection of rare vintage wines.',
        timings: 'Lunch: 12:30 PM – 3:00 PM | Dinner: 7:00 PM – 11:30 PM',
        img: d8
    },
    {
        id: 'threesixtyone',
        name: 'threesixtyone°',
        hotel: 'The Oberoi, Gurgaon',
        city: 'NCR New Delhi',
        cuisine: 'Multi-Cuisine Theater Kitchen',
        chef: 'Five Live Show Kitchens',
        desc: 'An expansive culinary theater showcasing Japanese, Chinese, Indian, and Italian cuisines with uninterrupted views of a tranquil 36,000 sq ft water body.',
        timings: 'All Day Dining: 6:30 AM – 11:30 PM',
        img: d9
    },
    {
        id: 'baanthai',
        name: 'Baan Thai',
        hotel: 'The Oberoi Grand, Kolkata',
        city: 'Kolkata, West Bengal',
        cuisine: 'Royal Thai Cuisine',
        chef: 'Native Master Thai Chefs',
        desc: 'Kolkata’s legendary destination for authentic royal Thai gastronomy served in an opulent setting adorned with carved teakwood and Thai antiques.',
        timings: 'Lunch: 12:30 PM – 3:00 PM | Dinner: 7:00 PM – 11:30 PM',
        img: d10
    }
]

const DiningPage = ({ onOpenBooking }) => {
    const [selectedCuisine, setSelectedCuisine] = useState('all')

    const filteredRestaurants = ALL_RESTAURANTS.filter(r => {
        if (selectedCuisine === 'all') return true
        if (selectedCuisine === 'indian') return r.cuisine.toLowerCase().includes('indian')
        if (selectedCuisine === 'asian') return r.cuisine.toLowerCase().includes('cantonese') || r.cuisine.toLowerCase().includes('japanese') || r.cuisine.toLowerCase().includes('thai')
        if (selectedCuisine === 'bars') return r.cuisine.toLowerCase().includes('cocktail') || r.cuisine.toLowerCase().includes('bar')
        if (selectedCuisine === 'international') return r.cuisine.toLowerCase().includes('italian') || r.cuisine.toLowerCase().includes('multi-cuisine')
        return true
    })

    return (
        <div className="dining-page-wrapper">
            {/* Page Hero Header */}
            <div className="py-5 bg-dark text-white text-center position-relative" style={{ backgroundColor: '#171a2e' }}>
                <div className="container py-4">
                    <span className="section-eyebrow" style={{ color: '#bfa15f' }}>CULINARY DISTINCTION</span>
                    <h1 className="big-text text-white display-5 mb-3">Signature Dining & Bars</h1>
                    <p className="mx-auto text-white-50" style={{ maxWidth: '750px', fontSize: '15px', lineHeight: '1.8' }}>
                        Exceptional gastronomic journeys curated by Michelin-starred culinary mentors, paired with legendary wines and unforgettable palace and oceanfront views.
                    </p>
                </div>
            </div>

            {/* Filter Navigation */}
            <div className="container-fluid px-lg-5 px-3 py-3 border-bottom bg-white sticky-top" style={{ top: '65px', zIndex: 990 }}>
                <div className="d-flex gap-2 flex-wrap justify-content-center">
                    {[
                        { key: 'all', label: 'All Restaurants & Bars' },
                        { key: 'indian', label: 'Indian Fine Dining' },
                        { key: 'asian', label: 'Pan-Asian & Japanese' },
                        { key: 'bars', label: 'Bars & Cocktail Lounges' },
                        { key: 'international', label: 'Italian & Multi-Cuisine' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            className={`btn btn-sm px-3 py-2 rounded-0 ${selectedCuisine === tab.key ? 'btn-dark' : 'btn-outline-secondary'}`}
                            style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', borderColor: selectedCuisine === tab.key ? '#bfa15f' : '#ccc' }}
                            onClick={() => setSelectedCuisine(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Restaurants Grid */}
            <div className="container-fluid px-lg-5 px-3 py-5">
                <div className="row g-4">
                    {filteredRestaurants.map(item => (
                        <div key={item.id} className="col-lg-6">
                            <div className="card h-100 border rounded-0 shadow-sm overflow-hidden flex-md-row">
                                <div className="col-md-5 slider-zoom" style={{ minHeight: '260px' }}>
                                    <img src={item.img} alt={item.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <span className="text-uppercase fw-semibold" style={{ fontSize: '10.5px', color: '#bfa15f', letterSpacing: '1.5px' }}>
                                            {item.cuisine}
                                        </span>
                                        <h3 className="card-title-text mt-1 mb-1" style={{ fontSize: '22px' }}>
                                            {item.name}
                                        </h3>
                                        <p className="text-muted small fw-semibold mb-2">
                                            {item.hotel}, {item.city}
                                        </p>
                                        <p className="card-body-text mb-2" style={{ fontSize: '12.5px', lineHeight: '1.6' }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pt-3 border-top mt-2 d-flex justify-content-between align-items-center">
                                        <button
                                            onClick={() => onOpenBooking && onOpenBooking({ hotelName: `${item.name} at ${item.hotel}` })}
                                            className="book1-btn py-1 px-3"
                                            style={{ fontSize: '11px' }}
                                        >
                                            RESERVE TABLE
                                        </button>
                                        <small className="text-muted" style={{ fontSize: '11px' }}>
                                            <i className="fa-regular fa-clock me-1"></i> Lunch & Dinner
                                        </small>
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

export default DiningPage
