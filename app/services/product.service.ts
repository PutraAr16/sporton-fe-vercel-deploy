import { fetchAPI } from "../lib/api";
import { Product } from "../type";

export const getAllProducts = async (): Promise<Product[]> => {
    return await fetchAPI<Product[]>("/products");
};

export const getProductById = async (id: string): Promise<Product> => {
    return await fetchAPI<Product>(`/products/${id}`);
};