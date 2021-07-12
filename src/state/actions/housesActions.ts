import { Dispatch } from 'redux';
import {
  House,
  HousesAction,
  HousesActionType,
  NewHouse,
} from '../types/housesTypes';
import { v4 as uuid } from 'uuid';

export const setHouses =
  (houses: House) => (dispatch: Dispatch<HousesAction>) => {
    return dispatch({
      type: HousesActionType.SET_HOUSES,
      payload: houses,
    });
  };

export const addNewHouse = (house: NewHouse) => {
  const _id = uuid();
  const createdAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();
  const newHouse = {
    ...house,
    _id,
    createdAt,
    updatedAt,
  };
  return {
    type: HousesActionType.ADD_NEW_HOUSE,
    payload: newHouse,
  };
};

export const removeHouse = (_id: string) => ({
  type: HousesActionType.REMOVE_HOUSE,
  payload: _id,
});
