import React, { ReactNode } from 'react';
import styles from './Card.mod.scss';

export interface CardProps {
  title: string;
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>{props.title}</div>
      <div className={styles.cardContent}>{props.children}</div>
    </div>
  );
};
