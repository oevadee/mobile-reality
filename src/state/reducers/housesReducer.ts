import { House, HousesState } from '../types/housesTypes';
import { HousesAction, HousesActionType } from '../types/housesTypes';

const initialState = {
  houses: [],
};

const housesReducer = (
  state: HousesState = initialState,
  action: HousesAction
) => {
  switch (action.type) {
    case HousesActionType.SET_HOUSES: {
      return {
        ...state,
        houses: action.payload,
      };
    }
    case HousesActionType.ADD_NEW_HOUSE: {
      return {
        ...state,
        houses: [
          ...state.houses,
          {
            ...action.payload,
          },
        ],
      };
    }
    case HousesActionType.REMOVE_HOUSE: {
      return {
        ...state,
        houses: state.houses.filter((el: House) => el._id !== action.payload),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default housesReducer;
