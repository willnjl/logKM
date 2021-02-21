import { connect } from "react-redux";
import AddAction from "./AddAction";
import { postAction } from "../../data/actions";

let mapStateToProps = ({ user }) => ({ user });

let mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (id, data) => dispatch(postAction(id, data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAction);
