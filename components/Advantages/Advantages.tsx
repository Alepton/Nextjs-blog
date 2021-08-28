import { AdvantagesProps } from "./Advantages.props";
import styles from './Advantages.module.css';
import cn from 'classnames';
import { Card } from "../Card/Card";
import React from "react";
import CheckIcon from './check.svg';
import { priceRu } from "../../helpers/helpers";

export const Advantages =({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div >
     {advantages.map(a => (
       <div key={a._id} className={styles.advantage}>
         <CheckIcon />
         <div className={styles.title}>{a.title}</div>
         <hr className={styles.vline}/>
         <div>{a.description}</div>
       </div>
     )) }
    </div>
  );
};
