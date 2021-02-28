import { connect } from "react-redux";
import TeamInfo from "./TeamInfo";
let mapStateToProps = ({ log }) => ({ team: log.team });

export default connect(mapStateToProps)(TeamInfo);
