import React from 'react'
import styles from "./Card.module.css"
import { Star } from 'react-feather';

interface Props {
    title: string;
    description: string;
    name: string;
    date: string;
}

const Card = ({ title, description, name, date }: Props) => {
  return (
    <div className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        
        <ul>
            <li><Star color='#21C55D' fill='#21C55D' /></li>
            <li><Star color='#21C55D' fill='#21C55D' /></li>
            <li><Star color='#21C55D' fill='#21C55D' /></li>
            <li><Star color='#21C55D' fill='#21C55D' /></li>
            <li><Star color='#21C55D' fill='#21C55D' /></li>
        </ul>

        <div>
        <h4>{name}</h4>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Card