// api/products.js

import axios from 'axios';
import { BASE_API_URL } from '../../../lib/constants';
import { ProductType } from '../types/ProductType';

// Function to fetch product by ID
export const getProductById = async (productId:ProductType) => {
  try {
    const response = await axios.get(`${BASE_API_URL}products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product');
  }
};

// Function to update product
export const updateProduct = async (productId: ProductType, productData: ProductType) => {
  try {
    const response = await axios.put(`${BASE_API_URL}products/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating product');
  }
};
