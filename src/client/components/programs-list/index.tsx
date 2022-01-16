import React from 'react';
import classnames from 'classnames/bind';
import styles from './programs-list.scss';
import { Container } from '../../../common/components/container';
import { Tooltip } from '@mui/material';

interface ProgramData {
  id: number;
  icon: string;
  name: string;
  onClick: () => void;
}

interface ProgramsListProps {
  items: ProgramData[];
}

const cx = classnames.bind(styles);

export const ProgramsList: React.FC<ProgramsListProps> = ({ items }) => (
  <Container>
    {items.map(({ icon, onClick, id, name }) => (
      <Tooltip title={name} placement='top' arrow key={id} >
        <div className={cx('program')} onClick={onClick}>
          <img src={icon} alt="" />
        </div>
      </Tooltip>
    ))}
  </Container>
);
