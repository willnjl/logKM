import { connect } from "react-redux";
import AddAction from "./AddAction";

let mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(AddAction);
