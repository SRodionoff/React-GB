import React from 'react';
import styles from './message.module.css'
export const Message = ({msgProps}) => {
   return (<p className={styles.reset}>{msgProps}</p>)
}
