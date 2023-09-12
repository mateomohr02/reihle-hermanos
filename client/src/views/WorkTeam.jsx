import React, { useEffect }from "react";
import mujeresreihle from "../assets/workTeam/mujeresreihle.jpeg";
import fotogrupal from "../assets/workTeam/fotogrupal.jpeg";
import style from "./WorkTeam.module.css";

import Footer from "../components/Footer/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkTeam = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

  return (
    <div className={style.container}>

      <h1 className={style.title} data-aos="fade-up">Nuestro recurso más importante: <br/> Nuestro Talento Humano</h1>
      
      <div className={style.flexContainer} data-aos="fade-up">

        <div className={style.flexItem} data-aos="fade-up">

          <p className={style.textContainer}>
            En Reihle Hermanos, valoramos <br /> enormemente nuestros equipos de
            <br />
            trabajo.
            <br />
            <br />
            Nuestra prioridad es mantener relaciones
            de largo plazo con nuestros empleados,
            ya que creemos que su compromiso y 
            dedicación son fundamentales para nuestro éxito.
          </p>
          <div className={style.imgContainer}>
            <img className={style.imgMujeres} src={mujeresreihle} alt="Mujeres Reihle" />
          </div>
        </div>

        <div className={style.flexItem} data-aos="fade-up">
          <div className={style.imgContainer}>
            <img className={style.imgGroup} src={fotogrupal} alt="Foto Grupal" />
          </div>
          <p className={style.textContainer}>
            Estamos comprometidos a <br />
            crear un ambiente en el que
            <br /> cada miembro de nuestro
            <br /> equipo pueda prosperar y <br />
            contribuir significativamente <br />a nuestra empresa.
          </p>
        </div>
      </div>

      <Footer data-aos="fade-up"/>
    
    </div>
  );
};

export default WorkTeam;