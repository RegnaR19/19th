// экспериментальная страница
import { useAppDispatch } from '@/hoc/hooks';

const GalleryPage = () => {

   const images = require.context('../../assets/', true);
   const imageList = images.keys().map(image => images(image));

   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Галерея изображений</div>
            Тут у нас картиночки
            {imageList.map((image, index) => (
               <img key={index} src={image.default} alt={`image-${index}`} />
            ))}
         </div>
      </>
   )

}

export default GalleryPage