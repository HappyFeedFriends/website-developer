import React from 'react';
import classnames from 'classnames/bind';
import styles from './programs-list.scss';
import { Container } from '../../../common/components/container';

interface ProgramData {
  id: number;
  icon: string;
  onClick: () => void;
}

interface ProgramsListProps {
  items: ProgramData[];
}

const cx = classnames.bind(styles);

export const ProgramsList: React.FC<ProgramsListProps> = ({ items }) => (
    <Container>
      {items.map(({ icon, onClick, id }) => (
        <div className={cx('program')} onClick={onClick} key={id}>
          <img src={icon} alt="" />
        </div>
      ))}
    </Container>
);
