import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrPhone } from "react-icons/gr";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      
      
      <div className={styles.leftContainer}>
        <div className={styles.linksContainerDiv}>
          <GrPhone className={styles.icons} />
          <p className={styles.links}>03751 421237</p>
        </div>

        <div className={styles.linksContainerDiv}>
          <BiMessageDetail className={styles.icons} />
          <p className={styles.links}>3751560338</p>
        </div>
      </div>

      <div className={styles.rightContainer}>

        <div className={styles.linksContainerDiv}>
          <HiOutlineLocationMarker className={styles.icons}/>
          <p className={styles.links}>Av. Del Fundador Adolfo J. Schwelm N°408</p>
        </div>

        <div className={styles.linksContainerDiv}>
          <AiOutlineMail  className={styles.icons}/>
          <p className={styles.links}>misionesforestalrh@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
