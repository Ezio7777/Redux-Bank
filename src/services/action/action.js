import { PLUS_COUNT } from "../constant/constant";
export const incrementBell = (data) => {
  return {
    type: PLUS_COUNT,
    data: data,
  };
};
