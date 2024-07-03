import { forwardRef } from 'react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
   img: string;
   name: string;
   icon?: React.ReactNode;
   id2: string,
   status: any,
   follow?: any,
   unfollow?: any
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
   ({ img, name, icon, id2, status, follow, ...others }: UserButtonProps, ref) => (
      <UnstyledButton
         ref={ref}
         sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.md,
            color: theme.primaryColor === 'dark' ? theme.colors.dark[0] : theme.black,

            '&:hover': {
               backgroundColor:
                  theme.primaryColor === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
            },
         })}
         {...others}
      >
         <Group>
            <Avatar src={img} radius="xl" size={20} />

            <div style={{ flex: 1 }}>
               <Text size="sm" fw={500}>
                  {name}
               </Text>
               <Text size="sm" fw={200}>
                  ID: {id2}
               </Text>

               <Text color="dimmed" size="xs">
                  {status}
               </Text>

            </div>
         </Group>
      </UnstyledButton>
   )
);

type Props = {
   id2: string,
   name: string,
   status: string,
   img: any
}

const UsersPage: React.FC<Props> = ({ id2, name, status, img }) => {
   return (
      <NavLink to={'/profile/' + id2} className={s.link}>
         <Group justify="center">
            <Menu withArrow>
               <Menu.Target>
                  <UserButton
                     img={img}
                     id2={id2}
                     name={name}
                     status={status}
                  />
               </Menu.Target>
            </Menu>
         </Group>
      </NavLink>
   );
}

export default UsersPage;