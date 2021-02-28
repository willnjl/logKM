import { connect } from "react-redux";
import Component from "./Component";
import { getUserActions } from "../../data/actions";

let mapStateToProps = ({}, { page, id, loaded }) => ({
    loaded,
    page,
    id,
});

let mapDispatchToProps = (dispatch) => ({
    loadUserActions: (id, page) => dispatch(getUserActions(id, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
