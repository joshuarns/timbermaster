import lvt from '../assets/img/lvt.jpg'
import epc from '../assets/img/epc.jpg'
import spc from '../assets/img/spc.jpg'
import wood from '../assets/img/wood.jpg'
import './Surfaces.css'

const products = [
  { img: lvt,  label: 'LVT' },
  { img: epc,  label: 'EPC' },
  { img: spc,  label: 'SPC' },
  { img: wood, label: 'WOOD Oak' },
]

export default function Surfaces() {
  return (
    /* Contenedor principal 100% */
    <section className="surfaces">

      {/* Contenedor 1300px max */}
      <div className="surfaces__container">

        <div className="surfaces__text">
          <h2 className="surfaces__heading">
            SURFACES THAT STAND THE TEST OF TIME.
          </h2>
          <p className="surfaces__body">
            At Timbermaster, we believe mastery is built — layer by layer.<br />
            In every surface, there's more than design; there's precision, endurance, and the experience of those who understand materials.
          </p>
        </div>

        {/* Grid de 4 columnas */}
        <div className="surfaces__grid">
          {products.map(({ img, label }) => (
            <div className="surfaces__item" key={label}>
              <img src={img} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
