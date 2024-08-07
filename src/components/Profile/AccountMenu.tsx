import { forwardRef } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
   name: string;
   email: string;
   icon?: React.ReactNode;
   image: any
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
   ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
      <UnstyledButton
         ref={ref}
         sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.md,
            color: theme.primaryColor === 'dark' ? theme.colors.dark[0] : theme.black,

            '&:hover': {
               backgroundColor:
                  theme.primaryColor === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
         })}
         {...others}
      >
         <Group>
            <Avatar src={image} radius="xl" />

            <div style={{ flex: 1 }}>
               <Text size="sm" fw={500}>
                  {name}
               </Text>

               <Text color="dimmed" size="xs">
                  ID: {email}
               </Text>
            </div>

            {icon || <IconChevronRight />}
         </Group>
      </UnstyledButton>
   )
);

const AccountMenu = (props: any) => {
   return (
      <Group justify="center">
         <Menu withArrow>
            <Menu.Target>
               <UserButton
                  name={props.profile.fullName}
                  email={props.profile.userId}
                  image={props.profile.photos.small}
               />
            </Menu.Target>
         </Menu>
      </Group>
   );
}

export default AccountMenu;