import { connect } from "react-redux";
import component from "./component";

let mapStateToProps = ({ user, log }) => ({ user });

export default connect(mapStateToProps)(component);
