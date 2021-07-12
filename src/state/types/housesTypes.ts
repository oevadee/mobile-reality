export interface House {
  address: string;
  createdAt: string;
  description: string;
  floorsNumber: number;
  label: string;
  updatedAt: string;
  _id: string;
}

export interface NewHouse {
  address: string;
  description: string;
  floorsNumber: number;
  label: string;
}

export type HousesState = {
  houses: House[] | [];
};

export enum HousesActionType {
  SET_HOUSES = 'SET_HOUSES',
  ADD_NEW_HOUSE = 'ADD_NEW_HOUSE',
  REMOVE_HOUSE = 'REMOVE_HOUSE',
}

interface SetHouses {
  type: HousesActionType.SET_HOUSES;
  payload: House;
}

interface AddNewHouse {
  type: HousesActionType.ADD_NEW_HOUSE;
  payload: House;
}

interface RemoveHouse {
  type: HousesActionType.REMOVE_HOUSE;
  payload: string;
}

export type HousesAction = SetHouses | AddNewHouse | RemoveHouse;
