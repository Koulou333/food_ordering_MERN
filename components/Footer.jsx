import Image from "next/legacy/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          OH OUI, NOUS LAVONS FAIT. LA PIZZA LAMA, TRANCHE DE PIZZA BIEN CUIT.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TROUVE TON RESTAURANT</h1>
          <p className={styles.text}>
            125 avenue de Champs Elysée
            <br /> 75008, Paris
          </p>
          <p className={styles.text}>
            4 Pl. du Trocadéro et du 11 Novembre, 
            <br /> 75016 Paris
          </p>
          <p className={styles.text}>
            9 Pl. de la République, 
            <br /> 75003 Paris
          </p>
          <p className={styles.text}>
            231 Jardin de lArche, 
            <br /> 92000, La Defense 
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORAIRES</h1>
          <p className={styles.text}>
            DU LUNDI AU VENDREDI
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SAMEDI - DIMANCHE
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;