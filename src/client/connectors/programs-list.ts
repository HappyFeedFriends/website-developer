import { connect } from 'react-redux';
import { ProgramsList as Component } from '../components/programs-list';
import { PROGRAMS_LIST } from '../constants';
import type { CommonState } from '../state';

const mapStateToProps = () => ({
  items: PROGRAMS_LIST,
});

const mapDispatchToProps = {
  onClick: () => {}, // @TODO
};

const mergeProps = (
  { items, ...restStateProps }: ReturnType<typeof mapStateToProps>,
  { onClick, ...restDispatchProps }: typeof mapDispatchToProps,
) => ({
  items: items.map(item => ({
    ...item,
    onClick,
  })),
  ...restStateProps,
  ...restDispatchProps,
});

export const ProgramsList = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component);
