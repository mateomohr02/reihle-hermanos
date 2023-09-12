import React, { useEffect, useState, useRef } from 'react'

import style from './Home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/Footer/Footer';

import nature from '../assets/nature.jpg'
import people from '../assets/people.jpeg'
import machine from '../assets/machine.jpeg'

//services

import fix from '../assets/services/fix.png'
import harvest from '../assets/services/harvest.jpg'
import transport from '../assets/services/transport.jpeg'
import woodload from '../assets/services/woodload.jpeg'

import servicesInfo from '../assets/services/servicesInfo'


const Home = () => {

  const [expandedService, setExpandedService] = useState(null)

  useEffect(()=> {
    AOS.init();
  }, [])

  const serviceDetailsRef = useRef(null);
  
  console.log(serviceDetailsRef);

  const handleServiceClick = (name) => {
    setExpandedService(name)
    if (serviceDetailsRef.current) {
      serviceDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
  return (
    <div className={style.container}>
      {/* IMG TEXT CONT */}
      <div>
        <img className={style.image} src={nature} alt='Bosque Pino'></img>
        <p className={style.textImage}>Somos una empresa líder en la industria de servicios forestales <br/> con más de 30 años de trayectoria.</p>
      </div>
      {/* First blocks */}
      <div className={style.firstContainer} data-aos="fade-up">
        <div className={style.imageContainer}>
          <img className={style.imagePeople} src={people} alt="Equipo de trabajo Reihle" />
        </div>
        <div className={style.textContainer}>
          <p className={`${style.textCompromiso} ${style.title}`}>
          Nuestro compromiso... 
          </p>
          <p className={style.textCompromiso}>
            Nuestro compromiso abarca tanto el <br /> bienestar de nuestro equipo como la <br />protección del medio ambiente. <br /> <br />Por esto invertimos constantemente <br />en tecnología, asegurandonos con <br />equipamiento de última generación.
          </p>
        </div>
      </div>

      {/* Second blocks */}
      <div className={style.secondContainer} data-aos="fade-up" >
        <div className={style.textContainer} >
          <p className={style.textCompromiso} >
            Brindamos servicios de la más alta calidad.
          </p>
        </div>
        <div className={style.imageContainer} >
          <img className={style.imageMachine} src={machine} alt="Equipamiento Forestal Reihle" />
        </div>
      </div>

        <h2 className={style.titleServices} data-aos="fade-up">Nuestros Servicios</h2>

      <div className={style.thirdContainer} data-aos="fade-up">

        <div className={style.servicesContainer}>
          <div className={style.imageWrapper} key="1" onClick={() => handleServiceClick("Cosecha Forestal")}>
            <img className={style.servicesImages} src={harvest} alt="Cosecha Forestal" />
            <p className={style.servicesText}>Cosecha Forestal</p>
          </div>
        </div>

        <div className={style.servicesContainer} onClick={() => handleServiceClick("Carga de Madera")} >
          <div className={style.imageWrapper}>
            <img className={style.servicesImages} src={woodload} alt="Carga de Madera" />
            <p className={style.servicesText}>Carga de madera</p>
          </div>
        </div>

        <div className={style.servicesContainer} onClick={() => handleServiceClick("Transporte")} >
          <div className={style.imageWrapper}>
            <img className={style.servicesImages} src={transport} alt="Transporte" />
            <p className={style.servicesText}>Transporte</p>
            </div>
        </div>

        <div className={style.servicesContainer} onClick={() => handleServiceClick("Mantenimiento")} >
          <div className={style.imageWrapper}>
            <img className={style.servicesImages} src={fix} alt="Mantenimiento" />
            <p className={style.servicesText}>Mantenimiento</p>
          </div>
        </div>


      </div>
        {
          !expandedService ? "" : servicesInfo.map(service => service.name === expandedService ? 
            <div className={style.expandedServiceContainer} ref={serviceDetailsRef} data-aos="fade-down">
              <h2 className={style.expandedServiceTitle}>{service.name}</h2>
              <pre className={style.expandedService} data-aos="fade-down">
                {service.info}
              </pre>
            </div>
          : "") 

        }

      <Footer/>

    </div>
  )
}

export default Home