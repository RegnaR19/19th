import { useAppSelector } from "@/hoc/hooks";
import Cards from "./WallCards";
import { useInView, useSpring, animated } from '@react-spring/web'


const PostElements = () => {
   
   const profilePosts = useAppSelector(state => state.profilePage)
   
   const [ref, style] = useInView(
      () => ({
         from: {
            opacity: 0,
            y: 50,
         },
         to: {
            opacity: 1,
            y: 0,
         },
      }),
      {
         rootMargin: '-20% 0%',
      }
   )

   let postElements =
      [...profilePosts.posts].reverse().map((p: any) =>
         <Cards id={p.id} key={p.id} header={p.title} postText={p.postText}
            likescount={p.likescount} img={p.img} />)

   return (
      <>
         <div className='big-title'>Все последние записи</div>
         <animated.div ref={ref} style={style}>
            {postElements}
         </animated.div>
      </>
   )
}

export default PostElements;