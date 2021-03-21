import { connect } from "react-redux";
import SignIn from "./SignIn";
import { getUserData } from "../../data/actions/userActions";
import { getActivityTerms } from "../../data/actions/logActions";

let mapStateToProps = ({ user }) => ({ user });

let mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData()),
    getActivityTerms: (data) => dispatch(getActivityTerms(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
