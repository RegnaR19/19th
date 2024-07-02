import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import s from './Post.module.css'
import Indent10 from '@/components/Forms/Indent';
import { IconHeart, IconHeartFilled, IconMessageCircle } from '@tabler/icons-react';

type Props = {
   id: number,
   header: string,
   message: string,
   likescount: number,
   img: string
}

const Cards: React.FC<Props> = ({ id, header, message, likescount, img }) => {
   return (
      <><Card shadow="sm" p="lg" radius="md" withBorder className={s.item}>
         <Group position="apart" mb="xs">
            <Text weight={500} size="xl">{header}</Text>
            <Grid justify="center" align="center">
               <Grid.Col span="auto">
                  <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                     # {id}
                  </Button>
               </Grid.Col>
            </Grid>
         </Group>

         <Text>
            {message}
         </Text>
         <br />
         <Card.Section className={s.item}>
            <Image className={s.item} src={img} />
         </Card.Section><Indent10 />
         <Grid justify="center" align="center">
            <Grid.Col span="auto">
               <IconHeart color="crimson" />&nbsp;<b>{likescount} лайков</b>
            </Grid.Col>
            <Grid.Col span="auto">
               <IconMessageCircle color="green" />&nbsp;<b>{likescount} комментариев</b>
            </Grid.Col>
         </Grid>
      </Card><Indent10 /><br /></>
   )
}

export default Cards