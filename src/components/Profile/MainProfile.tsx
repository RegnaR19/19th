// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import Avatar from './common/Avatar';
import { Grid } from '@mantine/core';
import WritePostContainer from './Topic/WritePostContainer';
import PostElementsContainer from './Topic/PostElementsContainer';
import ProfileStatus from './ProfileStatus';
import Indent10 from '../Forms/Indent';
import UploadAvatar from './common/UploadAvatar';
import { useAppDispatch, useAppSelector } from '@/hoc/hooks';
import { getUserProfile, getUserStatus } from '@/redux/profileReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


const MainProfile = () => {

   const auth = useAppSelector(state => state.auth)
   const profile = useAppSelector(state => state.profilePage.profile)
   const { userId } = useParams()
   const authUserId = auth.userId
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const status = useAppSelector(state => state.profilePage.status)

   useEffect(() => {
      if (userId) {
         dispatch(getUserProfile(userId))
         dispatch(getUserStatus(userId))
      }
      else if (authUserId) {
         dispatch(getUserProfile(authUserId))
         dispatch(getUserStatus(authUserId))
      }
      else if (!authUserId) {
         navigate("/login")
      }
   }, [userId, authUserId])


   return (
      <>
         <div className='col2-app'>
            <Grid>
               <Grid.Col span={6}><Avatar /></Grid.Col>
               <Grid.Col span={6}>
                  {userId &&
                     <div className="big-text2">{status || "Статус не указан"}</div>
                  }
                  {!userId && <ProfileStatus />}
                  <Indent10 />
                  <ProfileInfo profile={profile} auth={auth} />
               </Grid.Col>
               {!userId &&
                  <Grid.Col span={'content'}>  <UploadAvatar /> </Grid.Col>
               }
            </Grid>
         </div >
         <div className='col2-app'>
            <WritePostContainer />
         </div>

         <div className='col2-app'>
            <PostElementsContainer />
         </div>

      </>
   );
}

export default MainProfile;