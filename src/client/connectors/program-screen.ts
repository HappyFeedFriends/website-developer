import { connect } from 'react-redux';
import { ProgramScreen as Component } from '../components/program-screen';

const mapStateToProps = () => ({
  title: 'Visual Studio Code',
});

const mapDispatchToProps = {
  onClose: () => {},
  onCollapse: () => {},
  onFullScreen: () => {},
};

export const ProgramScreen = connect(mapStateToProps, mapDispatchToProps)(Component);
