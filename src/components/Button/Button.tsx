import React, { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.mod.scss';

export interface ButtonProps {
  children: ReactNode;
  variant: 'nav';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  classes?: { button?: string };
}

export const Button = (props: ButtonProps) => {
  const ButtonVariant = { nav: NavButton }[props.variant];
  return <ButtonVariant {...props} />;
};

const NavButton = ({ classes, children, ...rest }: ButtonProps) => {
  return (
    <button className={classNames(styles.navButton, classes?.button)} {...rest}>
      {children}
    </button>
  );
};
