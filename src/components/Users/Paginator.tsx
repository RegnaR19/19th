import React from "react";
import { Group, Pagination } from '@mantine/core';

type Props = {
   pageSize: number,
   totalUsersCount: number,
   currentPage: number,
   onPageChanged: any
}

const Paginator: React.FC<Props> = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   return (
      <>
         <Pagination.Root total={pagesCount} value={props.currentPage} onChange={props.onPageChanged} styles={(theme) => ({
            control: {
               '&[data-active]': {
                  backgroundImage: theme.fn.gradient({ from: '#0c8599', to: '91c800' }),
               },
            },
         })}>
            <Group spacing={5}>
               <Pagination.First />
               <Pagination.Previous />
               <Pagination.Items />
               <Pagination.Next />
               <Pagination.Last />
            </Group>
         </Pagination.Root>
      </>
   )
}


export default Paginator