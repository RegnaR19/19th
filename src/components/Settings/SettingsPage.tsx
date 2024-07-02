// основная страница настроек
import ChangePassword from "./ChangePassword";
import UploadAvatar from "../Profile/common/UploadAvatar"
import { Text } from '@mantine/core';
import Indent10 from "../Forms/Indent";

const SettingsPage = () => {
   return (
      <>

         <div className="col2-app">
            <div className='big-title'>Настройки</div>
            <Indent10 />
            <ChangePassword />
         </div>
      </>
   );
}

export default SettingsPage;