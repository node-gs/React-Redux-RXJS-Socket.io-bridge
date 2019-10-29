import { connect } from 'react-redux';
import {
  enabledBids,
} from '../selectors';
import {
  placeBid,
} from '../actions';
import Input from '../components/Input';

const mapStateToProps = state => ({
  enabledBids: enabledBids(state)
})

const mapDispatchToProps = dispatch => ({
  placeBid: bid => dispatch(placeBid(bid))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
