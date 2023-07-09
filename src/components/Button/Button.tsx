import React, { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.mod.scss';

export interface ButtonProps {
  children: ReactNode;
  variant: 'nav' | 'primary' | 'secondary';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  classes?: { button?: string };
}

type ButtonVariantProps = Omit<ButtonProps, 'variant'>;
type BaseButtonProps = ButtonVariantProps & { variantClass: string };

export const Button = ({ variant, ...props }: ButtonProps) => {
  const buttons = {
    nav: NavButton,
    primary: PrimaryButton,
    secondary: SecondaryButton,
  };
  const ButtonVariant = buttons[variant];
  return <ButtonVariant {...props} />;
};

const NavButton = (props: ButtonVariantProps) => {
  return <BaseButton variantClass={styles.navButton} {...props} />;
};

const PrimaryButton = (props: ButtonVariantProps) => {
  return <BaseButton variantClass={styles.primaryButton} {...props} />;
};

const SecondaryButton = (props: ButtonVariantProps) => {
  return <BaseButton variantClass={styles.secondaryButton} {...props} />;
};

const BaseButton = ({
  variantClass,
  classes,
  children,
  ...rest
}: BaseButtonProps) => {
  return (
    <button
      className={classNames(styles.baseButton, variantClass, classes?.button)}
      {...rest}
    >
      {children}
    </button>
  );
};
