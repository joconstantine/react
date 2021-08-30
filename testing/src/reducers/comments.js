import { SAVE_COMMENT } from 'actions/types';

const comments = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

export default comments;
