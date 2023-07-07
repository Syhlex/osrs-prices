import React from 'react';
import classNames from 'classnames';
import RefreshIcon from 'assets/icons/refresh.svg';
import styles from './Icon.module.scss';

export enum IconName {
  Refresh = 'Refresh',
}

export interface IconProps {
  name: IconName;
  className?: string;
}

const iconsMap = {
  [IconName.Refresh]: RefreshIcon,
};

export const Icon = (props: IconProps) => {
  const IconComponent = iconsMap[props.name];
  return (
    <IconComponent
      className={classNames(styles.iconDefault, props.className)}
    />
  );
};
