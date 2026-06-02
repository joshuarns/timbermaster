import floorImg from '../assets/img/composition-floor.jpg'
import './Composition.css'

/* ── Icons ─────────────────────────────────── */
const IconLVT = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="0.5" y="0.5" width="27" height="27" stroke="#111"/>
    <path d="M3 20 Q9 14 14 18 Q19 22 25 16" stroke="#111" strokeWidth="1" fill="none"/>
    <path d="M3 14 Q9 8 14 12 Q19 16 25 10" stroke="#111" strokeWidth="1" fill="none"/>
    <path d="M3 8 Q9 2 14 6 Q19 10 25 4" stroke="#111" strokeWidth="1" fill="none"/>
  </svg>
)

const IconEPC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="0.5" y="0.5" width="27" height="27" stroke="#111"/>
    <path d="M3 10 L9 4 L16 8 L22 4 L25 10 L20 16 L24 22 L16 24 L10 22 L4 24 L6 16 Z"
          stroke="#111" strokeWidth="1" fill="none"/>
  </svg>
)

const IconSPC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="0.5" y="0.5" width="27" height="27" stroke="#111"/>
    <path d="M3 14 Q8 8 14 14 Q20 20 25 14" stroke="#111" strokeWidth="1" fill="none"/>
    <path d="M3 20 Q8 14 14 20 Q20 26 25 20" stroke="#111" strokeWidth="1" fill="none"/>
  </svg>
)

const IconWood = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="0.5" y="0.5" width="27" height="27" stroke="#111"/>
    <rect x="11" y="6" width="6" height="14" rx="3" stroke="#111" strokeWidth="1" fill="none"/>
    <circle cx="14" cy="19" r="3" fill="#111"/>
  </svg>
)

const IconTemp = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="0.5" y="0.5" width="31" height="31" stroke="#111"/>
    <rect x="14" y="8" width="4" height="13" rx="2" stroke="#111" strokeWidth="1" fill="none"/>
    <circle cx="16" cy="22" r="3" fill="#111"/>
  </svg>
)

const tabs = [
  { Icon: IconLVT,  label: 'LVT'  },
  { Icon: IconEPC,  label: 'EPC'  },
  { Icon: IconSPC,  label: 'SPC'  },
  { Icon: IconWood, label: 'WOOD' },
]

const features = [
  'Engineered Wood Flooring',
  'Engineered Wood Flooring',
  'Engineered Wood Flooring',
  'Engineered Wood Flooring',
  'Engineered Wood Flooring',
]

export default function Composition() {
  return (
    /* Contenedor principal 100% — position: relative para anclar imagen */
    <section className="comp">

      {/* Imagen posicionada absolute a la derecha del viewport */}
      <img src={floorImg} alt="Wood floor composition" className="comp__image" />

      {/* Contenedor 1300px max */}
      <div className="comp__container">

        {/* Header: title + tabs */}
        <div className="comp__header">
          <h2 className="comp__title">COMPOSITION</h2>
          <nav className="comp__tabs">
            {tabs.map(({ Icon, label }) => (
              <a href="#" className="comp__tab" key={label}>
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Body: features list (la imagen vive afuera) */}
        <div className="comp__body">
          <ul className="comp__features">
            {features.map((label, i) => (
              <li className="comp__feature" key={i}>
                <IconTemp />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
