import { connect } from "react-redux";
import NavBar from "./NavBar";
import { logout } from "../../data/actions";

let mapStateToProps = ({ user }) => ({ user });

let mapDispatchToProps = (dispatch) => ({
    handleLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
