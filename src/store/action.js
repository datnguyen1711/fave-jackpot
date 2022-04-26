import { SAVE_DEPOSITE } from "./constants";

export const saveData = (payload) => ({
  type: SAVE_DEPOSITE,
  payload,
});
