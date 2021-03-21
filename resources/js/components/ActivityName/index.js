import { connect } from "react-redux";
import ActivityIcon from "./ActivityIcon";
let mapStateToProps = ({ terms }, { activity }) => ({ terms, activity });

export default connect(mapStateToProps)(ActivityIcon);
