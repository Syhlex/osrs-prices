import React, { MouseEvent, ReactNode } from 'react';
import styles from './Button.mod.scss';

export interface ButtonProps {
  children: ReactNode;
  variant: 'nav';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  const ButtonVariant = { nav: NavButton }[props.variant];
  return <ButtonVariant {...props} />;
};

const NavButton = (props: ButtonProps) => {
  return (
    <button className={styles.navButton} {...props}>
      {props.children}
    </button>
  );
};
