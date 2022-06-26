import React, { useEffect, useState } from "react";

import KeyCodeDisplay from "./KeyCodeDisplay";
import KeyCodesTable from "./KeyCodesTable";
import ToggleButton from "./ToggleButton";

import styles from "./KeyEventApp.module.css";

export default function KeyEventApp() {
  // state hooks
  let [isTableVisible, setIsTableVisible] = useState(false);
  let [tableAndCodeBtnName, setTableAndCodeBtnName] = useState("Table");
  let [themeBtnName, setThemeBtnName] = useState("Light theme");

  useEffect(() => {
    document.querySelector("html").classList.add("themeDark");
  }, []);

  const toggleTableAndCodeView = () => {
    setIsTableVisible(!isTableVisible);
    tableAndCodeBtnName === "Table"
      ? setTableAndCodeBtnName("Back")
      : setTableAndCodeBtnName("Table");
  };

  const toggleTheme = () => {
    let htmlClassListRef = document.querySelector("html").classList;
    if (themeBtnName === "Light theme") {
      setThemeBtnName("Dark theme");
      htmlClassListRef.add("themeLight");
      htmlClassListRef.remove("themeDark");
    } else {
      setThemeBtnName("Light theme");
      htmlClassListRef.add("themeDark");
      htmlClassListRef.remove("themeLight");
    }
  };

  return (
    <>
      {isTableVisible ? <KeyCodesTable /> : <KeyCodeDisplay />}
      <div className={styles.buttons}>
        <ToggleButton
          buttonName={tableAndCodeBtnName}
          onClickAction={toggleTableAndCodeView}
        />
        <ToggleButton buttonName={themeBtnName} onClickAction={toggleTheme} />
      </div>
      <div className={styles.colorButtons}>
        <p className={styles.headerText}>Choose color</p>
        <input
          type="button"
          className={styles.redButton}
          value="Red"
          onClick={() =>
            document.documentElement.style.setProperty("--main-hue", 360)
          }
        />
        <input
          type="button"
          className={styles.blueButton}
          value="Blue"
          onClick={() =>
            document.documentElement.style.setProperty("--main-hue", 240)
          }
        />
        <input
          type="button"
          className={styles.greenButton}
          value="Green"
          onClick={() =>
            document.documentElement.style.setProperty("--main-hue", 120)
          }
        />
      </div>
    </>
  );
}
