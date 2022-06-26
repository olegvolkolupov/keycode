import React from 'react'

import styles from "./ToggleButton.module.css"

export default function ToggleButton({buttonName, onClickAction}) {
  return (
    <button className={styles.toggleButton} onClick={onClickAction} >
      {buttonName}
    </button>
  )
}
