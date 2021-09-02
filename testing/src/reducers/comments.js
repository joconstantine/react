import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types';

const comments = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      debugger;
      const comments = action.payload.data.map((comment) => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
};

export default comments;
