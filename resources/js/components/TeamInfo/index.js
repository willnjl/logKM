import { connect } from "react-redux";
import TeamInfo from "./TeamInfo";
let mapStateToProps = ({ team }) => ({ team });

export default connect(mapStateToProps)(TeamInfo);
