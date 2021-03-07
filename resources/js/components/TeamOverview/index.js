import { connect } from "react-redux";
import TeamOverview from "./TeamOverview";
let mapStateToProps = ({ user, log }) => ({ user, log });

export default connect(mapStateToProps)(TeamOverview);
