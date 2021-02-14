import { connect } from "react-redux";
import Settings from "./Settings";
import { update } from "../../data/actions";

let mapSateToProps = ({ user }) => ({ user });
let mapDispatchToProps = (dispatch) => ({
    handleSubmit: (id, name, email, avatar) =>
        dispatch(update(id, name, email, avatar)),
});
export default connect(mapSateToProps, mapDispatchToProps)(Settings);
