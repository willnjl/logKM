import { connect } from "react-redux";
import SignIn from "./SignIn";
import { getUserData } from "../../data/actions/userActions";
import { getActivityTerms } from "../../data/actions/termsActions";

let mapStateToProps = ({ user }) => ({ user });

let mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData()),
    getActivityTerms: () => dispatch(getActivityTerms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
