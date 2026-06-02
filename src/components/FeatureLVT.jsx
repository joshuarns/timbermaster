import lvtTile from '../assets/img/lvt.jpg'
import roomImg from '../assets/img/made-for-builing-floors.jpg'
import './FeatureLVT.css'

const TileIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="39" height="39" stroke="#333" strokeWidth="1"/>
    <line x1="0" y1="30" x2="10" y2="40" stroke="#333" strokeWidth="0.8"/>
    <line x1="0" y1="20" x2="20" y2="40" stroke="#333" strokeWidth="0.8"/>
    <line x1="0" y1="10" x2="30" y2="40" stroke="#333" strokeWidth="0.8"/>
    <line x1="0" y1="0"  x2="40" y2="40" stroke="#333" strokeWidth="0.8"/>
    <line x1="10" y1="0" x2="40" y2="30" stroke="#333" strokeWidth="0.8"/>
    <line x1="20" y1="0" x2="40" y2="20" stroke="#333" strokeWidth="0.8"/>
    <line x1="30" y1="0" x2="40" y2="10" stroke="#333" strokeWidth="0.8"/>
  </svg>
)

export default function FeatureLVT() {
  return (
    /* Contenedor principal gris 100% */
    <section className="flvt">

      {/* Contenedor 1300px max */}
      <div className="flvt__container">

        {/* Columna 1 — 30% */}
        <div className="flvt__col flvt__col--left">
          <div className="flvt__meta">
            <div className="flvt__label-row">
              <TileIcon />
              <span className="flvt__name">LVT</span>
            </div>
            <hr className="flvt__rule" />
            <p className="flvt__subtitle">Luxury Vinyl Tile</p>
            <p className="flvt__desc">
              Celebrates material expression<br />and design clarity.
            </p>
          </div>
          <img src={lvtTile} alt="LVT sample" className="flvt__tile" />
        </div>

        {/* Columna 2 — 70% */}
        <div className="flvt__col flvt__col--right">
          <h2 className="flvt__heading">
            MADE FOR BUILDING FLOORS WITH MASTERY
          </h2>
          <img src={roomImg} alt="LVT interior" className="flvt__room" />
        </div>

      </div>
    </section>
  )
}
