import { connect } from "react-redux";
import Component from "./Component";
import { getUserData } from "../../data/actions";

let mapStateToProps = ({ log }) => ({ loaded: log.isLoaded });

let mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
