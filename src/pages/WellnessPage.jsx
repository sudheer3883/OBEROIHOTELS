import w1 from '../assets/img/well1.webp'
import w2 from '../assets/img/well2.webp'
import w3 from '../assets/img/well3.webp'
import w4 from '../assets/img/well4.webp'
import w5 from '../assets/img/well5.webp'

const WELLNESS_PROGRAMMES = [
    {
        title: 'The Oberoi Signature Therapy',
        category: 'HOLISTIC RESTORATION',
        duration: '90 / 120 Minutes',
        desc: 'Our bespoke signature experience harmonises warm herbal oil massages, tension-releasing pressure points, and restorative sound bowl vibrations to bring total balance to body, mind, and spirit.',
        benefits: 'Alleviates fatigue, enhances circulation, calms the nervous system.',
        img: w1
    },
    {
        title: 'Traditional Ayurvedic Abhyanga',
        category: 'ANCIENT INDIAN HEALING',
        duration: '60 / 90 Minutes',
        desc: 'A synchronized full-body massage using warm medicinal sesame oils blended with indigenous Himalayan herbs, working deep into tissues to flush toxins and promote longevity.',
        benefits: 'Detoxification, joint mobility, deep relaxation.',
        img: w2
    },
    {
        title: 'Aromatherapy & Sensory Journey',
        category: 'ESSENTIAL BOTANICAL OILS',
        duration: '75 Minutes',
        desc: 'Custom-blended pure floral and botanical extracts selected specifically according to your personal dosha, soothing stress and replenishing spiritual vital energy.',
        benefits: 'Emotional serenity, deep sleep enhancement, skin hydration.',
        img: w3
    },
    {
        title: 'Revitalising Botanical Facial',
        category: 'NATURAL CELLULAR RADIANCE',
        duration: '60 Minutes',
        desc: 'Utilising certified organic botanical extracts, soothing jade roller contouring, and cold-pressed floral infusions to deeply hydrate, firm, and brighten the skin.',
        benefits: 'Restores skin elasticity, lymphatic drainage, radiant glow.',
        img: w4
    },
    {
        title: 'Himalayan Yoga & Meditation',
        category: 'PRANAYAMA & MINDFULNESS',
        duration: '60 Minutes',
        desc: 'Personalised one-on-one yoga classes in open-air garden pavilions guided by resident masters, encompassing restorative asanas, breathing techniques, and guided meditation.',
        benefits: 'Mental clarity, postural alignment, inner tranquility.',
        img: w5
    }
]

const WellnessPage = ({ onOpenBooking }) => {
    return (
        <div className="wellness-page-wrapper">
            {/* Page Hero Header */}
            <div className="py-5 bg-dark text-white text-center position-relative" style={{ backgroundColor: '#171a2e' }}>
                <div className="container py-4">
                    <span className="section-eyebrow" style={{ color: '#bfa15f' }}>SANCTUARY OF SERENITY</span>
                    <h1 className="big-text text-white display-5 mb-3">Oberoi Spa & Wellness</h1>
                    <p className="mx-auto text-white-50" style={{ maxWidth: '750px', fontSize: '15px', lineHeight: '1.8' }}>
                        Step into a haven of tranquility where ancient Ayurvedic wisdom, international therapies, and peaceful natural surroundings nurture your holistic well-being.
                    </p>
                </div>
            </div>

            {/* Philosophy Banner */}
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <span className="section-eyebrow">OUR WELLNESS PHILOSOPHY</span>
                        <h2 className="big-text display-6 mb-3">Rejuvenate Body, Mind & Soul</h2>
                        <p className="card-body-text" style={{ fontSize: '14.5px', lineHeight: '1.8' }}>
                            At Oberoi Hotels & Resorts, wellness is more than a spa treatment; it is an intuitive journey of mindful living. Our therapists are trained at the prestigious Oberoi Spa Academy, mastering both traditional Eastern healing and contemporary Western therapies.
                        </p>
                        <p className="card-body-text" style={{ fontSize: '14.5px', lineHeight: '1.8' }}>
                            Every treatment begins with a personal lifestyle consultation to tailor herbal oils, pressure techniques, and sensory ambience specifically to your needs.
                        </p>
                        <div className="d-flex gap-3 pt-2">
                            <button
                                onClick={() => onOpenBooking && onOpenBooking({ hotelName: 'Oberoi Spa Consultation' })}
                                className="book1-btn py-2 px-4"
                            >
                                BOOK SPA JOURNEY
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="slider-zoom shadow-sm">
                            <img src={w1} alt="Oberoi Spa Philosophy" className="w-100" style={{ height: '360px', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Therapies Grid */}
            <div className="bg-light py-5">
                <div className="container-fluid px-lg-5 px-3">
                    <div className="text-center mb-5">
                        <span className="section-eyebrow">CURATED THERAPIES</span>
                        <h2 className="big-text display-6">Signature Spa Treatments</h2>
                    </div>

                    <div className="row g-4">
                        {WELLNESS_PROGRAMMES.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="card h-100 border-0 rounded-0 shadow-sm overflow-hidden bg-white">
                                    <div className="slider-zoom" style={{ height: '240px' }}>
                                        <img src={item.img} alt={item.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className="text-uppercase fw-semibold" style={{ fontSize: '10.5px', color: '#bfa15f', letterSpacing: '1px' }}>
                                                    {item.category}
                                                </span>
                                                <span className="badge bg-light text-dark border fw-normal" style={{ fontSize: '11px' }}>
                                                    {item.duration}
                                                </span>
                                            </div>
                                            <h3 className="card-title-text mt-1 mb-2" style={{ fontSize: '20px' }}>
                                                {item.title}
                                            </h3>
                                            <p className="card-body-text mb-3" style={{ fontSize: '13px' }}>
                                                {item.desc}
                                            </p>
                                            <div className="p-2 bg-light rounded-0 mb-3" style={{ borderLeft: '2px solid #bfa15f' }}>
                                                <small className="text-muted d-block fw-semibold" style={{ fontSize: '11px' }}>KEY BENEFITS:</small>
                                                <small className="text-dark" style={{ fontSize: '12px' }}>{item.benefits}</small>
                                            </div>
                                        </div>
                                        <div className="pt-2 border-top">
                                            <button
                                                onClick={() => onOpenBooking && onOpenBooking({ hotelName: `Spa Treatment: ${item.title}` })}
                                                className="btn btn-outline-dark w-100 py-2 rounded-0 fw-semibold"
                                                style={{ fontSize: '11.5px', letterSpacing: '1.5px', textTransform: 'uppercase' }}
                                            >
                                                SCHEDULE APPOINTMENT
                                            </button>
                                        </div>
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

export default WellnessPage
