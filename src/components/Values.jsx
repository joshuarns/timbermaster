import roomImg from '../assets/img/594694.jpeg'
import './Values.css'

const headings = [
  'Efficient. Sustainable. Eco-Friendly.',
  'Quality. Assurance. Confidence.',
  'Refined. Distinct. Comfort.',
]

export default function Values() {
  return (
    /* Contenedor principal 100% */
    <section className="values">

      {/* Contenedor 1300px max */}
      <div className="values__container">

        {/* Contenedor 100% del padre con cols 70/30 */}
        <div className="values__top">

          {/* Col descripción 70% */}
          <div className="values__intro">
            <p>Timbermaster floors combine structural precision with timeless design.</p>
            <p>Built for projects that demand beauty, resilience, and architectural clarity.</p>
          </div>

          {/* Col textos 30% — grid de 3 columnas */}
          <div className="values__texts">
            {headings.map((text, i) => (
              <h3 className="values__heading" key={i}>{text}</h3>
            ))}
          </div>

        </div>

        {/* Imagen full width */}
        <img src={roomImg} alt="Timbermaster interior" className="values__image" />

      </div>
    </section>
  )
}
