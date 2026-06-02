import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MastersIn from '../components/MastersIn'
import Values from '../components/Values'
import Footer from '../components/Footer'
import prodImg from '../assets/img/lvt/lvt-prod.jpg'
import slide1 from '../assets/img/lvt/LVT_1.jpg'
import slide2 from '../assets/img/lvt/LVT_2.jpg'
import slide3 from '../assets/img/lvt/LVT_3.jpg'
import slide4 from '../assets/img/lvt/LVT_4.jpg'
import spcImg from '../assets/img/6567284-spc.jpg'
import epcImg from '../assets/img/582845-epc.jpg'
import oakImg from '../assets/img/882934-wood.jpg'
import './ProductLVT.css'

const specs = [
  { label: 'Available Size:',         value: '184 x 950 mm (7.2" x 37.4")' },
  { label: 'Overall Thickness:',      value: '3 / 5 mm' },
  { label: 'Surface treatment:',      value: 'EIR (Embossed in Register)' },
  { label: 'Edge Treatment:',         value: 'Painted Bevel' },
  { label: 'Finish Treatment:',       value: 'Matt' },
  { label: 'Colorways:',              value: '4' },
  { label: 'Wear Resistance:',        value: 'Yes' },
  { label: 'UV Coating:',             value: 'Yes' },
  { label: 'Pieces per carton:',      value: '19' },
  { label: 'Square meter per carton:', value: '3.32 m²' },
]

const slides = [slide1, slide2, slide3, slide4]

const related = [
  { img: oakImg, name: 'Oakwood', to: '#' },
  { img: spcImg, name: 'Stone Plastic Composite (SPC)', to: '#' },
  { img: epcImg, name: 'Engineered Polymer Composite (EPC)', to: '#' },
]

export default function ProductLVT() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent(i => (i + 1) % slides.length)
  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)

  return (
    <>
      <Navbar />

      {/* ── Hero: image + specs ── */}
      <section className="plvt-hero">
        <div className="plvt-hero__container">
          <div className="plvt-hero__img">
            <img src={prodImg} alt="Luxury Vinyl Tile" />
          </div>
          <div className="plvt-hero__info">
            <h1 className="plvt-title">LUXURY VINYL TITLE (LVT)</h1>
            <h2 className="plvt-specs-label">SPECS</h2>
            <table className="plvt-specs">
              <tbody>
                {specs.map(({ label, value }) => (
                  <tr key={label}>
                    <td className="plvt-specs__label">{label}</td>
                    <td className="plvt-specs__value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Inspiration / slider ── */}
      <section className="plvt-inspiration">
        <div className="plvt-inspiration__container">
          <div className="plvt-inspiration__header">
            <h2 className="plvt-inspiration__title">INSPIRATION</h2>
            <p className="plvt-inspiration__desc">
              Timbermaster floors combine structural precision with timeless design.<br />
              Built for projects that demand beauty, resilience, and architectural clarity.
            </p>
          </div>
          <div className="plvt-slider">
            <img src={slides[current]} alt={`Inspiration ${current + 1}`} className="plvt-slider__img" />
            <button className="plvt-slider__btn plvt-slider__btn--prev" onClick={prev} aria-label="Previous">‹</button>
            <button className="plvt-slider__btn plvt-slider__btn--next" onClick={next} aria-label="Next">›</button>
          </div>
        </div>
      </section>

      {/* ── All floors ── */}
      <section className="plvt-related">
        <div className="plvt-related__container">
          <h2 className="plvt-related__title">ALL FLOORS</h2>
          <div className="plvt-related__grid">
            {related.map(({ img, name, to }) => (
              <NavLink to={to} className="plvt-related__item" key={name}>
                <img src={img} alt={name} />
                <span>{name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <MastersIn />
      <Values />
      <Footer />
    </>
  )
}
