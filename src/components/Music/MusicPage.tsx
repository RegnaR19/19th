// основная страница профиля, содержит все компоненты
import { useState } from 'react';

const MusicPage = () => {

   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Музыка</div>

            <iframe style={{ border: 0, width: '100%', height: 180 }}
               width="100%" height="180"
               src="https://music.yandex.ru/iframe/#track/39412263/5089069"></iframe>
            <iframe style={{ border: 0, width: '100%', height: 180 }}
               width="100%" height="180"
               src="https://music.yandex.ru/iframe/#track/3616404/401451"></iframe>
         </div>
      </>
   );
}

export default MusicPage;