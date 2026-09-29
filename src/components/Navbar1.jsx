import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = ({ onOpenLogin, onOpenSearch }) => {
    const [showLoginPopover, setShowLoginPopover] = useState(false)
    const popoverRef = useRef(null)

    // Close popover when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popoverRef.current && !popoverRef.current.contains(e.target)) {
                setShowLoginPopover(false)
            }
        }
        if (showLoginPopover) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showLoginPopover])

    return (
        <div className="container-fluid nav1-bg py-1 position-relative" style={{ zIndex: 1040 }}>
            <div className="d-flex justify-content-between align-items-center px-lg-4 px-2">
                {/* Left: Home */}
                <div className="d-flex align-items-center">
                    <Link to="/" className="top-bar-link active ps-0">
                        Home
                    </Link>
                </div>
                
                {/* Right: Login/Join Now with Popover, Partner Login, Contact us, Search */}
                <div className="d-flex align-items-center position-relative">
                    <ul className="nav d-flex align-items-center mb-0">
                        <li className="nav-item position-relative" ref={popoverRef}>
                            <button 
                                onClick={() => setShowLoginPopover(!showLoginPopover)} 
                                className={`top-bar-link btn btn-link text-decoration-none border-0 ${showLoginPopover ? 'active' : ''}`}
                                aria-expanded={showLoginPopover}
                                title="Oberoi One Recognition Programme"
                            >
                                Login/Join Now <i className={`fa-solid ${showLoginPopover ? 'fa-angle-up' : 'fa-angle-down'} ms-1`} style={{ fontSize: '10px' }}></i>
                            </button>

                            {/* Authentic Oberoi One Login Popover (.login-popup) */}
                            {showLoginPopover && (
                                <div className="oberoi-one-popover shadow-lg">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <p className="popover-title mb-0">
                                            Welcome <span>to Oberoi One.</span>
                                        </p>
                                        <button 
                                            onClick={() => setShowLoginPopover(false)} 
                                            className="btn-close btn-close-white p-0"
                                            style={{ fontSize: '9px', opacity: 0.7 }}
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <p className="popover-sub-text">
                                        Our distinctive guest recognition programme.
                                    </p>
                                    
                                    <div className="d-flex gap-2 my-3">
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                setShowLoginPopover(false)
                                                if (onOpenLogin) onOpenLogin('login')
                                            }}
                                            className="login-popover-btn"
                                        >
                                            Log In
                                        </button>
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                setShowLoginPopover(false)
                                                if (onOpenLogin) onOpenLogin('join')
                                            }}
                                            className="login-popover-btn-gold"
                                        >
                                            Join Now
                                        </button>
                                    </div>

                                    <div className="partner-login-box pt-2 border-top border-secondary border-opacity-50">
                                        <a 
                                            href="https://cbt.synxis.com/?chainId=24188" 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="partner-link text-decoration-none"
                                        >
                                            Partner Login <i className="fa-solid fa-arrow-up-right-from-square ms-1" style={{ fontSize: '9px' }}></i>
                                        </a>
                                        <p className="partner-note mb-0">For Corporate &amp; Travel Partners</p>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="nav-item d-none d-md-block">
                            <a 
                                className="top-bar-link" 
                                target="_blank" 
                                rel="noreferrer" 
                                href="https://cbt.synxis.com/?chainId=24188"
                                title="Corporate & Travel Partner Login"
                            >
                                Partner Login
                            </a>
                        </li>

                        <li className="nav-item">
                            <Link 
                                to="/contact"
                                className="top-bar-link"
                            >
                                Contact us
                            </Link>
                        </li>

                        <li className="nav-item ms-2 pe-0">
                            <button 
                                onClick={onOpenSearch} 
                                className="search-trigger-btn"
                                aria-label="Search Hotels and Experiences"
                                title="Search Oberoi Hotels & Experiences"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar1