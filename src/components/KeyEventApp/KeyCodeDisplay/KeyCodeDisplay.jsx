import React, { useEffect, useState } from "react";

import InitialText from "./InitialText";
import KeyCodeInfo from "./KeyCodeInfo/KeyCodeInfo";

import styles from "./KeyCodeDisplay.module.css"

export default function KeyCodeDisplay() {
  //state hooks
  let [isInitialTextVisible, setIsInitialTextVisible] = useState(true);
  let [keyCodeInfo, setKeyCodeInfo] = useState("");
  let [keyInfo, setKeyInfo] = useState("");

  useEffect(() => {
    document.title = "Key Code";
    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, []);

  const handleKeyEvent = (event) => {
    if (isInitialTextVisible) {
      // hide initiaL text
      setIsInitialTextVisible(false);
    }

    const eventKeyCode = event.keyCode;
    const eventKey = event.key;
    setKeyCodeInfo(eventKeyCode);
    setKeyInfo(eventKey);

    document.title = "Key Code: " + eventKey + ' => ' + eventKeyCode;
  };

  return (
    <div className={styles.container} aria-live="polite" aria-atomic="true">
      {isInitialTextVisible ? <InitialText /> : <KeyCodeInfo keyCodeInfo={keyCodeInfo} keyInfo={keyInfo} />}
    </div>
  );
}
