import { connect } from "react-redux";
import component from "./component";

let mapStateToProps = ({ user, terms }) => ({ user, terms });

export default connect(mapStateToProps)(component);
