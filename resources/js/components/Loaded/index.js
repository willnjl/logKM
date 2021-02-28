import { connect } from "react-redux";
import Component from "./Component";
import { getUserActions } from "../../data/actions";

let mapStateToProps = ({ log }, { page, id }) => ({
    loaded: log.user.hasLoaded,
    page,
    id,
});

let mapDispatchToProps = (dispatch) => ({
    handleLoad: (id, page) => dispatch(getUserActions(id, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
