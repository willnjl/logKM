import { connect } from "react-redux";
import UserOverview from "./UserOverview";
import { getUserOverview } from "../../data/actions/userActions";

let mapStateToProps = ({ user, team }) => ({ user, team });
let mapDisptatchToProps = (dispatch) => {
    return {
        handleLoad: (id) => dispatch(getUserOverview(id)),
    };
};
export default connect(mapStateToProps, mapDisptatchToProps)(UserOverview);
