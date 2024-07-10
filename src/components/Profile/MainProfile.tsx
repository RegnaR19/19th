// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import Avatar from './common/Avatar';
import { Grid } from '@mantine/core';
import WritePost from './Topic/WritePost';
import PostElements from './Topic/PostElements';
import ProfileStatus from './ProfileStatus';
import Indent10 from '../Forms/Indent';
import UploadAvatar from './common/UploadAvatar';
import { useAppDispatch, useAppSelector } from '@/hoc/hooks';
import { getUserProfile, getUserStatus } from '@/redux/profileReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MainProfile = () => {

   const auth = useAppSelector(state => state.auth)
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

   // const [data, setData] = useState(null)
   // useEffect(() => {
   //    fetch('/back')
   //    .then(response => response.json())
   //    .then(response => setData(response.message))
   // }, [])

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
                  <ProfileInfo />

                  {/* {
                     !data ? 'Loading...' : data
                  } */}

               </Grid.Col>
               {!userId &&
                  <Grid.Col span={'content'}>  <UploadAvatar /> </Grid.Col>
               }
            </Grid>
         </div >
         <div className='col2-app'>
            <WritePost />
         </div>

         <div className='col2-app'>
            <PostElements />
         </div>

      </>
   );
}

export default MainProfile