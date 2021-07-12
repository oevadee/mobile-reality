import { Box, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Button from '../../componenets/Button/Button';
import { NewHouse } from '../../state/types/housesTypes';
import { addNewHouse } from '../../state/actions/housesActions';
import { useHistory } from 'react-router-dom';

const HousesAdder = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: NewHouse) => {
    dispatch(addNewHouse(values));
    history.push('/houses');
  };

  const handleHouseAdd = () => {};

  return (
    <Box
      d='flex'
      alignItems='center'
      justifyContent='center'
      h='100vh'
      flexDir='column'
    >
      <Text fontSize='4xl' marginBottom={6}>
        Add new House
      </Text>
      <Box w={400}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder='Address' {...register('address')} mb={4} />
          <Input
            placeholder='Description'
            {...register('description')}
            mb={4}
          />
          <Input
            type='number'
            placeholder='FloorsNumber'
            {...register('floorsNumber')}
            mb={4}
          />
          <Input placeholder='Label' {...register('label')} mb={4} />
          <Button onClick={handleHouseAdd}>Dodaj</Button>
        </form>
      </Box>
    </Box>
  );
};

export default HousesAdder;
