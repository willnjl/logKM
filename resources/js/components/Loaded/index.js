import { connect } from "react-redux";
import Component from "./Component";
import { getUserStats } from "../../data/actions";

let mapStateToProps = ({ log }) => ({ loaded: log.user.hasLoaded });

let mapDispatchToProps = (dispatch) => ({
    handleLoad: (id) => dispatch(getUserStats(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
