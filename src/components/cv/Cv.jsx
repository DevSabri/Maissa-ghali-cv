import React from 'react'
import './cv.css'
import CV from '../../assets/cv/cv.pdf'

const cv = () => {
  return (
    <section id='cv'>
      <h5>En Bref,</h5>
      <h2>Mon Curriculum Vitae</h2>

      <div className="container cv__container">

        <div className="cv__experience">
          <h3>Mes Expériences</h3>
          <div className="cv__experince-content">
            <article className="cv__experience-detail">
              
              <h4>
              <span className='text-light'>2021 :</span>&nbsp;&nbsp; Stage de fin d’étude chez THALES GROUP
                Développement informatique/électronique pour des moyens
                de soutien d’équipements avioniques et radios tactiques.
              </h4>
            </article>
            <article className="cv__experience-detail">
              
              <h4>
                <span className='text-light'>2020 :</span>&nbsp;&nbsp; Stage chez AVIONAV (constructeur d’avions légers)
                Étude de démonstration et conception d’un poste de pilotage
                intelligent avec des écrans tactiles. (Gestion de projet, cahier
                de charge, business plan, QT CREATOR et QT DESIGN STUDIO).
              </h4>
            </article>
            <article className="cv__experience-detail">
              
              <h4>
                <span className='text-light'>2019 :</span>&nbsp;&nbsp; Stage chez P3 GROUP (cabine de conseil en gestion
                de configuration) : mise en place d’outils de pilotage de
                projet (développement de code VBA).
              </h4>
            </article>
          </div>
        </div>

        <div className="cv__projet">
          <h3>Projets Réalisés</h3>
          <div className="cv__projet-content">
            <article className="cv__projet-detail">
              
              <h4>
                Projet Master IPSA : stabilisation d’un drone à rotors
                via FPGA.
              </h4>
            </article>
            <article className="cv__projet-detail">
              
              <h4>
                Projet cursus IPSA : Etude et réalisation d’une
                interface de diagnostic filaire.
              </h4>
            </article>
            <article className="cv__projet-detail">
              
              <h4>
                Projet : Réalisation d’un système d’intelligence
                distribué sur LINUX, dont l’objectif était de
                programmer un robot dans le but d’atteindre sa
                destination finale en évitant les obstacles.
              </h4>
            </article>
            <article className="cv__projet-detail">
              
              <h4>
                Mini-projet à l’IPSA : Contrôle du mouvement d’un
                drone quadrirotor sous Matlab/Simulink.
              </h4>
            </article>
          </div>

        </div>

        <div className="cv__competence">
          <h3>Mes Compétenses</h3>
          <div className="cv__competence-content">
            <article className="cv__competence-detail">
              
              <h4>
                Développement électronique.
              </h4>
            </article>
            <article className="cv__competence-detail">
              
              <h4>
                Automatique et traitement de signal.
              </h4>
            </article>
            <article className="cv__competence-detail">
              
              <h4>
                Systèmes embarqués: FPGA (XILINX), ASIC, C(Linux).
              </h4>
            </article>
            <article className="cv__competence-detail">
              
              <h4>
                Compatibilité électromagnétique CEM et antennes, propagation guidée et hyperfréquences.
              </h4>
            </article>
            <article className="cv__competence-detail">
              
              <h4>
                Informatique et logiciels de programmation : MATLAB/SIMULINK, PYTHON, C/C++, VBA, VHDL, Verilog.
              </h4>
            </article>
           
          </div>

        </div>

        <div className="cv__formation">
          <h3>Mes Formations</h3>
          <div className="cv__formation-content">
            <article className="cv__formation-detail">
              
              <h4>
                <span className='text-light'>2018 - 2021 :</span>&nbsp;&nbsp; IPSA &#40;Institut Polytechnique des Sciences Avancées, Ivry-sur-Seine, France&#41;. Formation d’ingénieur aéronautique, spécialité système : traitement de l’information embarquée et télécommunication.
              </h4>
            </article>
            <article className="cv__formation-detail">
              
              <h4>
                <span className='text-light'>2019 - 2020 :</span>&nbsp;&nbsp; Semester à l’international à UNIVERSITY OF LIMERICK, IRLANDE. Licence in computer science and embedded systems.
              </h4>
            </article>
            <article className="cv__formation-detail">
              
              <h4>
                <span className='text-light'>2016 - 2018 :</span>&nbsp;&nbsp; ESAT, Tunisie (école Supérieur de l’Aéronautique et des Technologies). Classe préparatoire intégrée en aéronautique.
              </h4>
            </article>
            


          </div>
        </div>
        
        <a href={CV} download className='cv__download'>Télécharger MonCV.pdf</a>

      </div>
    </section>
  )
}

export default cv