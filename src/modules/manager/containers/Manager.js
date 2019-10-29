import { connect } from 'react-redux';
import Manager from '../components/Manager';

const mapStateToProps = ({manager:{score:{ew, ns}, round, active, trumps}}) => {
  return ({
    ew,
    ns,
    round,
    trumps,
    lead: active,
  })}

export default connect(mapStateToProps)(Manager);
