import React from 'react';
import classnames from 'classnames/bind';
import styles from './footer.scss';
import { ProgramsList } from '../../connectors/programs-list';

const cx = classnames.bind(styles);

export const Footer = () => (
  <div className={cx('root')}>
    <div className={cx('programs-list')}>
      <ProgramsList />
    </div>
  </div>
);
