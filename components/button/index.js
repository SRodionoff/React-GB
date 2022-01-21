import React from 'react';
import styles from './button.module.css'
export const Button = (props) => {
   return (<button onClick={props.onClick} disabled={props.disabled} className={[styles.reset]}>
      btn
   </button>)
}