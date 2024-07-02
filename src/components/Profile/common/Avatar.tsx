// аватар профиля
import { Avatar } from '@mantine/core';
import s from './Avatar.module.css'
import { useAppSelector } from '@/hoc/hooks';

const AvatarMain = () => {

   let avatar = useAppSelector(state => state.profilePage.profile.photos.large)

   return (
      <>
         <Avatar src={avatar} radius={'md'} color="indigo" className={s.avatar} />
      </>
   );
}

export default AvatarMain