import { connect } from "react-redux";
import SignIn from "./SignIn";
import { getUserData } from "../../data/actions/userActions";

let mapStateToProps = ({ user }) => ({ user });

let mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
