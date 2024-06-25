// информация о профиле
const ProfileInfo = ({ profile, auth }) => {

   let ID = profile.userId
   let login = profile.fullName

   return (
      <>
         <div className="big-text2"><b>ID:</b> {ID}</div>
         <div className="big-text2"><b>Никнейм:</b> {login}</div>
      </>
   )
}

export default ProfileInfo;