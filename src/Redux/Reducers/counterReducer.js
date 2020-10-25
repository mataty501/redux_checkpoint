import { INCREAMENT_CONTER } from "../Actions/counterActions";
import { DECREAMENT_CONTER } from "../Actions/counterActions";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT_CONTER:
      return { counter: state.counter + 1 };
    case DECREAMENT_CONTER:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
