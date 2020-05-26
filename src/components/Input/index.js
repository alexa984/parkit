import React from 'react';
import styles from './styles.module.css'

export const Input = ({ type, placeholder }) => {
    return <input className={styles.input} type={type} placeholder={placeholder} />
}