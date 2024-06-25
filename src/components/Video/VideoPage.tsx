// основная страница видео

const VideoPage = () => {
   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Видео</div>

            <iframe
               src="https://www.youtube.com/embed/dlFA0Zq1k2A"
               style={{ border: 0, height: '380px' }}
               width={'100%'}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            />
            <iframe
               width={'100%'} style={{ border: 0, height: '380px' }}
               src="https://www.youtube.com/embed/dFlDRhvM4L0"
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
         picture-in-picture; web-share" allowFullScreen></iframe>
         </div>
      </>
   );
}

export default VideoPage;