import React from 'react';
import classnames from 'classnames/bind';
import styles from './container.scss';

type Display = 'flex';
type Direction = 'column' | 'row';
type Align = 'center' | 'start' | 'end';
type justify = 'center' | 'start' | 'end' | 'between' | 'around';

interface ContainerProps {
  display?: Display;
  direction?: Direction;
  isReverse?: boolean;
  alignItems?: Align;
  justifyContent?: justify;
}

const cx = classnames.bind(styles);

export const Container: React.FC<ContainerProps> = ({
  display = 'flex',
  direction = 'row',
  alignItems = 'start',
  justifyContent = 'start',
  isReverse,
  children,
}) => (
  <div
    className={cx(
      display,
      direction,
      'align-' + alignItems,
      'justify-' + justifyContent,
      isReverse && 'reverse',
    )}
  >
    {children}
  </div>
);
