import { DEPOSIT, WITHDRAW, LOAN, PAY_LOAN } from "../constant/constant";

export const accDeposit = (amount) => {
  return {
    type: DEPOSIT,
    payload: amount,
  };
};
export const accWithdraw = (amount) => {
  return {
    type: WITHDRAW,
    payload: amount,
  };
};

export const accLoan = (amount, purpose) => {
  return {
    type: LOAN,
    payload: {
      amount: amount,
      purpose: purpose,
    },
  };
};
export const accPayLoan = (amount) => {
  return {
    type: PAY_LOAN,
    payload: amount,
  };
};
