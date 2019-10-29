import { connect } from 'react-redux';
import {
  bids,
} from '../selectors';
import Log from '../components/Log';

const mapStateToProps = state => ({
  bids: bids(state)
});

export default connect(
  mapStateToProps,
)(Log);
