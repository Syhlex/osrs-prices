import React from 'react';
import classNames from 'classnames';

import CaretDown from 'assets/icons/caret-down.svg';
import CopyIcon from 'assets/icons/copy.svg';
import HeartIcon from 'assets/icons/heart.svg';
import ListIcon from 'assets/icons/list.svg';
import RefreshIcon from 'assets/icons/refresh.svg';
import SortDownIcon from 'assets/icons/sort-down.svg';
import SortUpIcon from 'assets/icons/sort-up.svg';

import styles from './Icon.mod.scss';

export enum IconName {
  CaretDown = 'CaretDown',
  Copy = 'Copy',
  Heart = 'Heart',
  List = 'List',
  Refresh = 'Refresh',
  SortDown = 'SortDown',
  SortUp = 'SortUp',
}

export interface IconProps {
  name: IconName;
  className?: string;
}

const iconsMap = {
  [IconName.CaretDown]: CaretDown,
  [IconName.Copy]: CopyIcon,
  [IconName.Heart]: HeartIcon,
  [IconName.List]: ListIcon,
  [IconName.Refresh]: RefreshIcon,
  [IconName.SortDown]: SortDownIcon,
  [IconName.SortUp]: SortUpIcon,
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
