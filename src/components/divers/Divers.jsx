import React from 'react'
import './divers.css'

import {GoQuote} from 'react-icons/go'
import {FaLanguage} from 'react-icons/fa'
import {GiWorld} from 'react-icons/gi'
import {BsPuzzle} from 'react-icons/bs'
import {TiPuzzleOutline} from 'react-icons/ti'
import {BsInfoCircle} from 'react-icons/bs'
import {BsInfoLg} from 'react-icons/bs'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const divers = () => {
  return (
    <section id='divers'>
      <h5>En savoir plus</h5>
      <h2>&Aacute; Propos de Moi</h2>
      <Swiper className="container divers__container"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className='swiperslide'>
          <div className="slide slide1">
            <h3>Citations préférées</h3>
            <div className="citations__box box-general">
              <div className="citaion__icon-box"><GoQuote className='citation__icon icon-gen'/></div>
              <div className="citations">
                <div className="citation">
                  <h4>“Un avion symbolise la liberté, la joie, la possibilité de comprendre. Ces symboles sont éternels.”</h4>
                  <small className="writer">Richard Bach</small>
                </div>
                <div className="citation">
                  <h4>“Inventer un avion n’est rien. Le construire est un début. Voler c’est tout.”</h4>
                  <small className="writer">Otto Lilienthal</small>
                </div>
                <div className="citation delete">
                  <h4>“Quand tout semble être contre vous, souvenez-vous que l'avion décolle face au vent, et non avec lui.”</h4>
                  <small className="writer">Henry Ford</small>
                </div>
              </div>

              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className="slide slide2">
            <h3>Langues Maitrisées</h3>
            <div className="languages__box box-general">
              <div className="languages__icon"><FaLanguage className="icon-gen"/></div>
              <div className="languages">
                <div className="languages__frensh languages__gen">
                  <div className='languages__icon2' ><GiWorld className='icons__lang'/></div>
                  <h4>Français</h4>
                  <div className="level level1"></div>
                </div>
                <div className="languages__english languages__gen">
                  <div className='languages__icon2' ><GiWorld className='icons__lang'/></div>
                  <h4>Anglais</h4>
                  <div className="level level2"></div>
                </div>
                <div className="languages__arab languages__gen">
                  <div className='languages__icon2' ><GiWorld className='icons__lang'/></div>
                  <h4>Arabe</h4>
                  <div className="level level3"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className="slide slide3">
            <h3>Centres d'intérêt</h3>
            <div className="hob__box box-general">
              <div className="hob__icon"><BsPuzzle className="icon-gen"/></div>
              <div className="hobbies">
                <div className="hobbie hobbie1">
                  <div className="hobbie__icon"><TiPuzzleOutline className='icon__hob'/></div>
                  <h4>Voyage</h4>
                </div>
                <div className="hobbie hobbie2">
                  <div className="hobbie__icon"><TiPuzzleOutline className='icon__hob'/></div>
                  <h4>Découverte</h4>
                </div>
                <div className="hobbie hobbie3">
                  <div className="hobbie__icon"><TiPuzzleOutline className='icon__hob'/></div>
                  <h4>Sport</h4>
                </div>
                <div className="hobbie hobbie4">
                  <div className="hobbie__icon"><TiPuzzleOutline className='icon__hob'/></div>
                  <h4>Cinema</h4>
                </div>
                <div className="hobbie hobbie5">
                  <div className="hobbie__icon"><TiPuzzleOutline className='icon__hob'/></div>
                  <h4>Technologie</h4>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className="slide slide4">
            <h3>Informations pratiques</h3>
            <div className="informations__box box-general">
              <BsInfoCircle className="icon-gen"/>
              <div className="informations">
                <div className="information">
                  <div className="information__icon"><BsInfoLg /></div>
                  <h4>Nationalité : Franco-Tunisienne</h4>
                </div>
                <div className="information">
                  <div className="information__icon"><BsInfoLg /></div>
                  <h4>Permis B</h4>
                </div>
                <div className="information">
                  <div className="information__icon"><BsInfoLg /></div>
                  <h4>Mobilité : international</h4>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default divers