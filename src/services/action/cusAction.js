import { CREATE_ACCOUNT, UPDATE_ACCOUNT } from "../constant/constant";

//create Account
export function createCustomer(fullName, nationalID) {
  return {
    type: CREATE_ACCOUNT,
    payload: {
      fullName,
      nationalID,
      createdAT: new Date().toISOString(),
    },
  };
}

//Update Account
export function updateCustomer(fullName) {
  return {
    type: UPDATE_ACCOUNT,
    payload: {
      fullName,
    },
  };
}
