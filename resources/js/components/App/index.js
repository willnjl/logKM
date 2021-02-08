import { connect } from "react-redux";
import App from "./App";

let mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(App);
