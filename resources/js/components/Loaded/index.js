import { connect } from "react-redux";
import Component from "./Component";
import { getActionData } from "../../data/actions";

let mapStateToProps = ({ log }) => ({ loaded: log.isLoaded });

let mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getActionData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
