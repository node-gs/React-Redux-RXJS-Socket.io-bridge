import { connect } from 'react-redux';
import Board from '../components/Board';
import {
  enabled,
} from '../selectors';

const mapStateToProps = state => ({
    enabled: enabled(state),
});

export default connect(
  mapStateToProps,
)(Board);
