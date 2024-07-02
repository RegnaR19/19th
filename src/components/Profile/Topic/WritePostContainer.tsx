// страница написания постов
import { connect } from "react-redux";
import { compose } from "redux";
import { addPostCreator } from "../../../redux/profileReducer";
import WritePost from "./WritePost";

let mapDispatchToProps = (dispatch: any) => {
   return {
      addPost: (newPostText: any, title: any) => {
         dispatch(addPostCreator(newPostText, title))
      }
   }
}

export default compose(connect(null, mapDispatchToProps))(WritePost);