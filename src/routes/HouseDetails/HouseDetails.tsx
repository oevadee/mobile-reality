import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Spinner, Text } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ICombinedReducers } from '../../state/store';
import Button from '../../componenets/Button/Button';
import { removeHouse } from '../../state/actions/housesActions';

export interface Params {
  id: string;
}

const HouseDetails = () => {
  const { id } = useParams<Params>();
  const houses = useSelector((state: ICombinedReducers) => state.houses.houses);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!houses) return <Spinner color='lightblue' />;

  const [propperHouse] = houses.filter((el) => el._id === id);

  console.log(propperHouse);

  const handleDelete = (id: string) => {
    dispatch(removeHouse(id));
    history.push('/houses');
  };

  return (
    <Box
      p={12}
      textAlign='center'
      d='flex'
      alignItems='center'
      justifyContent='center'
      flexDir='column'
    >
      <Text fontSize='4xl' marginBottom={6}>
        House {propperHouse.label}
      </Text>
      <Table w='50%' variant='simple'>
        <TableCaption>House {propperHouse.label}</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>Address</Th>
            <Th>Created at</Th>
            <Th>Description</Th>
            <Th>Floors Number</Th>
            <Th>label</Th>
            <Th>updated at</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{propperHouse._id.slice(-4)}</Td>
            <Td>{propperHouse.address}</Td>
            <Td>{propperHouse.createdAt}</Td>
            <Td>{propperHouse.description}</Td>
            <Td>{propperHouse.floorsNumber}</Td>
            <Td>{propperHouse.label}</Td>
            <Td>{propperHouse.updatedAt}</Td>
            <Td>
              <Button
                onClick={() => {
                  handleDelete(propperHouse._id);
                }}
              >
                Delete
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default HouseDetails;
