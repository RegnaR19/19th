import { connect } from "react-redux";
import { compose } from "redux";
import PostElements from "./PostElements";
import { RootState } from "@/redux/redux-store";

let mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.profilePage
    }
}

export default compose(
    connect(mapStateToProps)
)
    (PostElements);