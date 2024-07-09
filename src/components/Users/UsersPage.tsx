import { forwardRef } from 'react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import { IconChevronRight } from '@tabler/icons-react';

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
         style={{
            padding: 'var(--mantine-spacing-md)',
            color: 'var(--mantine-color-text)',
            borderRadius: 'var(--mantine-radius-sm)',
         }}
         {...others}
      >
         <Group>
            <Avatar src={img} radius="xl" />

            <div style={{ flex: 1 }}>
               <Text size="lg" fw={500}>
                  {name}
               </Text>
               <Text size="lg" fw={200}>
                  ID: {id2}
               </Text>

               <Text c="dimmed" size="xs">
                  {status}
               </Text>

            </div>
            {icon || <IconChevronRight size="1rem" />}
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
         <Group>
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