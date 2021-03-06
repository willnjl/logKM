import { connect } from "react-redux";
import LoadTeam from "./LoadTeam";
import { loadTeam, loadFeed } from "../../data/actions";

let mapStateToProps = ({ log, user }) => ({
    teamLoaded: log.team.hasLoaded,
    feedLoaded: log.team.feed.hasLoaded,
    teamToken: user.team_token,
});

let mapDispatchToProps = (dispatch) => ({
    loadTeam: (token) => dispatch(loadTeam(token)),
    loadFeed: (token) => dispatch(loadFeed(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoadTeam);
