import { connect } from "react-redux";
import NavBar from "./NavBar";

let mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(NavBar);
