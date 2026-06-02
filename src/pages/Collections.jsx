import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MastersIn from '../components/MastersIn'
import Values from '../components/Values'
import Footer from '../components/Footer'
import heroImg from '../assets/img/582845.png'
import lvtImg from '../assets/img/588254-lvt.jpg'
import epcImg from '../assets/img/582845-epc.jpg'
import spcImg from '../assets/img/6567284-spc.jpg'
import oakImg from '../assets/img/882934-wood.jpg'
import './Collections.css'

const products = [
  { img: lvtImg,  name: 'LVT',     desc: 'Luxury Vinyl Tile',              to: '/collections/lvt' },
  { img: epcImg,  name: 'EPC',     desc: 'Engineered Polymer Composite',   to: '#' },
  { img: spcImg,  name: 'SPC',     desc: 'Stone Plastic Composite',        to: '#' },
  { img: oakImg,  name: 'OAKWOOD', desc: 'Engineered Floor',               to: '#' },
]

export default function Collections() {
  return (
    <>
      <Navbar />

      {/* ── Intro ── */}
      <section className="col-intro">
        <div className="col-intro__container">
          <h1 className="col-intro__title">OUR COLLECTIONS</h1>
          <p className="col-intro__body">
            Timbermaster is a brand built around the essentials of surface design: durability, performance, and refined simplicity. Each
            collection is engineered to serve architects, designers and builders who look for materials that last — visually, technically,
            and functionally. Our work extends beyond supply; we collaborate from specification to installation, ensuring every project
            performs as beautifully as it looks.
          </p>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="col-hero">
        <img src={heroImg} alt="Collections hero" />
      </div>

      {/* ── Product list ── */}
      <section className="col-products">
        <div className="col-products__container">
          {products.map(({ img, name, desc, to }) => (
            <NavLink to={to} className="col-product" key={name}>
              <img src={img} alt={name} className="col-product__img" />
              <h2 className="col-product__name">{name}</h2>
              <p className="col-product__desc">{desc}</p>
            </NavLink>
          ))}
        </div>
      </section>

      {/* ── Reused sections ── */}
      <MastersIn />
      <Values />
      <Footer />
    </>
  )
}
