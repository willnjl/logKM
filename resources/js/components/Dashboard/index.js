import { connect } from "react-redux";
import component from "./component";

let mapStateToProps = ({ user, log }) => ({ user, log });

export default connect(mapStateToProps)(component);
