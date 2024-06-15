import { DEPOSIT, WITHDRAW, LOAN, PAY_LOAN } from "../constant/constant";

const initialState = {
  balance: 0,
  loan: 0,
  loanPur: "",
};

export default function accReducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case LOAN:
      return {
        ...state,
        loan: action.payload.amount,
        purpose: action.payload.purpose,
      };
    case PAY_LOAN:
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    default:
      return state;
  }
}
