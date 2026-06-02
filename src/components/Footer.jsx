import './Footer.css'
import footerImg from '../assets/img/image-footer.jpg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        {/* Left column */}
        <div className="footer__left">
          <h2 className="footer__headline">
            ARE YOU READY TO<br />
            <strong>JOIN US IN YOUR PROJECT?</strong>
          </h2>

          <div className="footer__social">
            <a href="#" aria-label="Facebook" className="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <path d="M16 8h-2a2 2 0 0 0-2 2v2h4l-.5 4H12v6" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer__social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <line x1="8" y1="11" x2="8" y2="17" />
                <line x1="8" y1="7" x2="8" y2="8" />
                <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
                <line x1="12" y1="11" x2="12" y2="17" />
              </svg>
            </a>
          </div>

          <p className="footer__email">info@timbermasters.design</p>

          <div className="footer__links">
            <a href="#">Downloads</a>
            <a href="#">Policy Privacy</a>
          </div>

          <p className="footer__copy">
            ©2025 &nbsp;<span className="footer__logo-text">TIMBER<strong>M∧STERS</strong></span>
          </p>
        </div>

        {/* Right column — contact form */}
        <div className="footer__right">
          <h3 className="footer__form-title">CONTACT US</h3>
          <form className="footer__form" onSubmit={e => e.preventDefault()}>
            <div className="footer__form-row">
              <input type="text" placeholder="Enter your Name" />
              <input type="text" placeholder="Enter your Last Name" />
            </div>
            <div className="footer__form-row">
              <input type="tel" placeholder="Enter your Phone" />
              <input type="email" placeholder="Enter your Email" />
            </div>
            <input type="text" placeholder="Project Type" className="footer__form-full" />
            <button type="submit" className="footer__send">Send</button>
          </form>
        </div>
      </div>

      {/* Bottom image strip */}
      <div className="footer__strip">
        <img src={footerImg} alt="Wood textures" />
      </div>
    </footer>
  )
}
