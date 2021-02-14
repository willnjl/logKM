import { connect } from "react-redux";
import Settings from "./Settings";
let mapDispatchToProps = ({ user }) => ({ user });

export default connect(mapDispatchToProps)(Settings);
