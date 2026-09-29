import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ onOpenBooking }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="footer-bg pt-5 pb-4">
      <div className="container-fluid px-lg-5 px-3">
        <div className="row g-4 mb-4">
          {/* Column 1: About Us */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-column-heading">About Us</h5>
            <div className="footer-link">
              <Link to="/">Our Story</Link>
              <Link to="/experiences">From The Heart</Link>
              <Link to="/awards">Awards & Recognition</Link>
              <Link to="/contact">Careers at Oberoi</Link>
              <Link to="/contact">Contact Us</Link>
              <a href="#ocld">Oberoi Centre of Learning & Development</a>
              <a href="#social-responsibility">Social Responsibility</a>
              <a href="https://nidhi.tourism.gov.in/" target="_blank" rel="noreferrer">
                NIDHI - Ministry of Tourism Initiative
              </a>
            </div>
          </div>

          {/* Column 2: More Programmes */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-column-heading">More Programmes</h5>
            <div className="footer-link">
              <a href="#best-rate">Best Rate Guarantee</a>
              <a href="#oberoi-select">Oberoi Select Pre-purchase</a>
              <a href="#giftwrapped">Giftwrapped Experiences</a>
              <a href="#concours">The Oberoi Concours d’Elegance</a>
              <a href="#coucou">COU COU by Oberoi</a>
              <a href="#amadeo">Amadeo by Oberoi</a>
              <a href="#aviation">Oberoi Aviation</a>
              <a href="https://cbt.synxis.com/?chainId=24188" target="_blank" rel="noreferrer">
                Partner Login
              </a>
              <a href="#connections">Oberoi Connections Programme</a>
            </div>
          </div>

          {/* Column 3: News & Media */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-column-heading">News & Media</h5>
            <div className="footer-link">
              <a href="#press">Press Room</a>
              <a href="#upcoming">Upcoming Hotels & Resorts</a>
              <a href="#news">News and Media Releases</a>
              <a href="#magazine">The Oberoi Group Magazine</a>
              <a href="#booking" onClick={(e) => { e.preventDefault(); if (onOpenBooking) onOpenBooking(); }}>
                Manage Reservations
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-column-heading">Subscribe</h5>
            <p className="text-white-50" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              Discover the latest stories, seasonal privileges, and inspirations from our world, delivered right to your inbox.
            </p>

            {subscribed ? (
              <div className="alert alert-success py-2 px-3 mb-3" style={{ fontSize: '12px', background: 'rgba(191, 161, 95, 0.2)', borderColor: '#bfa15f', color: '#f5eedf' }}>
                <i className="fa-solid fa-check-circle me-1"></i> Thank you for subscribing to Oberoi newsletters.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-input-group mb-3">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input" 
                />
                <button type="submit" className="newsletter-submit-btn">
                  Submit
                </button>
              </form>
            )}

            <div className="mt-3">
              <span className="text-uppercase fw-semibold" style={{ fontSize: '11px', color: '#bfa15f', letterSpacing: '1.5px' }}>
                Follow Us
              </span>
              <div className="footer-social-icons">
                <a href="https://twitter.com/oberoihotels" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="X Twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://facebook.com/oberoihotels" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/oberoihotels" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://youtube.com/user/OberoiHotels" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Directory Accordion */}
        <div className="row pt-2">
          <div className="col-12">
            <div className="accordion footer-accordion" id="footerDestAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDestinations"
                    aria-expanded="false"
                    aria-controls="collapseDestinations"
                  >
                    Explore Destinations Directory <i className="fa-solid fa-chevron-down ms-2 fs-6"></i>
                  </button>
                </h2>
                <div
                  id="collapseDestinations"
                  className="accordion-collapse collapse"
                  data-bs-parent="#footerDestAccordion"
                >
                  <div className="accordion-body">
                    <div className="row g-3">
                      <div className="col-md-3 col-6">
                        <div className="footer-link">
                          <span className="fw-semibold text-white small">India - North</span>
                          <Link to="/destinations">5-Star Hotels in Agra</Link>
                          <Link to="/destinations">Luxury Palace in Jaipur</Link>
                          <Link to="/destinations">Spa Retreat in New Chandigarh</Link>
                          <Link to="/destinations">Himalayan Resort in Shimla</Link>
                          <Link to="/destinations">5-Star Hotel in New Delhi</Link>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="footer-link">
                          <span className="fw-semibold text-white small">India - West & South</span>
                          <Link to="/destinations">Luxury Hotel in Mumbai</Link>
                          <Link to="/destinations">Urban Retreat in Bengaluru</Link>
                          <Link to="/destinations">Lake Palace in Udaipur</Link>
                          <Link to="/destinations">Tiger Reserve in Ranthambhore</Link>
                          <Link to="/destinations">Royal Residence in Naila Fort</Link>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="footer-link">
                          <span className="fw-semibold text-white small">International Resorts</span>
                          <Link to="/destinations">Beach Resort in Bali</Link>
                          <Link to="/destinations">Luxury Resort in Lombok</Link>
                          <Link to="/destinations">Turtle Bay in Mauritius</Link>
                          <Link to="/destinations">Palace Hotel in Marrakech</Link>
                          <Link to="/destinations">Villas in Wadi Safar, Saudi Arabia</Link>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="footer-link">
                          <span className="fw-semibold text-white small">Egypt & Cruises</span>
                          <Link to="/destinations">Red Sea Resort in Sahl Hasheesh</Link>
                          <Link to="/destinations">The Oberoi Zahra Nile Cruiser</Link>
                          <Link to="/destinations">The Oberoi Philae Nile Cruiser</Link>
                          <Link to="/destinations">Historical Luxor Itineraries</Link>
                          <Link to="/destinations">Aswan River Expeditions</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row footer-bottom-bar">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">
              © {new Date().getFullYear()} EIH Limited. Oberoi Hotels & Resorts. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#privacy" className="text-white-50 text-decoration-none me-3">Privacy Policy</a>
            <a href="#terms" className="text-white-50 text-decoration-none me-3">Terms & Conditions</a>
            <a href="#sitemap" className="text-white-50 text-decoration-none">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
