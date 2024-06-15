import { CREATE_ACCOUNT, UPDATE_ACCOUNT } from "../constant/constant";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        // ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAT: action.payload.createdAT,
      };

    case UPDATE_ACCOUNT:
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}
