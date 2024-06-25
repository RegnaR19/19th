import Cards from "./WallCards";
import { useInView, useSpring, animated } from '@react-spring/web'

type Props = {
   dialogsPage: any
}

const PostElements: React.FC<Props> = ({ ...props }) => {

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
      [...props.dialogsPage.posts].reverse().map((p: any) =>
         <Cards id={p.id} key={p.id} header={p.post} message={p.message}
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