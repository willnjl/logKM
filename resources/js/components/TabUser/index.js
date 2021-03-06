import { connect } from "react-redux";
import TabUser from "./TabUser";
import { getUserFeed } from "../../data/actions/userActions";
let mapStateToProps = ({ user }) => ({ user });

let mapDispatchToProps = (dispatch) => {
    return {
        handleLoad: (id, page) => dispatch(getUserFeed(id, page)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TabUser);
