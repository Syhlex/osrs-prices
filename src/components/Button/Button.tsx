import React, { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.mod.scss';

export interface ButtonProps {
  children: ReactNode;
  variant: 'nav' | 'primary' | 'secondary' | 'favouriteOn' | 'favouriteOff';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  classes?: { button?: string };
  disabled?: boolean;
}

type ButtonVariantProps = Omit<ButtonProps, 'variant'>;

type BaseButtonProps = ButtonVariantProps & { variantClass: string };

const BaseButton = ({
  variantClass,
  classes,
  children,
  disabled,
  ...rest
}: BaseButtonProps) => {
  return (
    <button
      className={classNames(
        styles.baseButton,
        variantClass,
        classes?.button,
        disabled && styles.disabled,
      )}
      {...rest}
    >
      {children}
    </button>
  );
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

const FavouriteButtonOn = (props: ButtonVariantProps) => {
  return <BaseButton variantClass={styles.favouriteButtonOn} {...props} />;
};

const FavouriteButtonOff = (props: ButtonVariantProps) => {
  return <BaseButton variantClass={styles.favouriteButtonOff} {...props} />;
};

export const Button = ({ variant, ...props }: ButtonProps) => {
  const buttons = {
    nav: NavButton,
    primary: PrimaryButton,
    secondary: SecondaryButton,
    favouriteOn: FavouriteButtonOn,
    favouriteOff: FavouriteButtonOff,
  };
  const ButtonVariant = buttons[variant];
  return <ButtonVariant {...props} />;
};
