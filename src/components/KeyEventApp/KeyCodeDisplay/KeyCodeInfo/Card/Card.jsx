import React from "react";

import styles from "./Card.module.css";

export default function Card({ header, keyInfo }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      <div className={styles.infoField}>
        <div className={styles.description}>{keyInfo}</div>
      </div>
    </div>
  );
}
