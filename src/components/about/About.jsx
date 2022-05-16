import React from 'react'
import './about.css'
import ME from '../../assets/images/aboutimg.jpg'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>&Aacute; Savoir</h5>
      <h2>&Aacute; Propos de Moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>&Eacute;xpérience</h5>
              <small>Jeune Diplomée &#40;multiples stages&#41;</small>
            </article>
            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Formation</h5>
              <small>Ingénieure en Aéronautique</small>
            </article>
            <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
              <h5>Projets</h5>
              <small>Plusieurs projets réalisés</small>
            </article>
          </div>
          <p>
            Jeune ingénieure en aéronautique spécialisée dans le traitement de l'information embarquée et la Telecommunication. Ma passion pour l'aviation n'a pas de limite.
            Je souhaite l'éxploiter dans un cadre de collaboration pour créer un environnement de travail innovant et positif.
          </p>
          <a href="#contact" className='btn btn-primary'>Discutons !</a>
        </div>
      </div>
    </section>
  )
}

export default about