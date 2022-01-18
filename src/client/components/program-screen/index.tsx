import React from 'react';
import classnames from 'classnames/bind';
import styles from './program-screen.scss';
import { Container } from '../../../common/components/container';
import { Portal, Tooltip } from '@mui/material';

interface ProgramScreenProps {
  title: string;
  onClose: () => void;
  onCollapse: () => void;
  onFullScreen: () => void;
}

const cx = classnames.bind(styles);

export const ProgramScreen: React.FC<ProgramScreenProps> = ({}) => (
  <div className={cx('root')}>
    <div className={cx('screen')} >

    </div>
  </div>
);
