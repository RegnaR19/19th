import { useAppSelector } from "@/hoc/hooks"

// информация о профиле
const ProfileInfo = () => {

   const profile = useAppSelector(state => state.profilePage.profile)
   const email = useAppSelector(state => state.auth.email)

   if (email === '') {
      'Email не указан'
   }
   let ID = profile.userId
   let login = profile.fullName

   return (
      <>
         <div className="big-text2"><b>ID:</b> {ID}</div>
         <div className="big-text2"><b>Никнейм:</b> {login}</div>
         <div className="big-text2"><b>Email:</b> {email}</div>
      </>
   )
}

export default ProfileInfo