import { connect } from "react-redux";
import AddAction from "./AddAction";
import { postAction } from "../../data/actions";

let mapStateToProps = ({ user, terms }) => ({ user, terms });

let mapDispatchToProps = (dispatch) => {
    return {
        postData: (id, data) => dispatch(postAction(id, data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAction);
