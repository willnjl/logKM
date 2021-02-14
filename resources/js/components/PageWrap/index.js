import { connect } from "react-redux";
import PageWrap from "./PageWrap";

let mapDispatchToProps = ({ user }) => ({ user });

export default connect(mapDispatchToProps)(PageWrap);
