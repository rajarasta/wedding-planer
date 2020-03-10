const INITIAL_STATE = {
  testValue: null
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TEST_VALUE":
      return {
        ...state,
        testValue: action.payload
      };
    default:
      return state;
  }
};

export default testReducer;
