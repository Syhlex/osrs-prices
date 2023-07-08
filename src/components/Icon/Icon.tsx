import React from 'react';
import classNames from 'classnames';

import HeartIcon from 'assets/icons/heart.svg';
import ListIcon from 'assets/icons/list.svg';
import RefreshIcon from 'assets/icons/refresh.svg';

import styles from './Icon.mod.scss';

export enum IconName {
  Heart = 'Heart',
  List = 'List',
  Refresh = 'Refresh',
}

export interface IconProps {
  name: IconName;
  className?: string;
}

const iconsMap = {
  [IconName.Heart]: HeartIcon,
  [IconName.List]: ListIcon,
  [IconName.Refresh]: RefreshIcon,
};

export const Icon = (props: IconProps) => {
  const IconComponent = iconsMap[props.name];

  if (!IconComponent) {
    throw Error(
      `The icon name "${props.name}" is not supported by the Icon component.`,
    );
  }

  return (
    <IconComponent
      className={classNames(styles.iconDefault, props.className)}
    />
  );
};
