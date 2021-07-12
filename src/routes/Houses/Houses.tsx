import React from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../componenets/Button/Button';
import { House } from '../../state/types/housesTypes';
import { removeHouse } from '../../state/actions/housesActions';
import { ICombinedReducers } from '../../state/store';

const Houses = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state: ICombinedReducers) => state.houses.houses);

  const handleDelete = (id: string) => dispatch(removeHouse(id));

  if (!houses) return <h4>Loading...</h4>;

  return (
    <Box
      p={12}
      textAlign='center'
      d='flex'
      alignItems='center'
      justifyContent='center'
      flexDir='column'
    >
      <Button to='/house-adder'>Add new house</Button>
      <Text fontSize='4xl' marginBottom={6}>
        Houses
      </Text>
      <Table w='50%' variant='simple'>
        <TableCaption>Houses</TableCaption>
        <Thead>
          <Tr>
            <Th>Address</Th>
            <Th>Details</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {houses.map((el: House) => (
            <Tr key={el._id}>
              <Td>{el.address}</Td>
              <Td>
                <Button to={`/houses/${el._id}`}>Info</Button>
              </Td>
              <Td>
                <Button onClick={() => handleDelete(el._id)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Houses;
