import { connect } from "react-redux";
import Settings from "./Settings";
import { update } from "../../data/actions";

let mapSateToProps = ({ user }) => ({ user });
let mapDispatchToProps = (dispatch) => ({
    postData: (id, data) => dispatch(update(id, data)),
});
export default connect(mapSateToProps, mapDispatchToProps)(Settings);
