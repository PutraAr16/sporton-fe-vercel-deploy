import {fetchAPI} from "../lib/api";
import {Bank} from "../type";

export const getAllBanks = async (): Promise<Bank[]> => {
  return await fetchAPI<Bank[]>("/banks");
};
