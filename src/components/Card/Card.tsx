import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Card.mod.scss';

export interface CardProps {
  title?: string;
  children: ReactNode;
  classes?: { card?: string };
}

export const Card = (props: CardProps) => {
  return (
    <div className={classNames(styles.card, props.classes?.card)}>
      {props.title && <div className={styles.cardHeader}>{props.title}</div>}
      <div className={styles.cardContent}>{props.children}</div>
    </div>
  );
};
