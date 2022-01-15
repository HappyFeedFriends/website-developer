import React from 'react';
import classnames from 'classnames/bind';
import styles from './App.scss';
import { Container } from '../../../common/components/container';
import { Footer } from '../footer';

const cx = classnames.bind(styles);

export const App = () => (
  <div className={cx('root')}>
      <div className={cx('working-screen')}>

      </div>
    <Footer />
  </div>
);
