import { connect } from "react-redux";
import TeamOverview from "./TeamOverview";
let mapStateToProps = ({ user, team }) => ({ user, team });

export default connect(mapStateToProps)(TeamOverview);
