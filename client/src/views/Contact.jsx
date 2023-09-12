// Contact.js

import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import styles from './Contact.module.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GrPhone } from 'react-icons/gr';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import validate from '../assets/validate';
import { sendEmail } from "../redux/actions";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    contact: "",
    message: ""
  });

  const [form, setForm] = useState({
    contact: "",
    message: ""
  });

  const [showThankYou, setShowThankYou] = useState(false); 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      let newData = {
        contact: form.contact,
        message: form.message
      };

      try {
        await dispatch(sendEmail(newData));

        setForm({
          contact: "",
          message: ""
        });
        setShowThankYou(true);

        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.columnContainer} ${styles.leftColumn}`} data-aos="fade-up">
        <h2 className={styles.title} data-aos="fade-up">Contactá con nosotros</h2>
        <iframe
          data-aos="fade-up"
          className={styles.map}
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.970434165493!2d-54.63090512375246!3d-26.42443067298097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f76f6fb43fb359%3A0x1400428e6d541b0e!2sReihle%20Hnos%20SRL!5e0!3m2!1ses!2sar!4v1692826294578!5m2!1ses!2sar"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />

        <div className={styles.linksContainerDiv} >
          <HiOutlineLocationMarker className={styles.icons}/> 
          <a className={styles.links} href="https://goo.gl/maps/1d1MsDGDhPpXjrgQ8" target="blank">
            Av. Del Fundador Adolfo J. Schwelm N°408
          </a>
        </div>

        <div className={styles.linksContainerDiv} >
          <GrPhone className={styles.icons}/>
          <p className={styles.links}>
            03751 421237
          </p>
        </div>

        <div className={styles.linksContainerDiv} >
          <BiMessageDetail className={styles.icons}/> 
          <p className={styles.links}>
            3751560338
          </p>
        </div>

        <div className={styles.linksContainerDiv} >
          <AiOutlineMail className={styles.icons}/>
          <a className={styles.links} href="mailto:misionesforestalrh@gmail.com">
            misionesforestalrh@gmail.com
          </a>
        </div>
      </div>

      <div className={`${styles.columnContainer} ${styles.rightColumn}`} data-aos="fade-up">
        <p className={styles.textInputs}>Mail de Contacto: </p>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputContact}
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />
        </div>
        <p>Mensaje: </p>
        <div className={styles.inputContainer}>
          <textarea
            className={`${styles.inputContact} ${styles.messageInput}`}
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        {errors.contact && <span className={styles.error}>{errors.contact}</span>}
        {errors.message && <span className={styles.error}>{errors.message}</span>}
        <button className={styles.submitBtn} onClick={handleSubmit}>Enviar</button>

        {showThankYou && (
          <div className={styles.thankYou}>
            Gracias por Dejarnos tu mensaje, nos estaremos poniendo en contacto pronto!
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;

