import { connect } from "react-redux";
import LoadTeam from "./LoadTeam";
import { loadTeam } from "../../data/actions";

let mapStateToProps = ({ log, user }) => ({
    hasLoaded: log.team.hasLoaded,
    teamToken: user.team_token,
});

let mapDispatchToProps = (dispatch) => ({
    handleLoad: (token) => dispatch(loadTeam(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoadTeam);
