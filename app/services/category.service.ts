import {fetchAPI} from "../lib/api";
import {Category} from "../type";

export const getAllCategories = async (): Promise<Category[]> => {
  return await fetchAPI<Category[]>("/categories");
};
