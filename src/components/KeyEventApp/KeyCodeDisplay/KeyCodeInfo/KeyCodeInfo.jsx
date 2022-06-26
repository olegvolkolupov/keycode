import React from "react";

import CardKey from "./Card";
import CardKeyCode from "./Card";

import styles from "./KeyCodeInfo.module.css";

export default function KeyCodeInfo({ keyCodeInfo, keyInfo }) {
  return (
    <>
      <p className={styles.keyCodeContainer}>{keyCodeInfo}</p>
      <div className={styles.cards}>
        <CardKey header="Key" keyInfo={keyInfo} />
        <CardKeyCode header="Key Code" keyInfo={keyCodeInfo} />
      </div>
    </>
  );
}
