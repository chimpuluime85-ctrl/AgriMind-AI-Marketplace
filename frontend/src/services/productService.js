import api from "./api";

const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

const createProduct = async (productData, token) => {
  const response = await api.post("/products", productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const getMyProducts = async (token) => {
  const response = await api.get("/products/my-products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const updateProduct = async (id, productData, token) => {
  const response = await api.put(`/products/${id}`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const deleteProduct = async (id, token) => {
  const response = await api.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default {
  getProducts,
  getProductById,
  createProduct,
  getMyProducts,
  updateProduct,
  deleteProduct,
};