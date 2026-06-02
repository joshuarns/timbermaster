import mastersInImg from '../assets/img/masters-in.svg'
import './MastersIn.css'

export default function MastersIn() {
  return (
    /* Contenedor principal 100% */
    <section className="masters">
      {/* Contenedor 1300px max */}
      <div className="masters__container">
        <img src={mastersInImg} alt="Masters In" className="masters__img" />
      </div>
    </section>
  )
}
